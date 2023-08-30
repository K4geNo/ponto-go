import { List, ListIcon, ListItem } from '@chakra-ui/react'

import { BiCheck } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'

interface PlanListProps {
    features: string[]
    offFeatures?: string[]
}

/**
 * Renders the list of features of a plan.
 * @param {string[]} features - The list of features of a plan.
 * @returns {JSX.Element} - The JSX element representing the list of features of a plan.
 */
export function PlanList({ features, offFeatures }: PlanListProps) {
    return (
        <>
            <List spacing={3} mt="1.875rem" color="white">
                {features.map((feature) => (
                    <ListItem key={feature}>
                        <ListIcon as={BiCheck} color="white" />
                        {feature}
                    </ListItem>
                ))}

                {offFeatures &&
                    offFeatures.map((feature) => (
                        <ListItem key={feature} opacity="0.3">
                            <ListIcon as={IoIosClose} color="white" />
                            {feature}
                        </ListItem>
                    ))}
            </List>
        </>
    )
}
