import React from 'react'

import './bag.css'

import glo from './imgBag/greenlogo.png'
import pinKlogo from './imgBag/bagImg.webp'

import WishList from '../WishList/WishList'

import Login from '../Login/Login'

import { Routes,Route, Link } from 'react-router-dom'

import c1 from './imgBag/c1.png'
import c2 from './imgBag/c2.png'
import c3 from './imgBag/c3.png'
import c4 from './imgBag/c4.png'
import c5 from './imgBag/c5.png'
import c6 from './imgBag/c6.png'
import c7 from './imgBag/c7.png'
import c8 from './imgBag/c8.png'
import c9 from './imgBag/c9.png'
import c10 from './imgBag/c10.png'




const Bag = () => {

    const imgC =[{im:c1},{im:c2},{im:c3},{im:c4},{im:c5},{im:c6},{im:c7},{im:c8},{im:c9},{im:c10},]


  return (
    <div>
        <div style={{paddingTop:'100px'}}></div>
     <h6 className='bagAndAddress'> <span className='spanBag'>BAG </span> 
     <span className='DashSpan'> ---------------------- <span> ADDRESS</span > 
     <span className='DashSpan'> ---------------------- </span> 
      <span>PAYMENT</span></span><img className='gLogoImg' src={glo} alt="" /></h6>
      


      <div>
        <h6 className='hPS'>100% SECURE</h6>
      </div>

      <div>
        <img className='PinkBag' src={pinKlogo} alt="" />

        <h4 className='HeyH4'>Hey,it feels so light!</h4>
        <p className='HeyP'>There is nothing in your bag. Let'sadd someitems.</p>
        <Link className='HeyBtn' to="Login">ADD ITEM FROM WISHLIST</Link>
      </div>

      <div className='fotterDiv' style={{display:'flex', marginTop:'50px', marginBottom:'30px'}}>
        
        {
            imgC.map((item)=>(
        <div>
        <img className='CardImg' src={item.im} alt="" />
        </div>
            ))
        }
        
       


      </div>
     
            <h6 className='NeedH6'>Need Help ? Contact Us</h6>
{/* 
            <Routes>
            <Route path='Login' element={<Login/>} />
              
            </Routes>
         */}
    </div>
  )
}

export default Bag
