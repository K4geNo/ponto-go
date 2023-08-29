'use client'

import { Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { formattedDate, formattedTime } from '@/utils/format-date'
import { useCallback, useState } from 'react'

import { GET_ALL_REGISTERED_TIMES } from '@/graphql/queries'
import { Pagination } from '@/components/Pagination'
import { RegisteredTimesData } from '../meus-registros/page'
import { useQuery } from '@apollo/client'

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const { data } = useQuery<RegisteredTimesData>(GET_ALL_REGISTERED_TIMES, {
        variables: {
            limit: 7,
            start: (currentPage - 1) * 7,
            sort: 'timeRegistered:desc',
        },
    })

    const handlePreviousPage = useCallback(() => {
        setCurrentPage((oldValue) => oldValue - 1)
    }, [])

    const handleNextPage = useCallback(() => {
        setCurrentPage((oldValue) => oldValue + 1)
    }, [])

    return (
        <Flex flexDir="column" pt="2.5rem" px="1.875rem" w="full">
            <Table>
                <Thead>
                    <Tr>
                        <Th
                            pl="0"
                            textTransform="capitalize"
                            fontSize="22px"
                            fontWeight="bold"
                            letterSpacing="0.44px"
                            color="grey"
                        >
                            Colaborador
                        </Th>
                        <Th
                            textTransform="capitalize"
                            fontSize="22px"
                            fontWeight="bold"
                            letterSpacing="0.44px"
                            color="grey"
                        >
                            Data
                        </Th>
                        <Th
                            textTransform="capitalize"
                            fontSize="22px"
                            fontWeight="bold"
                            letterSpacing="0.44px"
                            color="grey"
                        >
                            Hora
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.registeredTimes.map((registered) => (
                        <Tr pos="relative" py="14px" key={registered.id}>
                            <Td
                                bg="white"
                                pl="3.75rem"
                                _before={{
                                    content: '""',
                                    position: 'absolute',
                                    left: '15px',
                                    top: '14px',
                                    width: '5px',
                                    height: 'calc(100% - 28px)',
                                    bg: 'primary',
                                    borderRadius: '30px',
                                }}
                            >
                                <Text
                                    fontSize="1.375rem"
                                    fontWeight="bold"
                                    color="grey"
                                    lineHeight="normal"
                                >
                                    {registered.user.name}
                                </Text>

                                <Text
                                    fontSize="1rem"
                                    fontWeight="normal"
                                    opacity="0.5"
                                >
                                    {registered.user.id}
                                </Text>
                            </Td>
                            <Td bg="white">
                                <Text
                                    fontSize="22px"
                                    fontWeight="normal"
                                    color="grey"
                                    opacity="0.6"
                                >
                                    {formattedDate(
                                        new Date(registered.timeRegistered),
                                    )}
                                </Text>
                            </Td>
                            <Td bg="white">
                                <Text
                                    fontSize="22px"
                                    fontWeight="normal"
                                    color="grey"
                                    opacity="0.6"
                                >
                                    {formattedTime(
                                        new Date(registered.timeRegistered),
                                    )}
                                </Text>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                nextPage={handleNextPage}
                previousPage={handlePreviousPage}
            />
        </Flex>
    )
}
