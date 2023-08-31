'use client'

import { Flex, Heading, Text } from '@chakra-ui/react'

import Image from 'next/image'
import Link from 'next/link'
import { LoginForm } from '@/components/Form/LoginForm'

export default function Login() {
    return (
        <Flex
            align="center"
            justify="center"
            w="100vw"
            h="100vh"
            gap={'9.375rem'}
            bg="#FFFFFFB2"
        >
            <Flex
                flexDir="column"
                align="center"
                display={['none', 'none', 'none', 'none', 'flex']}
            >
                <Image
                    src="/images/illustration-login.png"
                    alt="Logo"
                    width={585}
                    height={663}
                    quality={100}
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
                <Link href="/">
                    <Image
                        src="/images/logo-1.svg"
                        alt="Logo"
                        width={322}
                        height={75}
                    />
                </Link>

                <Heading>Faça login</Heading>

                <LoginForm />
            </Flex>
        </Flex>
    )
}
