import React, { useState } from 'react'
import Main from './components/main'

export const initial_state={count:0,msg:"Welcome All"}

//Reducer
export const counterReducer=(state=initial_state,action)=>{
switch(action.type)
{
    case "Increment":
        return {...state,count:state.count+1}
    case "Decrement":
        return {...state,count:state.count-1}
    default:
        return state;
}
}
function Reduxdemo() {

  return (

    <div>Reduxdemo

        <hr/>
       <Main/>
    </div>
  )
}

export default Reduxdemo