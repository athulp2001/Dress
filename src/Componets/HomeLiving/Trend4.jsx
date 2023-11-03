import React from 'react'

const Trend4 = (props) => {
  return (
    <div style={{ backgroundColor:'rgb(239, 237, 237)'}}>
      {props.imgM.map((item, index) => (
        <img style={{ width: '30%'   }} src={item.im} alt="" key={index} />
      ))}
    </div>
  )
}

export default Trend4
