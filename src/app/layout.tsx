import { NavbarComponent } from '@/components/layouts/navbar'
import { FooterComponent } from '@/components/layouts/footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './animations.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matias Muñoz',
  description: 'I am a web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
      <script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/bouncy.js"></script>
      </head>
      <body className={inter.className}>
        <NavbarComponent/>
        <div className='relative md:flex w-full h-full'>
          {children}
        </div>
        <FooterComponent/>
      </body>
    </html>
  )
}
