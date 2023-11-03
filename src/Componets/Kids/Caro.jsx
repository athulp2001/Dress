import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import c1 from './imgK/C1.webp'
import c2 from './imgK/c2.jpg'
import c3 from './imgK/c3.webp'
import c4 from './imgK/c4.webp'
import c5 from './imgK/c5.webp'

const Caro = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const imgC=[{im:c1},{im:c2},{im:c3},{im:c4},{im:c5}]


  return (
    <div >
         <Carousel  activeIndex={index} onSelect={handleSelect}>
            {
    imgC.map((item,i)=>(
       
        <Carousel.Item key={i} style={{height:'300px', width:'100%'}}>
          <img  style={{height:'340px', width:'100%', objectFit:'cover'}} src={item.im}  text="First slide" />
          </Carousel.Item>
       ))}
      
    </Carousel>
    </div>
  )
}

export default Caro;
