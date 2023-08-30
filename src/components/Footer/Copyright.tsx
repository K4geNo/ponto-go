import { Divider, Stack, Text } from '@chakra-ui/react'

export function Copyright() {
    return (
        <Stack
            direction="row"
            textAlign="center"
            mt="3.75rem"
            spacing={'1.875rem'}
            alignItems="center"
        >
            <Divider orientation="horizontal" />
            <Text fontWeight="normal" color="white" minW="18.75rem">
                PontoGo - Todos direitos reservados
            </Text>
            <Divider orientation="horizontal" />
        </Stack>
    )
}
