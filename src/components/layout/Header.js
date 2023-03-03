import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className='flex items-center justify-between'>
        <Link className='text-primary font-semibold text-2xl' href={''}>
          Maruf Pizza
        </Link>
        <nav className='flex gap-4 text-gray-500 items-center font-semibold'>
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contract</Link>
          <Link className='bg-primary text-white rounded-full px-6 py-2' href={''}>
            Login
          </Link>
        </nav>
      </header>
    </>
  )
}
