import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { useCallback, useEffect, useState } from 'react'

import { LOGIN_USER } from '@/graphql/mutations'
import { getUserIdFromJWT } from '@/utils/get-userId-from-jwt'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'

interface UserProps {
    id: string
    role: {
        name: string
    }
}

export const useAuth = () => {
    const [login, { loading, error }] = useMutation(LOGIN_USER)
    const router = useRouter()

    const [user, setUser] = useState<UserProps | null>(null)

    useEffect(() => {
        const { '@token': token } = parseCookies()

        if (token) {
            const userId = getUserIdFromJWT(token)

            if (userId) {
                setUser({
                    id: userId,
                    role: {
                        name: parseCookies()['@role'],
                    },
                })
            }
        }
    }, [setUser])

    const handleLogin = useCallback(
        async (identifier: string, password: string) => {
            try {
                const { data } = await login({
                    variables: {
                        identifier,
                        password,
                    },
                })

                setUser(data.login.user)

                setCookie(null, '@token', data.login.jwt, {
                    maxAge: 30 * 24 * 60 * 60, // 30 days
                    httpOnly: false,
                    secure: false,
                })

                setCookie(null, '@role', data.login.user.role.name, {
                    maxAge: 30 * 24 * 60 * 60, // 30 days
                    httpOnly: false,
                    secure: false,
                })

                router.push(
                    data.login.user.role.name === 'admin'
                        ? '/dashboard'
                        : '/meus-registros',
                )

                return data.login
            } catch (error) {
                console.log(error)
            }
        },
        [login, router],
    )

    const handleLogout = useCallback(() => {
        destroyCookie(null, '@token')
        destroyCookie(null, '@role')
        router.push('/login')
    }, [router])

    return {
        user,
        loading,
        error,
        login: handleLogin,
        logout: handleLogout,
    }
}
