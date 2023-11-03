import React from 'react'

const Logo4 = (props) => {
  return (
    <div>
      {props.imgM.map((item, index) => (
        <img style={{ width: '17%'   }} src={item.im} alt="" key={index} />
      ))}
    </div>
  )
}

export default Logo4
