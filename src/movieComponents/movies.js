import { useState } from "react"

function MovieList()
{
    const [movies,setMovies]=useState([{
        name:"Goat",
poster:"https://m.economictimes.com/thumb/msid-113079257,width-1200,height-1200,resizemode-4,imgsize-1603838/goat-movie-review.jpg",
summary:"Thalapathy Vijay and director Venkat Prabhu's The Greatest of All Time aka GOAT surpassed Rs 300 crore worldwide. The spy thriller has been shattering new box office records for the past five days.",
rating:9,
trailer:"https://www.youtube.com/embed/jxCRlebiebw"

    }])
    
    return(
        <div>
            <AddMovie movies={movies} setMovies={setMovies}/>
            <div className="movie-list">
                {
                    movies.map((mv,index)=><Movie movie={mv} key={index}/>)
                }
            </div>
    
        </div>
    )
}

function AddMovie({movies,setMovies})
{
    const [newMovie,setNewMovie]=useState({})

    const addMovie=()=>{
        // console.log(newMovie)
        setMovies([...movies,newMovie])
        console.log(movies)
    }
    return(
        <div>
            <p>Movie Name:<input type="text" onChange={e=>setNewMovie({...newMovie,name:e.target.value})}/></p>
            <p>Movie Poster:<input type="text" onChange={e=>setNewMovie({...newMovie,poster:e.target.value})}/></p>
            <p>Movie Rating:<input type="text" onChange={e=>setNewMovie({...newMovie,rating:e.target.value})}/></p>
            <p>Movie Summary:<input type="text" onChange={e=>setNewMovie({...newMovie,summary:e.target.value})}/></p>
            <p>Movie Trailer:<input type="text" onChange={e=>setNewMovie({...newMovie,trailer:e.target.value})}/></p>
            <button onClick={addMovie}>Add Movie</button>

        </div>
    )
}

function Movie({movie})
{
    const {name,poster,rating,summary}=movie
    console.log(movie)
    return(
        <div className="movie-container">
            <img src={poster} className="movie-poster"/>
            <h2 className="movie-name">{name}</h2>
            <p className="rating">{rating}</p>
            <p className="movie-summary">{summary}</p>
        </div>
    )
}
export default MovieList