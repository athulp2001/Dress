import React from 'react'

import imgS from './imgStu/imgS.png'

const StudioNav = () => {
  return (
    <div style={{margin:'auto'}}>
        
      <div style={{width:'600px', height:'500px',borderTop:'none' ,}}>
      <h2 style={{ color:'rgb(255, 11, 93)'}}>Studio</h2>
        <p style={{color:'gray'}}>Your daily inspiration for everything fashion</p>
<img style={{width:'100%', marginTop:'10px', objectFit:'cover', objectPosition:'center', height:'300px'}} src={imgS} alt="" />

<button style={{width:'250px', height:'50px', marginTop:'30px', border:'solid' ,borderWidth:'1.2px', fontWeight:'bold'}}>EXPLORE STUDIO</button>
      </div>
    </div>
  )
}

export default StudioNav
