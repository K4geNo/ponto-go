// interface BrandsProps { }

import { Image, Stack } from '@chakra-ui/react'

const BRANDS = [
    {
        src: '/images/marcas/brainny.svg',
    },
    {
        src: '/images/marcas/amo-pet.svg',
    },
    {
        src: '/images/marcas/bus.svg',
    },
    {
        src: '/images/marcas/go-study.svg',
    },
]

export function Brands() {
    return (
        <Stack
            direction="row"
            spacing={{
                base: 10,
                lg: 5,
                xl: 10,
            }}
            align="center"
            justify="space-between"
            w="full"
            mt="3.125rem"
            overflowX={['scroll', 'scroll', 'scroll', 'unset']}
        >
            {BRANDS.map((brand, index) => (
                <Image key={index} src={brand.src} alt="Brand" />
            ))}
        </Stack>
    )
}
