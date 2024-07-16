import React from 'react'
import { Leftboxes } from '../../molecules'
import  "./mainone.css"

export const Demoweb = () => {
  return (
    <div className='flex mainone'>
        <Leftboxes/>
        <div className='aside'>latest blog post</div>
    </div>
  )
}
