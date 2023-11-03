import React from 'react'
import NavB from '../NavB'
import Caro from './Caro'
import BoldTest from './BoldTest'
import FavBrands from './FavBrands'

import a1 from './imgK/a1.webp'
import a2 from './imgK/a2.webp'
import a3 from './imgK/a3.webp'
import a4 from './imgK/a4.webp'
import a5 from './imgK/a5.webp'
import a6 from './imgK/a6.webp'
import a7 from './imgK/a7.webp'
import a8 from './imgK/a8.webp'
import a9 from './imgK/a9.webp'
import TopPicks from './TopPicks'

import b1 from "./imgK/b1.webp"
import b2 from "./imgK/b2.webp"
import b3 from "./imgK/b3.webp"
import b4 from "./imgK/b4.webp"
import b5 from "./imgK/b5.webp"
import b6 from "./imgK/b6.webp"
import b7 from "./imgK/b7.webp"
import b8 from "./imgK/b8.webp"
import b9 from "./imgK/b9.webp"
import b10 from "./imgK/b10.webp"
import IconBrand from './IconBrand'


import d1 from './imgK/d1.webp'
import d2 from './imgK/d2.webp'
import d3 from './imgK/d3.webp'
import d4 from './imgK/d4.webp'
import d5 from './imgK/d5.webp'

import f1 from './imgK/f1.webp'
import f2 from './imgK/f2.webp'
import f3 from './imgK/f3.webp'
import f4 from './imgK/f4.webp'
import f5 from './imgK/f5.webp'
import f6 from './imgK/f6.webp'
import f7 from './imgK/f7.webp'
import f8 from './imgK/f8.webp'
import f9 from './imgK/f9.webp'
import f10 from './imgK/f10.webp'
import Explore from './Explore'

import h1 from './imgK/h1.webp'
import h2 from './imgK/h2.webp'
import h3 from './imgK/h3.webp'
import h4 from './imgK/h4.webp'
import h5 from './imgK/h5.webp'
import h6 from './imgK/h6.webp'
import h7 from './imgK/h7.jpg'
import h8 from './imgK/h8.jpg'

import i1 from './imgK/i1.jpg'
import i2 from './imgK/i2.jpg'
import i3 from './imgK/i3.jpg'
import i4 from './imgK/i4.jpg'
import i5 from './imgK/i5.webp'
import i6 from './imgK/i6.webp'



import j1 from './imgK/j1.webp'
import j2 from './imgK/j2.webp'
import j3 from './imgK/j3.webp'
import j4 from './imgK/j4.webp'
import j5 from './imgK/j5.webp'
import Off5 from '../Men/Off5'

import Fotter from '../Men/Fotter'

const Kids = () => {

  const imgA=[{im:a1},{im:a2},{im:a3},{im:a4},{im:a5},{im:a6},{im:a7},{im:a8},{im:a9}]
  
  const imgB=[{im:b1},{im:b2},{im:b3},{im:b4},{im:b5},{im:b6},{im:b7},{im:b8},{im:b9},{im:b10}]
  
  const imgD=[{im:d1},{im:d2},{im:d3},{im:d4},{im:d5},]

  const imgF=[{im:f1},{im:f2},{im:f3},{im:f4},{im:f5},{im:f6},{im:f7},{im:f8},{im:f9},{im:f10}];

  const imgH=[{im:h1},{im:h2},{im:h3},{im:h4},{im:h5},{im:h6}]
  const imgH2=[{im:h7},{im:h8}];

  const imgI=[{im:i1},{im:i2},{im:i3},{im:i4},{im:i5},{im:i6}];

  const imgJ=[{im:j1},{im:j2},{im:j3},{im:j4},{im:j5},]

  return (
    <div>

        <div style={{paddingTop:'130px'}}></div>
        <Caro>.</Caro>
        <BoldTest textName={"FAVOURITE BRANDS"}></BoldTest>
        <FavBrands imgM={imgA}></FavBrands>
        <BoldTest textName={"TOP PICKS"}></BoldTest>
        <TopPicks imgM={imgB}></TopPicks>
        <BoldTest textName={"ICONIC BRANDS"}></BoldTest>
        <IconBrand imgM={imgD}></IconBrand>
        <BoldTest textName={"FASHION & ESSENTIALS"}></BoldTest>
        <IconBrand imgM={imgF}></IconBrand>
        <BoldTest textName={"EXPLORE MORE"}></BoldTest>
        <Explore imgM={imgH}></Explore>
        <BoldTest textName={"ETHE KIDS SPACE"}></BoldTest>
        <Explore imgM={imgH2}></Explore>
        <BoldTest textName={"BUDGET BUY"}></BoldTest>
        <Off5 imgA={imgI}></Off5>
        <BoldTest textName={"SHOP MORE BRANDS"}></BoldTest>
        <IconBrand imgM={imgJ}></IconBrand>
        <Fotter></Fotter>
    </div>
  )
}

export default Kids
