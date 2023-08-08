import React from 'react'
import { Buttons } from '@components/Buttons';

function Hero() {
  return (
    <div className='hero-container
     mx-auto' >
     
          <h1>OVER 50 YEARS OF EXPERIENCE</h1>
          <h3>Enabling Breakthroughs in Mining, Petroleum, and Scientific Research through VanPetro`s Unrivalled Experience</h3>      
        <div className="hero-btns">
            <Buttons className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                ORDER ONLINE
            </Buttons>
        </div>
    </div>
  )
}

export default Hero
