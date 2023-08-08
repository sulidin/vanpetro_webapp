import React from 'react';
import Contact from '@components/Contact';
import Heros from '@components/Heros';
import ContactDetails from '@components/ContactDetails';

function Contactpage() {
  return (
    <>
      <Heros src='/assets/images/Hero.jpg'
        text='CONTACT US' />
      <ContactDetails  />
      <Contact isSet={true} />
    </>
  );
}

export default Contactpage;