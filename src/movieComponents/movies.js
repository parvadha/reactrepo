import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import Counter from "./counter"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
function MovieList()
{
    const [movieList,setMovieList]=useState([])
    const navigate=useNavigate()
    const getMovies=()=>{
        fetch("https://66cc16c84290b1c4f19bdcb0.mockapi.io/movies").then(data=>data.json()).then(moviesData=>setMovieList(moviesData))

    }
    //componentDidMount()--runs only once after initial render
    useEffect(()=>{
        getMovies()
    },[])
   
    const deleteMovie=(id)=>{
        console.log("deleting movie :"+id)
        fetch(`https://66cc16c84290b1c4f19bdcb0.mockapi.io/movies/${id}`,{method:"DELETE"}).then(()=>{
            
            getMovies()
    })

    }
    return(
        <div>
            <div className="movie-list">
                {
                    movieList.map((mv)=><Movie movie={mv} key={mv.id} editButton={<Button onClick={()=>navigate(`/movies/edit/${mv.id}`)}><EditIcon/></Button>} deleteButton={<Button onClick={()=>deleteMovie(mv.id)}><DeleteIcon/></Button>}/>)
                }
            </div>
    
        </div>
    )
}


function Movie({movie,deleteButton,editButton})
{
    const {id,name,poster,rating,summary}=movie
    const navigate=useNavigate()
    const [show,setShow]=useState(false)
    const styles={color:rating>=8?"green":"red"}
    return(
         <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name}/>
      <CardContent>
       <div className="movie-specs">
        <h2 className="movie-name">{name}</h2>
        <IconButton onClick={()=>setShow(!show)}>
            {show?<ExpandMoreIcon/>:<ExpandLessIcon/>}
            </IconButton>
        <IconButton color="primary" onClick={()=>navigate("/movies/"+id)}>
          <InfoIcon/>
        </IconButton>
        <p style={styles}>{rating}</p>
            
       </div>
        {show?<p>{summary}</p>:""}
      </CardContent>
      <CardActions>
        <Counter/>
        {editButton}
        {deleteButton}
      </CardActions>
    </Card>

    )
}
export default MovieList