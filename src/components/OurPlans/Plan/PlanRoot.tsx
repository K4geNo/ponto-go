import { Flex, FlexProps } from '@chakra-ui/react'

interface PlanRootProps extends FlexProps {
    children: React.ReactNode
}

/**
 * Renders the root component for a plan.
 * @param {Children} children - The props object containing the children to be rendered inside the PlanRoot component.
 * @param {FlexProps} ...props - The props object containing the props to be spread into the Flex component.
 * @returns {JSX.Element} - A JSX Element representing the PlanRoot component.
 */
export function PlanRoot({ children, ...props }: PlanRootProps): JSX.Element {
    return (
        <Flex
            flexDir="column"
            align="center"
            py="2.5rem"
            px="2.5rem"
            bg="rgba(255, 255, 255, 0.08)"
            border="1px solid"
            borderColor="secondary"
            backdropFilter="blur(2.5px)"
            w="20.8125rem"
            h="full"
            minH="25.6875rem"
            rounded={10}
            {...props}
        >
            {children}
        </Flex>
    )
}
