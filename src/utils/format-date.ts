import { format } from 'date-fns'

export const formattedTime = (date: Date) => {
    const formattedDateToTime = format(date, 'HH:mm') + 'h'

    return formattedDateToTime
}

export const formattedDate = (date: Date) => {
    const formattedDate = format(date, 'dd/MM/yyyy')

    return formattedDate
}
