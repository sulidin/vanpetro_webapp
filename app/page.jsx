"use client";
import Hero from '@components/Hero';
import Cards from '@components/Cards';
import Contact from '@components/Contact';

function Home() {
  return (
    <>
      <section className="w-full flex-center flex-col text-center">
      </section>
      <Hero />
      <Cards 
        header = 'ABOUT US'
        text = 'Welcome to Vancouver Petrographics Ltd., a trusted name in the field of geoscience and petrographic services since 1972.'
        text2 ='With a rich heritage spanning over five decades, we have been the go-to choice for geoscientists and 
                industry leaders seeking unparalleled technical expertise and professional services. 
                Our commitment to excellence has solidified our position as a leading provider in the industry.'

        src1='/assets/images/img-1.jpg'
        cardtext1='..'
        path1='/services'

        src2='/assets/images/img-2.png'
        cardtext2='..'
        path2='/services'

        src3='/assets/images/img-3.png'
        cardtext3='..'
        path3='/services'

        src4='/assets/images/img-2.png'
        cardtext4='..'
        path4='/services'

        src5='/assets/images/img-1.jpg'
        cardtext5='..'
        path5='/services'

        src6='/assets/images/img-3.png'
        cardtext6='..'
        path6='/services'
      />
      <Contact/>
    </>
  );
}

export default Home;