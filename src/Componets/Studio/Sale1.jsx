import React from 'react'

import a1 from './imgStu/a1.webp'
import a2 from './imgStu/a2.webp'
import a3 from './imgStu/a3.webp'
import a4 from './imgStu/a4.webp'
import a5 from './imgStu/a5.webp'

const Sale1 = () => {

    const imgA=[a1,a2,a3,a4,a5]

  return (
    <div>
    
    <div className='saleDIv' style={{height:'160px', backgroundColor:'white',paddingTop:'10px', paddingBottom:'10px'}}>
        
        

        {
            imgA.map((item)=>(
         <img className='imgSale' style={{}} src={item} alt="" />
            ))
        }
    
    </div>

    </div>
  )
}

export default Sale1


