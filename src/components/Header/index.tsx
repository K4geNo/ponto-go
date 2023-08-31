import { Flex, Image, useMediaQuery } from '@chakra-ui/react'

import { MobileNavigation } from './MobileNavigation'
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
    const [mobile] = useMediaQuery('(max-width: 768px)')

    return (
        <Flex maxW="75rem" justify="space-between" align="center">
            <Image
                src="/images/logo-2.svg"
                alt="Logo"
                width={164}
                height={38}
            />

            {mobile && <MobileNavigation navItem={NAV_ITEMS} />}

            {!mobile && <Navigation navItem={NAV_ITEMS} login />}
        </Flex>
    )
}
