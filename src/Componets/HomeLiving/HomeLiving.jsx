import React from 'react'
import WithHome1 from './WithHome1'
import Nice2 from './Nice2'
import Logo4 from './Logo4'

import Fotter from '../Men/Fotter'

import b1 from './imgHl/b1.webp'
import b2 from './imgHl/b2.webp'
import b3 from './imgHl/b3.webp'
import b4 from './imgHl/b4.webp'
import b5 from './imgHl/b5.webp'
import b6 from './imgHl/b6.webp'
import Product from './Product'

import a from './imgHl/a1.webp'
import l from './imgHl/l1.webp'
import Long3 from './Long3'
import Trend4 from './Trend4'

import c1 from './imgHl/c1.webp'
import c2 from './imgHl/c2.webp'
import c3 from './imgHl/c3.webp'

import d1 from './imgHl/d1.webp'
import d2 from './imgHl/d2.jpg'
import d3 from './imgHl/d3.webp'
import d4 from './imgHl/d4.webp'
import d5 from './imgHl/d5.webp'


const HomeLiving = () => {

  const imgB=[{im:b1},{im:b3},{im:b5},]
    
  const imgB2=[{im:b2},{im:b4},{im:b6}]

  const imgC=[{im:c1},{im:c2},{im:c3}]

  const imgD=[{im:d1},{im:d2},{im:d3},{im:d4},{im:d5}]

  

  return (
    <div>
      <WithHome1 src={a}></WithHome1>
      <h1 style={{textAlign:'left',width:'70%', marginLeft:'8%', marginTop:'20px', marginBottom:'20px'}}>NICE TO SEE YOU, COME ON IN!</h1>
      <div style={{display:'flex'}}>
      <div style={{display:'flex', width:'70%', marginLeft:'4%'}}> 
      <Nice2 imgB={imgB}></Nice2>
      <Nice2 imgB={imgB2}></Nice2>
      </div>
      <div style={{ width:'30%'}}>
      <Product></Product>
      </div>
      </div>
      <Long3 src={l}></Long3>
      <Trend4 imgM={imgC}></Trend4>
      <h1 style={{textAlign:'left',width:'70%', marginLeft:'8%', marginTop:'30px', marginBottom:'20px'}}>FEATURED BRANDS</h1>
      <Logo4 imgM={imgD}></Logo4>
      <br />
      <br />
      <Fotter></Fotter>


    </div>
  )
}

export default HomeLiving
