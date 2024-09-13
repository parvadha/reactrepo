import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import "./App.css"
import MovieList from "./movieComponents/movies"
import AddColor from "./movieComponents/colorgame"
import AddMovie from "./movieComponents/addmovies"
function App()
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
            <div className="navbar">
                <Link to="/" className="link">Home</Link>
                <Link to="/movies" className="link">Movies</Link>
                <Link to="/movies/add" className="link">Add Movie</Link>
                <Link to="/color-game" className="link">Colorgame</Link>

            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<MovieList movies={movies} setMovies={setMovies}/>}/>
                <Route path="/color-game" element={<AddColor/>}/>

                {/* /movies/add----><AddMovie/> */}
                <Route path="/movies/add" element={<AddMovie movies={movies} setMovies={setMovies}/>}/>
            </Routes>
        </div>
    )
}

function Home()
{
    return <h1>Welcome to the MovieApp ⭐👌🍿🌞❤️ </h1>
}
export default App