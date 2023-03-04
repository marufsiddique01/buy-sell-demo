export default function MenuItem() {
  return (
    <>
      <div className='bg-gray-300 p-4 rounded-lg text-center group hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'>
        <div className='text-center '>
          <img src='/pizza.png' className='max-h-24 max-w-auto mx-auto' alt='pizza' />
        </div>
        <h4 className='font-semibold'>Pepperoni Pizza</h4>
        <p className='text-gray-500 text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, omnis.</p>
        <button className='bg-primary text-white rounded-full px-6 py-2 mt-4'>Add to cart 12$</button>
      </div>
    </>
  )
}
