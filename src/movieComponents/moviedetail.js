import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Moviedetail() {
    const {id}=useParams()
    const navigate=useNavigate()
    const [movie,setMovie]=useState({})

    useEffect(()=>{
      fetch(`https://66cc16c84290b1c4f19bdcb0.mockapi.io/movies/${id}`).then(data=>data.json()).then(mv=>setMovie(mv))
    },[id])

  return (
    <div className='movie-detail-container'>
      Moviedetail of id :{id}
      <iframe width="540" height="322" src={movie.trailer} title="Vettaiyan - Prevue | Rajinikanth | Amitabh Bachchan | T.J. Gnanavel | Anirudh | Subaskaran | Lyca" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Button onClick={()=>navigate("/movies")}>Back</Button>
      </div>
  )
}

export default Moviedetail