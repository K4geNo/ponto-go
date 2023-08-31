import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from './providers'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
    title: {
        default: 'PontoGo',
        template: '%s | PontoGo',
    },
    description: 'Aqui você fará toda gestão do seu sistema de pontos.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
