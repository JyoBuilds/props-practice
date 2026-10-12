import React from 'react'
import "./Child.css"

const Child = (props) => {
  return (
    <div className='card'>
      <img src={props.pizza} alt="Pizza" />
        <h1>{props.title}</h1>
        <h2>{props.price}</h2>
    </div>
  )
}

export default Child
