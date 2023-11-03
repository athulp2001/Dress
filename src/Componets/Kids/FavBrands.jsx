import React from 'react'

const FavBrands = (props) => {
  return (
    <div>
      {props.imgM.map((item, index) => (
        <img style={{ width: '10.8%'   }} src={item.im} alt="" key={index} />
      ))}
    </div>
  )
}

export default FavBrands;

