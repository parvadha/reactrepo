import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { Button } from "@mui/material"

function AddMovie({movies,setMovies})
{
    const [newMovie,setNewMovie]=useState({})
    const navigate=useNavigate()

    const addMovie=()=>{
        // console.log(newMovie)
        setMovies([...movies,newMovie])
        console.log(movies)
        navigate("/movies")

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