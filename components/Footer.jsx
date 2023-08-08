import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaGoogle} from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer'>
        <p className='footer-heading'>
          Delivering Cutting-Edge Solutions for Petrographic Excellence
        </p>

        <div className='footer-logo'>
          <Link href='/' className='navbar-logo'>
            <Image className='navbar-logo'
              src="/assets/images/logo.png"
              alt='logo'
              width={200}
              height={100}
            />
          </Link>
        </div>
        <div className='social-media-wrap'>
          <div className='social-icons'>

            <Link
              className='social-icon-link instagram'
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram/>
            </Link>

            <Link
              className='social-icon-link linkedin'
              href='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedinIn/>
            </Link>

            <Link
              className='social-icon-link google'
              href='/'
              target='_blank'
              aria-label='Google'
            >
              <FaGoogle/>
            </Link>

            <Link
              className='social-icon-link envelope'
              href='/'
              target='_blank'
              aria-label='Email'
            >
              <FaEnvelope/>
            </Link>
          </div>
        </div>
        <small className='website-rights'>Van Petro Ltd © 2023</small>
      </section>
    </div>
  );
}

export default Footer;
