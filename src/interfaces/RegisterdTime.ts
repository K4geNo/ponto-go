export interface RegisteredTime {
    id: string
    timeRegistered: string
    user: {
        id: string
        name: string
    }
}

export interface RegisteredTimesData {
    registeredTimes: RegisteredTime[]
}
