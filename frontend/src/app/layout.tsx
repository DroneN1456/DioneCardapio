import './globals.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'

const MonoFont = Roboto_Flex({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-bs-theme="light">
      <body className={MonoFont.className}>{children}</body>
    </html>
  )
}