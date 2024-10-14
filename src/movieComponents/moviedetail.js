import { Button } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Moviedetail({movies}) {
    const {id}=useParams()
    const navigate=useNavigate()
  return (
    <div className='movie-detail-container'>
      Moviedetail of id :{id}
      <iframe width="540" height="322" src={movies[id].trailer} title="Vettaiyan - Prevue | Rajinikanth | Amitabh Bachchan | T.J. Gnanavel | Anirudh | Subaskaran | Lyca" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Button onClick={()=>navigate("/movies")}>Back</Button>
      </div>
  )
}

export default Moviedetail