import { Divider, Stack, Text } from '@chakra-ui/react'

export function Copyright() {
    return (
        <Stack
            direction="row"
            textAlign="center"
            mt="3.75rem"
            spacing={['1rem', '2.5rem']}
            alignItems="center"
        >
            <Divider orientation="horizontal" />
            <Text
                fontWeight="normal"
                color="white"
                minW={['12rem', '18.75rem']}
                fontSize={['0.75rem', '1rem']}
            >
                PontoGo - Todos direitos reservados
            </Text>
            <Divider orientation="horizontal" />
        </Stack>
    )
}
