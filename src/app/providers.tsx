'use client'

import { ApolloProvider } from '@apollo/client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { client } from '@/lib/apollo'
import { theme } from '@/styles/theme'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <ApolloProvider client={client}>{children}</ApolloProvider>
            </ChakraProvider>
        </CacheProvider>
    )
}
