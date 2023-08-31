import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import { Plan } from './Plan'

export function OurPlans() {
    return (
        <Flex flexDir="column" align="center" mt={['3.75rem', '5.625rem']}>
            <Box textAlign="center">
                <Heading
                    fontSize={['1.5rem', '2.5rem']}
                    color="white"
                    fontWeight="extrabold"
                >
                    Encontre o plano perfeito
                </Heading>

                <Text
                    color="white"
                    fontSize={['1rem', '1.25rem']}
                    opacity="0.7"
                    w={['unset', '40rem']}
                    mt="0.625rem"
                >
                    Escolha o plano que melhor se encaixa na sua empresa e faça
                    sua assinatura, dentro de 72h iremos liberar seus acessos.
                </Text>
            </Box>

            <Flex
                align="center"
                pt={['2.5rem', '4.375rem']}
                h="full"
                justify="center"
                mx="auto"
                pos={['relative']}
                flexDirection={['column', 'row']}
            >
                <Plan.Root
                    opacity="0.3"
                    mr={['unset', 'unset', '-10rem', '-2.5rem']}
                >
                    <Plan.Content
                        title="Plano Bronze"
                        price="R$ 30"
                        description="Uso de 5 colaboradores"
                    />

                    <Plan.List
                        features={[
                            'Área de meus registros',
                            'Dashboard',
                            'Acesso de 5 colaboradores',
                        ]}
                        offFeatures={['Suporte exclusivo', 'Email corporativo']}
                    />
                </Plan.Root>

                <Plan.Root>
                    <Plan.Content
                        title="Plano Prata"
                        price="R$ 50"
                        description="Uso de 10 colaboradores"
                    />

                    <Plan.List
                        features={[
                            'Área de meus registros',
                            'Dashboard',
                            'Acesso de 5 colaboradores',
                        ]}
                        offFeatures={['Suporte exclusivo', 'Email corporativo']}
                    />

                    <Plan.Action />
                </Plan.Root>

                <Plan.Root
                    opacity="0.3"
                    ml={['unset', 'unset', '-10rem', '-2.5rem']}
                >
                    <Plan.Content
                        title="Plano Ouro"
                        price="R$ 100"
                        description="Uso de 20 colaboradores"
                    />

                    <Plan.List
                        features={[
                            'Área de meus registros',
                            'Dashboard',
                            'Acesso de 5 colaboradores',
                            'Suporte exclusivo',
                        ]}
                        offFeatures={['Email corporativo']}
                    />
                </Plan.Root>
            </Flex>
        </Flex>
    )
}
