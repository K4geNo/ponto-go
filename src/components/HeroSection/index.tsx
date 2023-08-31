import { Button, Flex, Heading, Img, Stack, Text } from '@chakra-ui/react'

export function HeroSection() {
    return (
        <Flex align="center" justify="space-between" mt={['4rem', '3.125rem']}>
            <Flex flexDir="column">
                <Text
                    fontSize={['1rem', '1.5rem']}
                    fontWeight="300"
                    color="white"
                    letterSpacing="0.2475rem"
                    textTransform="uppercase"
                >
                    Esquece o ponto manual
                </Text>

                <Heading
                    fontSize={['1.5rem', '2.5rem']}
                    fontWeight="extrabold"
                    color="white"
                    lineHeight="normal"
                    mt="0.6875rem"
                >
                    Chegou a nova realidade para{' '}
                    <Text as="span" color="secondary">
                        Controle de Pontos
                    </Text>
                </Heading>

                <Text
                    color="white"
                    fontSize={['1rem', '1.125rem']}
                    mt="0.9375rem"
                    fontWeight="500"
                >
                    Com o PontoGo seus colaboradores poderão bater seus pontos
                    de forma fácil e rápida, possuindo também uma Dashboard
                    intuitiva.
                </Text>

                <Stack direction="row" spacing={15} mt="1.875rem">
                    <Button
                        bg="secondary"
                        h="3.125rem"
                        w="10rem"
                        color="white"
                        fontWeight="500"
                        colorScheme="none"
                    >
                        Assinar agora
                    </Button>

                    <Button
                        variant="outline"
                        colorScheme="none"
                        h="3.125rem"
                        w="10rem"
                        borderColor="white"
                        color="white"
                        fontWeight="normal"
                    >
                        Ver planos
                    </Button>
                </Stack>
            </Flex>

            <Img
                src="/images/hero-virtual.png"
                alt=""
                width={{
                    lg: 400,
                    xl: 600,
                }}
                objectFit="contain"
                height={500}
                display={['none', 'none', 'none', 'block']}
            />
        </Flex>
    )
}
