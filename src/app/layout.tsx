import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { GlobalStyles } from './globals'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn Fast - Interactive Electricity Education',
  description: 'A modern platform for learning about electricity with interactive 3D elements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyles />
        <GlobalStyles />
        <Navigation />
        {children}
      </body>
    </html>
  )
}

