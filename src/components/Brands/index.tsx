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
            spacing={10}
            align="center"
            justify="space-between"
            w="full"
            mt="3.125rem"
        >
            {BRANDS.map((brand, index) => (
                <Image key={index} src={brand.src} alt="Brand" />
            ))}
        </Stack>
    )
}
