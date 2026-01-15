import type { Metadata } from 'next'
import { roboto } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Droppitec - Soluciones Digitales',
  description: 'Diseñamos, desarrollamos y escalamos soluciones digitales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={roboto.variable}>
        {children}
      </body>
    </html>
  )
}
