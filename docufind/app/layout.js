import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DocuFind',
  description: 'Find your docs!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className='flex h-screen'>
          <Navbar />
          {children}
        </section>
      </body>
    </html>
  )
}
