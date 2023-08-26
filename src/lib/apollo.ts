import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

import { parseCookies } from 'nookies'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: 'http://test.frontend.api.brainny.cc/graphql',
})

const authLink = setContext((_, { headers }) => {
    const { '@token': token } = parseCookies()

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({}),
})
