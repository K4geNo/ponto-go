'use client'

import { Flex, Heading, Text } from '@chakra-ui/react'

import Image from 'next/image'
import { LoginForm } from '@/components/Form/LoginForm'

export default function Login() {
    return (
        <Flex
            align="center"
            justify="center"
            w="100vw"
            h="100vh"
            gap="150px"
            bg="#FFFFFFB2"
        >
            <Flex flexDir="column" align="center">
                <Image
                    src="/images/illustration-login.png"
                    alt="Logo"
                    width={585}
                    height={663}
                />

                <Heading
                    pt="1.25rem"
                    color="primary"
                    fontSize="2.5rem"
                    fontWeight="bold"
                >
                    Bem vindo ao PontoGo
                </Heading>

                <Text
                    width="381px"
                    pt="0.625rem"
                    fontSize="1.5625rem"
                    color="primary"
                    textAlign="center"
                    opacity="0.7"
                >
                    Aqui você fará toda gestão do seu sistema de pontos.
                </Text>
            </Flex>

            <Flex flexDir="column" gap="1.875rem">
                <Image
                    src="/images/logo-1.svg"
                    alt="Logo"
                    width={322}
                    height={75}
                />

                <Heading>Faça login</Heading>

                <LoginForm />
            </Flex>
        </Flex>
    )
}
