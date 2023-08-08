"use client";
import React, { useState, useEffect } from 'react';
import { Buttons } from '@components/Buttons';
import ContactForm from '@components/ContactForm';


function Contact({ isSet }) {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactButtonClick = () => {
    setShowContactForm(!showContactForm);
  };

  // Use useEffect to set the initial state based on the isSet prop
  useEffect(() => {
    if (isSet) {
      setShowContactForm(true);
    }
  }, [isSet]);

  return (
    <>
      <div className='contact-container'>
        {!showContactForm ? (
          <div className="contact-btns ">
            <Buttons
              className='btn'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={handleContactButtonClick}
            >
              CONTACT US
            </Buttons>
          </div>
        ) : (
          <ContactForm/>
        )}
      </div>
    </>
  );
}

export default Contact;
