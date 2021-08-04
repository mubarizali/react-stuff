import React from 'react'
import { RootState } from '../../store'
import { decrement, increment } from './counterSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)

  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Redux-toolkit</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}