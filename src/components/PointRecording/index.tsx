import {
    Box,
    Button,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react'

import { CREATE_REGISTERED_TIME } from '@/graphql/mutations'
import { PiClockCountdownFill } from 'react-icons/pi'
import { REGISTERED_TIME } from '@/graphql/queries'
import { formattedDate } from '@/utils/format-date'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@apollo/client'

interface PointRecordingProps {
    children?: React.ReactNode
}

export function PointRecording({ children }: PointRecordingProps) {
    const { user } = useAuth()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const currentTime = new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    })

    const currentDate = formattedDate(new Date())

    const [createRegisteredTime, { loading }] = useMutation(
        CREATE_REGISTERED_TIME,
    )

    const handleCreateRegisteredTime = async () => {
        await createRegisteredTime({
            variables: {
                timeRegistered: new Date(),
                userId: Number(user?.id),
            },
            refetchQueries: [
                {
                    query: REGISTERED_TIME,
                    variables: {
                        userId: Number(user?.id),
                        limit: 7,
                    },
                },
            ],
        })

        onClose()
    }

    return (
        <>
            <Button
                onClick={onOpen}
                px="40px"
                maxW="200px"
                h="3.125rem"
                colorScheme="none"
                bg="primary"
                fontWeight="normal"
                mb="1.875rem"
            >
                {children}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent px="50px" py="60px">
                    <ModalHeader
                        textAlign="center"
                        fontSize="1.25rem"
                        fontWeight="bold"
                        color="grey"
                    >
                        Registrar novo ponto
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDir="column"
                        alignItems="center"
                    >
                        <Icon
                            as={PiClockCountdownFill}
                            w="100px"
                            h="100px"
                            color="primary"
                        />

                        <Box textAlign="center">
                            <Text
                                fontSize="30px"
                                fontWeight="bold"
                                color="primary"
                            >
                                {currentTime}
                            </Text>

                            <Text
                                fontWeight="normal"
                                color="primary"
                                opacity="0.5"
                            >
                                {currentDate}
                            </Text>
                        </Box>
                    </ModalBody>

                    <ModalFooter
                        display="flex"
                        alignItems="center"
                        flexDir="column"
                        rowGap="0.625rem"
                    >
                        <Button
                            colorScheme="none"
                            h="50px"
                            minW="200px"
                            bg="primary"
                            fontWeight="normal"
                            onClick={handleCreateRegisteredTime}
                            isLoading={loading}
                        >
                            Bater ponto
                        </Button>
                        <Button
                            variant="outline"
                            onClick={onClose}
                            border="1px solid #330693"
                            h="50px"
                            minW="200px"
                            fontWeight="normal"
                            color="primary"
                            colorScheme="none"
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
