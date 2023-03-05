import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className='flex items-center justify-between'>
        <nav className='flex gap-8 text-gray-500 items-center font-semibold'>
          <Link className='text-primary font-semibold text-2xl' href={'/'}>
            Maruf Pizza
          </Link>
          <Link href={'/'}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contract</Link>
        </nav>
        <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
          <Link href={'/login'}>Login</Link>
          <Link className='bg-primary text-white rounded-full px-6 py-2' href={'/register'}>
            Register
          </Link>
        </nav>
      </header>
    </>
  )
}
