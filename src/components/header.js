import { useSelector,useDispatch } from "react-redux"
import { increment } from "../features/counter/counterSlice"
function Header()
{
    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()
    return(
        <div className="header">
            <h2>Header</h2>
            <h3>Count :{count}</h3>
            <button onClick={()=>dispatch(increment())}>Increment</button>
        </div>
    )
}
export default Header