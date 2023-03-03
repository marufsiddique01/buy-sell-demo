import Image from 'next/image'
import Right from '../icons/Right'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='py-12'>
        <h1 className='text-4xl font-semibold'>
          Everything <br /> is better <br /> with a <span className='text-primary'>Pizza</span>
        </h1>
        <p className='my-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, commodi labore. Ipsum facere</p>
        <div className='flex gap-4 text-sm py-6'>
          <button className='bg-primary flex items-center gap-2 uppercase text-white px-4 py-2 rounded-full'>
            Order now <Right />
          </button>
          <button className='flex gap-2 py-2 text-gray-500 font-semibold'>
            Learn more <Right />
          </button>
        </div>
      </div>
      <div className='relative'>
        <Image src={'/pizza.png'} layout='fill' objectFit={'contain'} alt='pizza' />
      </div>
    </section>
  )
}
