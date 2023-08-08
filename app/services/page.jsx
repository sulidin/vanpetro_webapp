import React from 'react';
import Heros from '@components/Heros';
import Cards from '@components/Cards';
import Contact from '@components/Contact';
import Petrographers from '@components/Petrographers';

function Services() {
  
  const card1Images = [
    '/assets/images/services/thinsec.jpg',
    '/assets/images/services/thinsec.jpg',
    '/assets/images/services/thinsec.jpg',
    '/assets/images/services/thinsec.jpg',
    // Add more /assets/images for card 1 if needed
  ];

  const card2Images = [
    '/assets/images/services/description.jpg',
    '/assets/images/services/thinsec.jpg',
    '/assets/images/services/stain.jpg',
    '/assets/images/services/description.jpg',
    // Add more /assets/images for card 1 if needed
  ];

  const card3Images = [
    '/assets/images/services/stain.jpg',
    '/assets/images/services/stain.jpg',
    '/assets/images/services/stain.jpg',
    '/assets/images/services/stain.jpg',
    // Add more /assets/images for card 1 if needed
  ];

  const card4Images = [
    '/assets/images/services/coreslab.jpg',
    '/assets/images/services/coreslab.jpg',
    '/assets/images/services/coreslab.jpg',
    '/assets/images/services/coreslab.jpg',
    // Add more /assets/images for card 1 if needed
  ];

  const card5Images = [
    '/assets/images/services/slab.jpg',
    '/assets/images/services/slab.jpg',
    '/assets/images/services/slab.jpg',
    '/assets/images/services/slab.jpg',
    // Add more /assets/images for card 1 if needed
  ];

  const card6Images = [
    '/assets/images/services/labequip.jpg',
    '/assets/images/services/labequip.jpg',
    '/assets/images/services/labequip.jpg',
    '/assets/images/services/labequip.jpg',
    // Add more /assets/images for card 1 if needed
  ];

  return (
    <div >
      <Heros 
        src='/assets/images/Hero.jpg'
        text='SERVICES'
      />
      <Cards 
        text ='Welcome to our petrographic laboratory, where we offer a comprehensive range of services tailored to meet your needs. Our offerings include expert preparation of covered and polished slide sections, as well as detailed petrographic descriptions. With our specialized techniques, we excel in crafting thin sections of diverse materials, from soluble minerals and soil to clay, fossils, archaeological artifacts, and kimberlites.'
        text2= 'Discover our meticulous and professional services for all your petrographic needs.'

        src1={card1Images[0]}
        cardtext1='Thin Section Preparation'
        path1='gallery'
         images1={card1Images}

        src2={card2Images[0]}
        cardtext2='Petrographic Description'
        path2='gallery'
        images2={card2Images}

        src3={card3Images[0]}
        cardtext3='K-Feldspar Staining'
        path3='gallery'
        images3={card3Images}

        src4={card4Images[0]}
        cardtext4='Core Boxes'
        path4='gallery'
        images4={card4Images}

        src5={card5Images[0]}
        cardtext5='Core Slab Polishing'
        path5='gallery'
        images5={card5Images}

        src6={card6Images[0]}
        cardtext6='Laboratory Equipments'
        path6='gallery'
        images6={card6Images}
      />
      <Petrographers/>
      <Contact/>
    </div>
  );
}

export default Services;