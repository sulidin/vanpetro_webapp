import React from 'react'

function Heros(props) {
  return (
    <div className='heros-container' style={{ backgroundImage: `url(${props.src})` }}>
      <h1>{props.text}</h1>
    </div>   
  )
}

export default Heros
