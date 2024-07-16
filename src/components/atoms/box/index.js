import React from 'react';
import "./box.css";

const Box = ({title}) => {
  return (
    
        <div className='box'>
            <div>{title}</div>
        </div>
  )
}

export default Box
