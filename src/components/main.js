import React, { useContext, useReducer } from 'react'
import Header from './header'
import Footer from './footer'
import { counterReducer, initial_state } from '../reduxdemo'
function Main() {
  const [state,dispatch]=useReducer(counterReducer,initial_state)
  return (
    <div className='main'>
        <h2>Main</h2>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        {state.count}
        <button>Decrement</button>
        <hr/>
        <Header/>
        <Footer/>
        </div>
  )
}

export default Main