import React from 'react'
import Box from '../atoms/box'
import "./box1.css";


export const Leftboxes = () => {
  return (
    <div className='leftbox'>
        <div className ='toptwo'>
            <Box title={"GST01"}/>
            <Box  title={"COS1"}/>
        </div>
        <div className ='assignments'>
          <Box title = {"Advert"} />
          <Box title={"Assignment"} />
        </div>
    </div>
  )
}
