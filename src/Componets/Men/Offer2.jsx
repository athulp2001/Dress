import React from 'react'
import m1 from './img/men1.webp'
import w1 from './img/women2.webp'
const Offer2 = () => {
  return (
    <div>
      <div style={{display:'flex',width:'98%', marginLeft:'1%' ,objectFit:'cover'}}>
        <img style={{width:'50%',objectFit:'cover'}}  src={m1} alt="" />
        <img style={{width:'50%',objectFit:'cover'}}  src={w1} alt="" />

      </div>
    </div>
  )
}

export default Offer2
