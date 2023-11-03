import React from 'react'

import './Follow.css'

import d1 from './imgStu/d1.jpeg'
import d2 from './imgStu/d2.webp'
import d3 from './imgStu/d3.jpeg'

const Follow = () => {

    const imgD=[{im:d1},{im:d2},{im:d3}]
    

  return (
    <div style={{ backgroundColor:'white'}}>

<div className='mainTextFollow'>

          
            <img className='DpImg' src={d1} alt="" />
            
             <div className='Namediv'>
                <h6>Aru Sondhi</h6>
                <p>8 Hours ago</p>
             </div>

             <div style={{display:'flex'}}>
            <h1 className='DotFollow'>.</h1>    
             <h6 className='pFollow'>Follow</h6>
             </div>    

</div>
       
      
      <div className='ImgUpTo' style={{display:'flex',width:'383px', overflowX:'auto', backgroundColor:'white' }}>
            
          

{
imgD.map((item)=>(


  <img style={{width:'100%', marginTop:'10px' ,marginBottom:'10px' ,padding:'auto'}} src={item.im} alt="" />
    ))
}
        </div>


    </div>
  )
}

export default Follow
