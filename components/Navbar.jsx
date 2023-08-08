'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
import { IoMenuOutline} from "react-icons/io5";
import {GoSignOut} from "react-icons/go";


function Navbar() {
  const {data: session, status} = useSession();

  // const [providers, setProviders] = useState(null);
  // useEffect(() => {
  //   const setUpProviders = async () => {
  //     const response = await getProviders();
  //     setProviders(response);
  //   } 
  //   setUpProviders();
  // }, []);



  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [openModal, setOpenModal] = useState(undefined); // Remove type annotation
  const props = { openModal, setOpenModal };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  React.useEffect(() => {
    // window is accessible here.
    window.addEventListener('resize', showButton);
  }, []);
  

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href='/' className='navbar-logo' onClick={closeMenu}>
            <Image className='navbar-logo' 
            src="/assets/images/logo.png"
            alt='logo'
            width={200}
            height={100}
            />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
         <IoMenuOutline/>
        </div>
       

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link href='/services' className='nav-links' onClick={closeMenu}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link href='/order' className='nav-links-order animate-pulse' onClick={closeMenu}>
              ONLINE ORDER
            </Link>
          </li>
          <li>
            <Link href='/contact' className='nav-links' onClick={closeMenu}>
              CONTACT
            </Link>
          </li>

          {session?.user? (
            <>
            <li>
                <Link href='/dashboard' className='nav-links' onClick={closeMenu}>
                  DASHBOARD
                </Link>
              </li>  
              <li>
                <button className='nav-links ' onClick={() => {signOut ();}}>
                  <GoSignOut                   
                  />
                </button>
              </li>  
              </>
     

            
            ) : 
            ( <>
               {/* {providers && Object.values(providers).map((provider) => (
                 <li>
                     <button type='button' className='nav-links' key={provider.name} onClick={() => signIn(provider.id)}>
                        SIGN IN
                      </button>
                 </li>               
              ))} */}
                <li>
                      <button type='button' className='nav-links'>
                        <a href="/api/auth/signin">SIGN IN</a>
                      </button>
                </li>   
            </> )
          }
        </ul>
      </nav>
    </>

  )
}

export default Navbar