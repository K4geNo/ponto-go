// interface HeaderProps { }

import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { Navigation } from './Navigation'

const NAV_ITEMS = [
    {
        label: 'Inicio',
        href: '/',
    },
    {
        label: 'Planos',
        href: '/',
    },
]

export function Header() {
    return (
        <Flex maxW="75rem" justify="space-between" align="center">
            <Image
                src="/images/logo-1.svg"
                alt="Logo"
                width={164}
                height={38}
            />

            <Navigation navItem={NAV_ITEMS} login />
        </Flex>
    )
}
