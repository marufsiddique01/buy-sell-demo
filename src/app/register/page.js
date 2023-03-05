import Image from 'next/image'

export default function Register() {
  return (
    <>
      <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl'>Register</h1>

        <form action='' className='block max-w-xs mx-auto'>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button type='submit'>Register</button>
          <div className='my-4 text-center text-gray-600'>or Login with provider</div>
          <button className='flex gap-4 justify-center'>
            <Image src={'/google.png'} alt='google' width={24} height={24} />
            Login with Google
          </button>
        </form>
      </section>
    </>
  )
}
