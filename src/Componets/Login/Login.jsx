import React from 'react'
import './Login.css'

import Off from './imgL/off1.webp'
import NavB from '../NavB'
import { Routes,Route ,NavLink} from 'react-router-dom'
const Login = (props) => {
  return (
    <div className='bodydiv' style={{display:props.display}} >
       
       <div style={{paddingTop:'100px'}}></div>
       
       <div className='maindiv'>
        <img className='imgOff' src={Off} alt="" />


<div className='disDiv'>
<h4 className='mainLandS'>Login<span className='spanLS'> or </span>Signup</h4>

<input className='NumberInput' type='text' name="" id="" placeholder='+91 | Mobile Number' />

<h6 className='TermsH6'><span className='spanTerms'>By Countinuing,I agree to the </span>Terms of Use & Privacy Policy</h6>

<button className='conBtn'>CONTINUE</button>
<h6 className='TermsH6'><span className='spanTerms'>Have trouble loggin in?  </span>Get help</h6>
</div>

       </div>


    </div>
  )
}

export default Login
