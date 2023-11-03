import React from 'react'

const TopPicks = (props) => {
  return (
    <div>
       {props.imgM.map((item, index) => (
        <img style={{ width: '10%'   }} src={item.im} alt="" key={index} />
      ))}
    </div>
  )
}

export default TopPicks;
