import { gql } from '@apollo/client'

export const REGISTERED_TIME = gql`
    query GetRegisteredTimesForUser(
        $userId: ID!
        $limit: Int
        $start: Int
        $sort: String
    ) {
        registeredTimes(
            where: { user: { id: $userId } }
            limit: $limit
            start: $start
            sort: $sort
        ) {
            id
            timeRegistered
            user {
                id
                name
            }
        }
    }
`

export const GET_ALL_REGISTERED_TIMES = gql`
    query GetAllRegisteredTimes($limit: Int, $start: Int, $sort: String) {
        registeredTimes(limit: $limit, start: $start, sort: $sort) {
            id
            timeRegistered
            user {
                id
                name
            }
        }
    }
`
