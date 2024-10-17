import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

function EditMovie() {
    const {id}=useParams()
    const [movie,setMovie]=useState({})

    useEffect(()=>{
        fetch(`https://66cc16c84290b1c4f19bdcb0.mockapi.io/movies/${id}`).then(data=>data.json()).then(mv=>setMovie(mv))
      },[id])
  return (
    <div>
        {/* <pre>{JSON.stringify(movie,null,2)}</pre> */}
        {
            movie ? <EditMovieForm movie={movie}/> : "Loading..."
        }
    </div>
  )
}

function EditMovieForm({movie})
{
    const [name,setName]=useState(movie.name)
    const [poster,setPoster]=useState(movie.poster)
    const [rating,setRating]=useState(movie.rating)
    const [summary,setSummary]=useState(movie.summary)
    const [trailer,setTrailer]=useState(movie.trailer)

    const navigate=useNavigate()

    const updateMovie=()=>{
        const updatedMovie={
            name,poster,rating,summary,trailer
        }
        fetch(`https://66cc16c84290b1c4f19bdcb0.mockapi.io/movies/${movie.id}`,{
            method:"PUT",
            body:JSON.stringify(updatedMovie),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(()=>navigate("/movies"))


    }
    return(
        <div className='add-movie-form'>
            <p>Movie Name:<input type="text" onChange={e=>setName(e.target.value)} defaultValue={movie.name}/></p>
            <p>Movie Poster:<input type="text" onChange={e=>setPoster(e.target.value)} defaultValue={movie.poster}/></p>
            <p>Movie Rating:<input type="text" onChange={e=>setRating(e.target.value)} defaultValue={movie.rating}/></p>
            <p>Movie Summary:<input type="text" onChange={e=>setSummary(e.target.value)} defaultValue={movie.summary}/></p>
            <p>Movie Trailer:<input type="text" onChange={e=>setTrailer(e.target.value)} defaultValue={movie.trailer}/></p>
            <Button color="inherit" onClick={updateMovie}>Update Movie</Button>

        </div>
    )
}

export default EditMovie