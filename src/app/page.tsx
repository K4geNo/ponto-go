'use client'

import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

import { Brands } from '@/components/Brands'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { OurPlans } from '@/components/OurPlans'

export default function Home() {
    return (
        <Box
            w="full"
            py="2.8125rem"
            h="full"
            maxH="max-content"
            position="relative"
            _before={{
                content: '""',
                background: "url('/images/hero-section-home.png') no-repeat",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -2,
            }}
            _after={{
                content: '""',
                background: "url('/images/hero-bg-cover.png') no-repeat",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
            }}
        >
            <Container maxW="75rem" display="flex" flexDir="column">
                <Header />
                <HeroSection />
                <Brands />
                <OurPlans />
            </Container>
        </Box>
    )
}
