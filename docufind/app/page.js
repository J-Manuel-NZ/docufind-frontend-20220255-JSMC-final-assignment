import Image from 'next/image'
import RootLayout from './layout'

export default function Home() {
  return (
    <main>
      <a href='/dashboard'>
        <h1 className='text-4xl'>Sign In</h1>
      </a>
    </main>
  );
}
