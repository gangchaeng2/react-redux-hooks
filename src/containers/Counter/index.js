import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Counter } from '../../components'

export default () => {
  const counter = useSelector(state => state.counter, [])
  const dispatch = useDispatch()

  const onIncrement = () => {
    dispatch({ type: 'INCREMENT_ASYNC' })
  }

  const onDecrement = () => {
    dispatch({ type: 'DECREMENT_ASYNC' })
  }

  return (
    <Counter counter={counter} onIncrement={onIncrement} onDecrement={onDecrement} />
  )
}
