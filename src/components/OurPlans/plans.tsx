import {
    Flex,
    FlexProps,
    Heading,
    List,
    ListIcon,
    ListItem,
    Text,
} from '@chakra-ui/react'

import { MdCheckCircle } from 'react-icons/md'

interface PlansProps extends FlexProps {
    title: string
    price: string
    description: string
    features: string[]
}

export function Plans({
    title,
    description,
    features,
    price,
    ...props
}: PlansProps) {
    return (
        <Flex
            flexDir="column"
            align="center"
            py="2.5rem"
            px="2.8125rem"
            bg="rgba(255, 255, 255, 0.08)"
            border="1px solid"
            borderColor="secondary"
            backdropFilter="blur(2.5px)"
            w="20.8125rem"
            h="25.6875rem"
            rounded={10}
            {...props}
        >
            <Heading>{title}</Heading>

            <Text>{price}</Text>

            <Text>{description}</Text>

            {features.map((feature, index) => (
                <List spacing={3} key={index} alignSelf="self-start">
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        {feature}
                    </ListItem>
                </List>
            ))}
        </Flex>
    )
}
