'use client';
import React from 'react'
import { Buttons } from '@components/Buttons';
import { useRouter } from 'next/navigation';


export default function ContactForm() {
  const router = useRouter();
const handleOnSubmit = async (e) =>
  {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });
    await fetch('/api/mail', {
        
      method: 'POST',
      body: JSON.stringify(formData),
    });
    alert("Message send successfully");
    router.push("/");
  }

    return (

        <div className='contactForm flex-col '>
            <h1>CONTACT FORM</h1>
                <form onSubmit={handleOnSubmit} className='contactForm-wrapper'>
                    <div className="mb-4">
                        <input name="fullName" type="name" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please enter your full name.." required />
                    </div>
                    <div className="mb-4">
                        <input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <textarea name="message" id="message" rows="4" className="block p-2.5 mb-4 w-full text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 focus:ring-red-500 focus:border-red-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-900" placeholder="Please include a brief description of your required services..."></textarea>
                    <Buttons className='btn' buttonStyle='btn--primary' buttonSize='btn--medium'>
                        SUBMIT
                    </Buttons>
                </form>


        </div>
    )
}
