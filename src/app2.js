import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'
import Header from './components/header'
function App2() {
    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        {count}
        <button onClick={()=>dispatch(decrement())}>-</button>
        <hr/>
        <Header/>
    </div>
  )
}

export default App2