import React from 'react'
import './images.css'
import  bla from './bla.png';
import cap from './cap.png'
import hul from './hul.png'
import iro from './iro.png'

export const Images = () => {
  return (
    <div className='container'>
        <img src={cap} alt='imag'/>
        <img src={bla} alt='imag'/>
        <img src={iro} alt='imag'/>
        <img src={hul} alt='imag'/>
    </div>
  )
}
