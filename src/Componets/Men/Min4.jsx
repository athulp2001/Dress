import React from 'react';








const Min4 = (props) => {
  return (
    <div>
      {props.imgM.map((item, index) => (
        <img style={{ width: '15%'   }} src={item.im} alt="" key={index} />
      ))}
    </div>
  );
};

export default Min4;
