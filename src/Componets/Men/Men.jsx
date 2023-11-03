import React from 'react'
import Flat from './img/code.webp'
import Offer2 from './Offer2'
import Fest3 from './Fest3'
import Min4 from './Min4'
import Off5 from './Off5'
import fest from './img/festive.webp'
import cate from './img/Category.webp'
import Fotter from './Fotter'
import m1 from './img/m1.webp';
import m2 from './img/m2.webp';
import m3 from './img/m3.webp';
import m4 from './img/m4.webp';
import m5 from './img/m5.webp';
import m6 from './img/m6.webp';

import a1 from './img/a1.webp'
import a2 from './img/a2.webp'
import a3 from './img/a3.webp'
import a4 from './img/a4.webp'
import a5 from './img/a5.webp'
import a6 from './img/a6.webp'
import a7 from './img/a7.webp'
import a8 from './img/a8.webp'
import a9 from './img/a9.webp'
import a10 from './img/a10.webp'
import a11 from './img/a11.webp'
import a12 from './img/a12.webp'
import a13 from './img/a13.webp'
import a14 from './img/a15.jpg'
import a15 from './img/a16.webp'
import a16 from './img/a17.webp'
import a17 from './img/a18.webp'
import NavB from '../NavB'


const Men = () => {
  const imgB = [{ im: m1 }, { im: m2 }, { im: m3 }, { im: m4 }, { im: m5 }, { im: m6 }];
  
  const imgA = [{im:a1},{im:a2},{im:a3},{im:a4},{im:a5},{im:a6},{im:a7},{im:a8},{im:a9},{im:a10},{im:a11},{im:a12},{im:a13},{im:a14},{im:a15},{im:a16},{im:a17}]
  
  return (
    <div >
  
      <div >
      <img style={{width:'90%', objectFit:'cover', marginTop:'100px'}} src={Flat} alt="" />
      </div>

      <Offer2></Offer2>
    
      <Fest3 src={fest}></Fest3>
      <Min4 imgM={imgB}></Min4>
      <Fest3 src={cate}></Fest3>
      <Off5 imgA={imgA}></Off5>
      <Fotter></Fotter>

    </div>
  )
}

export default Men
