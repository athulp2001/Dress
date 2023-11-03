import React from 'react'
import './Nice.css'



const Nice2 = (props) => {

   

  return (
    <div>
        <div style={{ }}>       
{
        props.imgB.map((item,index)=>(
            
       <div style={{ width:'' }}>
        <img style={{width:'96% ', marginBottom:'20px'}} key={index} src={item.im} alt="" />
       
       </div>
    ))

           

        
            
       }

      

        </div>
        
      
    </div>
  )
}

export default Nice2
