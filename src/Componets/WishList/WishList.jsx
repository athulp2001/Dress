import React from 'react'

import './WishList.css'

import Fotter from '../Men/Fotter'

import Login from '../Login/Login'

import Notelogo from './ImgWL/NoteImg.png'
import { Routes,Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const WishList = () => {




  return (

    <div style={{backgroundColor:'white'}}>
        <div style={{paddingTop:'200px',}}></div>

   <h3 className='PleaseLogin'>PLEASE LOG IN</h3>
   <p className='loginP'>Login to view items in your wishlist.</p>

      <img className='NotelogoImg' src={Notelogo} alt="" />
    <div>
    <button className='loginBtn'  to='Login'>Login</button>
    </div>
    <div style={{paddingTop:'120px'}}></div>
    <Login display="block"></Login>
   


   
    </div>

  )
}

export default WishList
