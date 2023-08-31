import { Flex, Link } from '@chakra-ui/react'

import NextLink from 'next/link'

export interface NavigationProps {
    navItem: {
        label: string
        href: string
    }[]
    login?: boolean
}

export function Navigation({ navItem, login }: NavigationProps) {
    return (
        <Flex as="nav" columnGap="2.5rem" align="center">
            {navItem.map((item) => (
                <Link
                    key={item.label}
                    as={NextLink}
                    href={item.href}
                    color="white"
                    _hover={{
                        textDecoration: 'none',
                    }}
                >
                    {item.label}
                </Link>
            ))}

            {login && (
                <Link
                    as={NextLink}
                    href="/login"
                    _hover={{
                        textDecoration: 'none',
                    }}
                    bg="white"
                    color="primary"
                    px="37px"
                    py="13"
                    rounded="5px"
                >
                    Fazer login
                </Link>
            )}
        </Flex>
    )
}
