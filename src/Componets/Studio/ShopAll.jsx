import React from 'react'

import './Studio.css'


import e1 from './imgStu/e.webp'
import e2 from './imgStu/e2.webp'
import e3 from './imgStu/e3.webp'
import e4 from './imgStu/e4.webp'
import e5 from './imgStu/e5.webp'
import e6 from './imgStu/e6.webp'
import e7 from './imgStu/e7.webp'

const ShopAll = () => {

    const imgE=[{im:e1},{im:e2},{im:e3},{im:e4},{im:e5},{im:e6},{im:e7}]

  return (
    <div>
      
      <div style={{display:'flex'}}>

<div style={{width:'30%', backgroundColor:'white'}}>
<svg style={{marginTop:'20px'}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="rgb(253, 10, 91)" class="bi bi-handbag" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
</svg>
<h6 style={{color:'rgb(253, 10, 91)'}}>SHOP ALL</h6>
</div>

{/* ------------------------------------------- */}

<div className='ImgUpTo' style={{display:'flex',width:'383px', overflowX:'auto', backgroundColor:'white' }}>
            
          

{
  imgE.map((item)=>(
<div >
    <div className='ShopAllmainDiv' style={{display:'flex'}}>

    
<img className='followImgShopAll' style={{marginLeft:'3%' ,padding:'auto'}} src={item.im} alt="" />    
  <div className='Pdiv'>
    <p className='HeadNameP'>Allena Sollv Woman</p>
    <p className='HeadRSP'>₹ 1,249 <span className='HeadSpanP'>₹ 299</span> </p>
    <p className='HeadOffP'>55%OFF</p>
    </div>          
</div>

</div>

    ))
}
        </div>


</div>

    </div>
  )
}

export default ShopAll
