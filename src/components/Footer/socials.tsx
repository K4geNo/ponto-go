import { Icon, Image, Link } from '@chakra-ui/react'

export function Socials() {
    return (
        <>
            <Link href="https://www.instagram.com/brainny.cc/" isExternal>
                <Icon
                    as={Image}
                    boxSize={'60px'}
                    src="/images/icons/instagram.svg"
                />
            </Link>
            <Link href="https://www.facebook.com/brainnyss" isExternal>
                <Icon
                    as={Image}
                    boxSize={'60px'}
                    src="/images/icons/facebook.svg"
                />
            </Link>
            <Link href="https://www.linkedin.com/company/brainnyss/" isExternal>
                <Icon
                    as={Image}
                    boxSize={'60px'}
                    src="/images/icons/linkedin.svg"
                />
            </Link>
        </>
    )
}
