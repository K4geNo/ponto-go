import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation Login($identifier: String!, $password: String!) {
        login(input: { identifier: $identifier, password: $password }) {
            jwt
            user {
                id
                role {
                    name
                }
            }
        }
    }
`

export const CREATE_REGISTERED_TIME = gql`
    mutation CreateRegisteredTime($timeRegistered: DateTime!, $userId: ID!) {
        createRegisteredTime(
            input: { data: { timeRegistered: $timeRegistered, user: $userId } }
        ) {
            registeredTime {
                id
            }
        }
    }
`
