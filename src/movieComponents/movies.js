import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import Counter from "./counter"
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
function MovieList({movies})
{
   
    return(
        <div>
            <div className="movie-list">
                {
                    movies.map((mv,index)=><Movie movie={mv} key={index} id={index}/>)
                }
            </div>
    
        </div>
    )
}


function Movie({movie,id})
{
    const {name,poster,rating,summary,trailer}=movie
    const navigate=useNavigate()
    const [show,setShow]=useState(false)
    const styles={color:rating>=8?"green":"red"}
    console.log(movie)
    return(
         <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name}/>
      <CardContent>
       <div className="movie-specs">
        <h2 className="movie-name">{name}</h2>
        <p style={styles}>{rating}</p>
        <IconButton color="primary" onClick={()=>navigate("/movies/"+id)}>
          <InfoIcon/>
        </IconButton>
        <IconButton onClick={()=>setShow(!show)}>{show?<ExpandMoreIcon/>:<ExpandLessIcon/>}</IconButton>
        {show?<p>{summary}</p>:""}
       </div>
      </CardContent>
      <CardActions>
        <Counter/>
        <Button size="small">Edit</Button>
        <Button size="small"><DeleteIcon />
        </Button>
      </CardActions>
    </Card>

    )
}
export default MovieList