import {
    Input as ChakraInput,
    InputProps as ChakraInputProps,
    FormControl,
    FormErrorMessage,
    FormLabel,
} from '@chakra-ui/react'
import { ForwardRefRenderFunction, forwardRef } from 'react'

import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string
    label?: string
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, error = null, ...rest },
    ref,
) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && (
                <FormLabel
                    htmlFor={name}
                    fontSize={'sm'}
                    fontWeight={'medium'}
                    color={'grey'}
                >
                    {label}
                </FormLabel>
            )}
            <ChakraInput
                name={name}
                id={name}
                mb="1"
                w="full"
                rounded="lg"
                bg="white"
                p="3"
                size={'lg'}
                color="grey"
                border={'1px solid rgba(32, 41, 46, 0.30)'}
                _focus={{
                    borderColor: 'transparent',
                    outline: 'none',
                    ring: '2',
                    ringColor: 'primary',
                }}
                ref={ref}
                {...rest}
            />

            {!!error && (
                <FormErrorMessage fontSize={'sm'} color={'red.500'}>
                    {error.message || 'Ops, algo deu errado'}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)
