'use client'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'DocuFind',
  description: 'Find your docs!',
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={inter.className}>
        <section className='flex h-screen'>
          {pathname === '/' ? null : <Navbar />}
          {children}
        </section>
      </body>
    </html>
  )
}
