'use client'

import * as z from 'zod'

import {
    Button,
    Flex,
    Icon,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react'

import { FaEyeSlash } from 'react-icons/fa'
import { Input } from './Input'
import { IoEyeSharp } from 'react-icons/io5'
import { useAuth } from '@/hooks/useAuth'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
    email: z.string().email({ message: 'O e-mail deve ser válido' }),
    password: z.string().min(8, {
        message: 'A senha deve ter no mínimo 8 caracteres',
    }),
})

export type LoginSchemaType = z.infer<typeof loginSchema>

export function LoginForm() {
    const { login, loading, error } = useAuth()

    const [show, setShow] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = async (data: LoginSchemaType) => {
        await login(data.email, data.password)
    }

    return (
        <Flex
            rowGap="1.25rem"
            flexDir="column"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            minW="25rem"
            w="full"
        >
            <Input
                label="E-mail"
                placeholder="examplo@gmail.com"
                {...register('email')}
                error={errors.email}
            />

            <InputGroup pos="relative">
                <Input
                    label="Senha"
                    placeholder="********"
                    type={show ? 'text' : 'password'}
                    {...register('password')}
                    error={errors.password}
                />

                <InputRightElement>
                    <Icon
                        as={show ? IoEyeSharp : FaEyeSlash}
                        color="primary"
                        onClick={() => setShow(!show)}
                        cursor="pointer"
                        pos="absolute"
                        right="1.25rem"
                        bottom="-2.2rem"
                        boxSize="1.5rem"
                    />
                </InputRightElement>
            </InputGroup>

            <Text
                fontSize="0.9375rem"
                color="primary"
                textDecoration="underline"
            >
                Esqueci minha senha
            </Text>

            <Button
                bg="primary"
                colorScheme="none"
                rounded={'5px'}
                size="lg"
                type="submit"
                _hover={{
                    bg: 'rgba(51, 6, 147, 0.9)',
                }}
                fontSize={'1rem'}
                fontWeight={'normal'}
                isLoading={loading}
            >
                Entrar
            </Button>

            {error && (
                <Text color="red" textAlign="center">
                    E-mail ou senha inválidos
                </Text>
            )}
        </Flex>
    )
}
