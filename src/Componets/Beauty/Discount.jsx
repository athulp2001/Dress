import React from 'react'

const Discount = () => {
const above=[{im:"10% and above"},{im:"20% and above"},{im:"30% and above"},{im:"40% and above"},{im:"50% and above"},{im:"60% and above"},{im:"70% and above"},{im:"80% and above"},{im:"90% and above"}]

  return (
    <div style={{textAlign:'left',}}>
       
        <h6 className='catH6' >DISCOUNT RANGE</h6>
       <br />
        

        {
            above.map((item)=>(
        <div style={{display:'flex', marginTop:'-20px' }}>
        <input type='radio' style={{transform:'scale(1.2)', marginLeft:'2%'}} />
        <p style={{paddingTop:'10px', marginLeft:'3%', fontSize:'14px'}}>{item.im}</p>
        </div>
            ))
        }
    </div>
  )
}

export default Discount
