import React from 'react'
import Box from '../atoms/box'
import "./box1.css";


export const Leftboxes = () => {
  return (
    <div className='leftbox'>
        <div className ='toptwo'>
            <Box title={"cos1"}/>
            <Box  title={"cos1"}/>
        </div>
        <div className ='assignments'>
          <Box title = {"cos1"} />
          <Box title={"cos1"} />
        </div>
    </div>
  )
}
