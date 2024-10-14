import { createContext, useState } from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import "./App.css"
import MovieList from "./movieComponents/movies"
import AddColor from "./movieComponents/colorgame"
import AddMovie from "./movieComponents/addmovies"
import Moviedetail from "./movieComponents/moviedetail"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from "@mui/material"
import {ThemeProvider,createTheme} from "@mui/material/styles"
import {Paper} from "@mui/material"
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
function App()
{
    const [movies,setMovies]=useState([])
    const navigate=useNavigate()
    const [mode,setMode]=useState("light")

    const darkTheme=createTheme({
        palette:{
            mode:mode
        }
    })

    // const styles={backgroundColor:mode==="light"?"white":"black",
    //     color:mode==="light"?"black":"white"
    // }
        // const theme={mode,setMode}

    return(
        <ThemeProvider theme={darkTheme}>
            <Paper elevation={4} style={{minHeight:"100vh"}}>
        <div className="App">   
               <AppBar component="nav" position="static">
               <Toolbar>
              <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
              <Button  color="inherit" onClick={()=>navigate("/movies")}>Movies</Button>
              <Button color="inherit" onClick={()=>navigate("/movies/add")}>Add Movie</Button>
              <Button color="inherit" onClick={()=>navigate("/color-game")}>Colorgame</Button>
              <Button color="inherit" startIcon={mode==="dark"?<Brightness7Icon/>:<Brightness4Icon/>} onClick={()=>setMode(mode==="dark"?"light":"dark")}>{mode==="dark"?"Light":"Dark"}Mode</Button>
                </Toolbar>
               </AppBar>
            <Routes>
                <Route path="/movies" element={<MovieList movies={movies}/>}/>
                <Route path="/color-game" element={<AddColor/>}/>

                {/* /movies/add----><AddMovie/> */}
                <Route path="/movies/add" element={<AddMovie movies={movies} setMovies={setMovies}/>}/>
                <Route path="/movies/:id" element={<Moviedetail movies={movies}/>}/>
                <Route path="/" element={<Home/>}/>

            </Routes>
        </div>
        </Paper>
        </ThemeProvider>                    
    )
}

function Home()
{
    return <h1>Welcome to the MovieApp ⭐👌🍿🌞❤️ </h1>
}
export default App