import React from 'react'

import './Studio.css'

import b1 from './imgStu/b1.webp'
import b2 from './imgStu/b2.webp'
import b3 from './imgStu/b3.webp'
import b4 from './imgStu/b4.webp'



const UpToo = (props) => {
const imgB=[{im:b1},{im:b2},{im:b3},{im:b4}]

  return (
    <div>

        <div className='ImgUpTo' style={{display:'flex',width:'383px', overflowX:'auto', backgroundColor:'white' }}>
            
          

{
    props.imgB.map((item)=>(
  <img style={{width:'94%',marginLeft:'3%', marginTop:'10px' ,marginBottom:'10px' ,padding:'auto'}} src={item.im} alt="" />
    ))
}
        </div>
      
    </div>
  )
}

export default UpToo
