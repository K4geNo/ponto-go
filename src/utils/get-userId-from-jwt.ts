import jwt, { JwtPayload } from 'jsonwebtoken'

export function getUserIdFromJWT(token: string) {
    try {
        const decoded = jwt.decode(token) as string | JwtPayload

        if (typeof decoded === 'string') {
            return null
        }

        return decoded.id
    } catch (error) {
        console.log(error)
        return null
    }
}
