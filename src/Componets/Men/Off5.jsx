import React from 'react'




const Off5 = (props) => {
  return (
    <div style={{width:'100%'}} >   
    {
    props.imgA.map((item,index) => (
    
        <img style={{ width: '16.6%'   }} src={item.im} alt="" key={index} />
           
    ))}
    </div>
  )
}

export default Off5;
