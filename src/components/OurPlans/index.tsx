// interface PlansProps { }

import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import { Plans } from './plans'

export function OurPlans() {
    return (
        <Flex flexDir="column" align="center" mt="5.625rem">
            <Box textAlign="center">
                <Heading fontSize="2.5rem" color="white" fontWeight="extrabold">
                    Encontre o plano perfeito
                </Heading>

                <Text
                    color="white"
                    fontSize="1.25rem"
                    opacity="0.7"
                    w="40rem"
                    mt="0.625rem"
                >
                    Escolha o plano que melhor se encaixa na sua empresa e faça
                    sua assinatura, dentro de 72h iremos liberar seus acessos.
                </Text>
            </Box>

            <Flex
                align="center"
                pt="4.375rem"
                h="full"
                justify="center"
                mx="auto"
            >
                <Plans
                    title="Plano Bronze"
                    price="R$ 99,90"
                    description="Plano ideal para quem está começando"
                    features={[
                        'Até 1000 clientes',
                        'Até 1000 produtos',
                        'Até 1000 pedidos',
                    ]}
                    zIndex={1}
                    mr="-40px"
                    opacity="0.9"
                />

                <Plans
                    title="Plano Prata"
                    price="R$ 50"
                    description="Uso de 10 colaboradores"
                    features={[
                        'Até 1000 clientes',
                        'Até 1000 produtos',
                        'Até 1000 pedidos',
                    ]}
                    zIndex={2}
                    h="491px"
                />

                <Plans
                    title="Plano Bronze"
                    price="R$ 99,90"
                    description="Plano ideal para quem está começando"
                    features={[
                        'Até 1000 clientes',
                        'Até 1000 produtos',
                        'Até 1000 pedidos',
                    ]}
                    zIndex={1}
                    ml="-40px"
                />
            </Flex>
        </Flex>
    )
}
