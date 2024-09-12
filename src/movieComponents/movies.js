import { useState } from "react"

function MovieList()
{
    const [movie,setMovie]=useState({
        name:"Goat",
poster:"https://m.economictimes.com/thumb/msid-113079257,width-1200,height-1200,resizemode-4,imgsize-1603838/goat-movie-review.jpg",
summary:"Thalapathy Vijay and director Venkat Prabhu's The Greatest of All Time aka GOAT surpassed Rs 300 crore worldwide. The spy thriller has been shattering new box office records for the past five days.",
rating:9,
trailer:"https://www.youtube.com/embed/jxCRlebiebw"
    })
    const [isShow,setIsShow]=useState(false)
    const [newRating,setNewRating]=useState(0)
    //Destructuring
const {name,poster,summary,rating,trailer}=movie


//update movie Info
    const updateMovie=()=>{
        setMovie({...movie,rating:newRating})
    }

    return(
        <div>
            <h1>MovieList</h1>
            <h2>Movie Name:{name}</h2>
            <h3>Rating :{rating}</h3>
            <input placeholder="Enter Rating" onChange={e=>setNewRating(e.target.value)}/>
            <button onClick={()=>setIsShow(!isShow)}>{isShow ?"ON": "OFF"}</button>
            <button onClick={updateMovie}>update</button>
        </div>
    )
}
export default MovieList