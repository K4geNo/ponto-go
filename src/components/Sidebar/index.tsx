'use client'

import { Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import { RiDashboardLine, RiShutDownLine } from 'react-icons/ri'

import NextLink from 'next/link'
import { PiNotepadLight } from 'react-icons/pi'
import { useAuth } from '@/hooks/useAuth'
import { useMemo } from 'react'

const NAV_ITEMS = [
    {
        label: 'Dashboard',
        icon: RiDashboardLine,
        href: '/dashboard',
    },
    {
        label: 'Meus registros',
        icon: PiNotepadLight,
        href: '/meus-registros',
    },
]

export function Sidebar() {
    const { logout, user } = useAuth()

    const navItems = useMemo(() => {
        if (user?.role.name === 'user') {
            return NAV_ITEMS.filter((item) => item.label === 'Meus registros')
        }

        return NAV_ITEMS.filter((item) => item.label !== 'Meus registros')
    }, [user?.role.name])

    return (
        <Flex
            flexDir="column"
            w="11.25rem"
            pt="2.5rem"
            h="100vh"
            boxShadow="0px 4px 10px 0px rgba(0, 0, 0, 0.10)"
            bg="white"
        >
            <Image src="/images/logo-1.svg" alt="Logo" px="1.25rem" />

            {navItems.map((item) => (
                <Link
                    key={item.label}
                    href="/dashboard"
                    as={NextLink}
                    display="flex"
                    alignItems="center"
                    mt="1.875rem"
                    w="full"
                    borderY="1px solid #00000014"
                    _before={{
                        content: '""',
                        display: 'block',
                        h: '6.25rem',
                        borderLeft: '4px solid #330693',
                    }}
                    _hover={{
                        textDecoration: 'none',
                    }}
                >
                    <Flex
                        align="center"
                        justify="center"
                        w="full"
                        columnGap="0.625rem"
                        color="primary"
                    >
                        <RiDashboardLine size={24} />
                        <Text fontSize="0.875rem">{item.label}</Text>
                    </Flex>
                </Link>
            ))}

            <Button
                mt="auto"
                mb="1.25rem"
                display="flex"
                colorScheme="none"
                color="black"
                columnGap="0.625rem"
                fontWeight="normal"
                alignItems="center"
                onClick={logout}
            >
                <RiShutDownLine size={24} />
                Sair
            </Button>
        </Flex>
    )
}
