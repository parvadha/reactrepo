import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { Button } from "@mui/material"

function AddMovie()
{
    const [newMovie,setNewMovie]=useState({})
    const navigate=useNavigate()

    const addMovie=()=>{
        console.log(newMovie)
        // setMovies([...movies,newMovie])
        // console.log(movies)
        fetch("https://66cc16c84290b1c4f19bdcb0.mockapi.io/movies",{
            method:"POST",
            body:JSON.stringify(newMovie),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(()=>navigate("/movies"))


    }
    return(
        <div className='add-movie-form'>
            <p>Movie Name:<input type="text" onChange={e=>setNewMovie({...newMovie,name:e.target.value})}/></p>
            <p>Movie Poster:<input type="text" onChange={e=>setNewMovie({...newMovie,poster:e.target.value})}/></p>
            <p>Movie Rating:<input type="text" onChange={e=>setNewMovie({...newMovie,rating:e.target.value})}/></p>
            <p>Movie Summary:<input type="text" onChange={e=>setNewMovie({...newMovie,summary:e.target.value})}/></p>
            <p>Movie Trailer:<input type="text" onChange={e=>setNewMovie({...newMovie,trailer:e.target.value})}/></p>
            <Button color="inherit" onClick={addMovie}>Add Movie</Button>

        </div>
    )
}

export default AddMovie