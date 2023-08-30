import { Heading, Text } from '@chakra-ui/react'

interface PlanContentProps {
    title: string
    price: string
    description: string
}

/**
 * Renders the content of a plan, including its title, price, and description.
 * @param {title} title - The title of the plan.
 * @param {price} price - The price of the plan.
 * @param {description} description - The description of the plan.
 * @returns {JSX.Element} - The JSX element representing the plan content.
 */
export function PlanContent({ title, price, description }: PlanContentProps) {
    return (
        <>
            <Heading fontSize="1.25rem" color="white" fontWeight="normal">
                {title}
            </Heading>

            <Text fontSize="3.125rem" color="white" fontWeight="800">
                {price}
            </Text>

            <Text fontWeight="light" color="secondary" textAlign="center">
                {description}
            </Text>
        </>
    )
}
