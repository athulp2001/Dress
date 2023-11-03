import React from 'react'
import NavB from '../NavB'
import Long1 from './Long1'
import SaleInLive from './SaleInLive'
import flat from '../Men/img/code.webp'
import SaleIn from './ImgWomen/SaleInLeave.webp'
import Fest3 from '../Men/Fest3'
import FestImg from '../Men/img/festive.webp'
import Cart from '../Men/img/Category.webp'
import Min4 from '../Men/Min4'
import './Women.css'

import More from './ImgWomen/moreLong1.webp'

import a1 from './ImgWomen/a1.webp'
import a2 from './ImgWomen/a2.webp'
import a3 from './ImgWomen/a3.webp'
import a4 from './ImgWomen/a4.webp'
import a5 from './ImgWomen/a5.webp'
import a6 from './ImgWomen/a6.webp'

import b1 from './ImgWomen/b1.jpg'
import b2 from './ImgWomen/b2.webp'
import b3 from './ImgWomen/b3.webp'
import b4 from './ImgWomen/b4.webp'
import b5 from './ImgWomen/b5.webp'
import b6 from './ImgWomen/b6.webp'
import b7 from './ImgWomen/b7.webp'
import b8 from './ImgWomen/b8.webp'
import b9 from './ImgWomen/b9.webp'
import b10 from './ImgWomen/b10.webp'
import b11 from './ImgWomen/b11.webp'
import b12 from './ImgWomen/b12.webp'
import Off5 from '../Men/Off5'
import Fotter from '../Men/Fotter'




const Women = () => {

  const imgA=[{im:a1},{im:a2},{im:a3},{im:a4},{im:a5},{im:a6},]
  const imgB=[{im:b1},{im:b2},{im:b3},{im:b4},{im:b5},{im:b6},{im:b7},{im:b8},{im:b9},{im:b10},{im:b11},{im:b12},]
  return (
    <div>

        <div style={{paddingTop:'100px'}}></div>
        <Long1 src={flat}></Long1>
        <SaleInLive src={SaleIn}></SaleInLive>
        <Fest3 src={FestImg}></Fest3>
        <Min4 imgM={imgA}></Min4>
        <Fest3 src={Cart}></Fest3>
        <Off5 imgA={imgB}></Off5>
        <Long1 src={More}></Long1>
        <Fotter></Fotter>
      
       
        
    </div>
  )
}

export default Women
