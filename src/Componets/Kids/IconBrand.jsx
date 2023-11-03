import React from 'react'

const IconBrand = (props) => {
  return (
    <div>
      {props.imgM.map((item, index) => (
        <img style={{ width: '20%'   }} src={item.im} alt="" key={index} />
      ))}
    </div>
  )
}

export default IconBrand;
