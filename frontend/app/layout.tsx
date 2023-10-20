import { Inter } from 'next/font/google'

import ToasterContext from './context/ToasterContect'
import AuthContext from './context/AuthContext'

import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messanger Clone',
  description: 'Messanger Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
         {children}
        </AuthContext>
        </body>
    </html>
  )
}
