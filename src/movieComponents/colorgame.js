import { useState } from "react"

function AddColor()
{
   const [color,setColor]=useState("tomato")
   const [colorList,setColorList]=useState([])

   const styles={
    backgroundColor:color
   }

    //JSX starts
    return(
        <div className="add-color">
            {color}
            {/* <input type="text" style={{backgroundColor:color}} onChange={event=>setColor(event.target.value)}/> */}
            <input type="text" style={styles} onChange={event=>setColor(event.target.value)}/>
            <button onClick={()=>setColorList([...colorList,color])}>Addcolor</button>
            {
                colorList.map(clr=><ColorBox color={clr}/>)
            }
        </div>
    )
    //JSX ends
}

function ColorBox({color})
{
    const styles={
        backgroundColor:color,
        height:"35px",
        width:"300px",
        margintop:'10px'
        }
    return(
        <div style={styles}>

        </div>
    )
}
export default AddColor