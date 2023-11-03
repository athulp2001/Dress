import React, { useState } from 'react'
import './PList.css'
import star from './imgBea/gstar.png'

import a1 from './imgBea/a1.webp'
import a2 from './imgBea/a2.webp'
import a3 from './imgBea/a3.webp'
import a4 from './imgBea/a4.webp'
import a5 from './imgBea/a5.webp'
import a6 from './imgBea/a6.webp'
import a7 from './imgBea/a7.webp'
import a8 from './imgBea/a8.webp'
import a9 from './imgBea/a9.webp'


const PList = () => {

  const imgA=[{im:a1},{im:a2},{im:a3},{im:a4},{im:a5},{im:a6},{im:a7},{im:a8},{im:a9}]

  // const[newDiv,setNewDiv]=useState('')

  // const showDiv=()=>{
  //   setNewDiv('block')
  // }
  // const notDiv=()=>{
  //   setNewDiv('none')
  // }

  // const[mainDiv,setMaindiv]=useState(false)


  return (
    <div className="container" style={{}} >

      {/* ------------------------------------------------------ */}
      
      
      {
        imgA.map((item,index)=>(
      <div className='imgProductDiv' style={{float:'left',margin:'auto', marginLeft:'2%', marginTop:'20px'}} key={index}>
        <img className='imgProduct' src={item.im} alt="" />
      <div>

     < div className='discription'  style={{backgroundColor:'', float:'left'}}>


        
        <h6 className='ratingP'>4.5 <span><img style={{ marginTop:'-5px', width:'15px', height:'15px', objectFit:'cover', objectPosition:'center'}} src={star} alt="" /></span>|14.4K</h6>
      <h6>Plum</h6>
      <p className='disPM'>Pore Cleansing Face Wash 120ml</p>
      <div style={{display:'flex'}}>
      <h6 className='RsH6'>Rs.270</h6>
      <p className='RsUnderline'>Rs.360</p>
      <p className='offP'>(25% OFF)</p>
      
      </div>
      
     

      {/* ---------------------------------------------- */}
      </div>

      
     



      {/* ----------------------------------------- */}
      </div>
      
      </div>
      
        ))
      }
      
  


    </div>
    
  )
}

export default PList
