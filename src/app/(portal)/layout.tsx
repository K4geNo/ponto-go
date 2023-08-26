'use client'

import { Flex } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Flex w="full" h="100vh" bg="#F2F2F2">
            <Sidebar />
            {children}
        </Flex>
    )
}
