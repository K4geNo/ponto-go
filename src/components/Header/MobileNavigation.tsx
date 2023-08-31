import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'

import Link from 'next/link'
import { NavigationProps } from './Navigation'
import { RxHamburgerMenu } from 'react-icons/rx'

export function MobileNavigation({ navItem }: NavigationProps) {
    const navItemWithLogin = navItem.concat({
        label: 'Fazer login',
        href: '/login',
    })

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<RxHamburgerMenu />}
                bg="white"
            />

            <MenuList>
                {navItemWithLogin.map((item) => (
                    <MenuItem key={item.label} as={Link} href={item.href}>
                        {item.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}
