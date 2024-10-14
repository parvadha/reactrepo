import React, { useReducer } from 'react'
import { counterReducer, initial_state } from '../reduxdemo'

function Footer() {
  const [state,dispatch]=useReducer(counterReducer,initial_state)
  return (
    <div className='footer'>
        <h2>Footer</h2>
        <h2><button onClick={()=>dispatch({type:"Decrement"})}>-</button>{state.count}</h2>
        </div>
  )
}

export default Footer