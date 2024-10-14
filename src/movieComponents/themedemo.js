import { useContext } from "react"
// import { themeContext } from "../App"

function List() {
    return (
      <div>
          <ul>
              <ListItem value="light💡" />
              <ListItem value="dark 🌙"/>
  
          </ul>
      </div>
    )
  }
  
  function ListItem({value})
  {
      return (
          <div>
              <Button value={value}/>
          </div>
        )
  }
  function Button({value})
  {
    // const theme=useContext(themeContext)
    //   const {mode,setMode}=theme
      
      return (
          <div>
              {/* <button  onClick={()=>{setMode(value=value==="light💡"?"light":"dark")}}>{value}</button> */}
          </div>
        )
  }
  
  export default List
    