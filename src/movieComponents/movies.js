
function MovieList({movies,setMovies})
{
   
    return(
        <div>
            <div className="movie-list">
                {
                    movies.map((mv,index)=><Movie movie={mv} key={index}/>)
                }
            </div>
    
        </div>
    )
}


function Movie({movie})
{
    const {name,poster,rating,summary}=movie
    console.log(movie)
    return(
        <div className="movie-container">
            <img src={poster} className="movie-poster" alt={movie.name}/>
            <h2 className="movie-name">{name}</h2>
            <p className="rating">{rating}</p>
            <p className="movie-summary">{summary}</p>
        </div>
    )
}
export default MovieList