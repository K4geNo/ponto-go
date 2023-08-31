import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'

import { Copyright } from './Copyright'
import { Socials } from './socials'

export function Footer() {
    return (
        <Stack direction="column">
            <Flex
                align="center"
                justify="center"
                mt="6.25rem"
                py="1.25rem"
                borderY="1px solid"
                borderColor="secondary"
                w="full"
                columnGap="3.75rem"
                rowGap={['1.25rem', '0']}
                flexDir={['column', 'row']}
            >
                <Box color="white">
                    <Heading fontSize={['1rem', '1.25rem']} fontWeight="bold">
                        @pontogo
                    </Heading>
                    <Text fontWeight="light" mt="5px">
                        Se conecta com a gente
                    </Text>
                </Box>

                <Stack direction="row" spacing={['5', '10']} align="center">
                    <Socials />
                </Stack>
            </Flex>

            <Copyright />
        </Stack>
    )
}
