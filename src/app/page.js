import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import Homemenu from '@/components/layout/HomeMenu'
import SectionHeaders from '@/components/layout/SectionHeaders'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Homemenu />
      <section className='text-center my-16'>
        <SectionHeaders subHeader={'Our Story'} mainHeader={'About us'} />
        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iure beatae, magnam voluptatibus minus laboriosam consequuntur molestias ab eligendi natus.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia odit, corrupti aperiam porro magni deleniti eius amet beatae suscipit. Nesciunt mollitia et recusandae voluptate.
          </p>
        </div>
      </section>
      <section>
        <SectionHeaders subHeader={"Don't hesitate"} mainHeader={'Contact us'} />
      </section>
    </>
  )
}
