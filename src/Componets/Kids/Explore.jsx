import React from 'react'

const Explore = (props) => {
  return (
    <div>
      {props.imgM.map((item, index) => (
        <img style={{ width: '50%'   }} src={item.im} alt="" key={index} />
      ))}
    </div>
  )
}

export default Explore
