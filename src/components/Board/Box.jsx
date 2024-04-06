import React,{useState} from 'react'

const Box = ({value, change}) => {

  return (
    <button className='box' onClick={change} style={value=='X'?{color:'red'}:{color:'blue'}}>{value}</button>
  )
}

export default Box