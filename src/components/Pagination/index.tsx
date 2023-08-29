import { Button, Stack } from '@chakra-ui/react'
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from 'react-icons/md'

interface PaginationProps {
    currentPage: number
    totalPages: number
    nextPage: () => void
    previousPage: () => void
}

export function Pagination({
    currentPage,
    totalPages,
    nextPage,
    previousPage,
}: PaginationProps) {
    return (
        <Stack direction="row" spacing={2} mt="20px">
            <Button
                onClick={previousPage}
                disabled={currentPage === 1}
                colorScheme="none"
                variant="outline"
            >
                <MdOutlineKeyboardArrowLeft size={15} />
            </Button>
            <Button colorScheme="none" variant="outline">
                {currentPage}
            </Button>
            <Button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                colorScheme="none"
                variant="outline"
            >
                <MdOutlineKeyboardArrowRight size={15} />
            </Button>
        </Stack>
    )
}
