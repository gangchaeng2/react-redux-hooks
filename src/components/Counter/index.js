import React from 'react'

export default ({
  counter,
  onIncrement, onDecrement,
}) => {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}
