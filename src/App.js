import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL = 'https://www.omdbapi.com?apikey=c032e2d7';

const App = () => {
    const [movies , setmovies]= useState([]);
    const [searchTerm, setsearchTerm] =useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setmovies(data.Search)

    }
    
    useEffect(() => {
        searchMovies('batman')

    }, [])

    return (
        <div className="app">
            <h1>Movie catalog</h1>
            <div className="search">
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e) => setsearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />

            </div>
            {
                movies?.length > 0? (
                    <div className="container">
                      
                      {movies.map((movie)=>(
                        <MovieCard movie={movie}/>

                      ))}

                    </div>

                ):(
                    <div className="empty">
                        <h3>no movies found</h3>
                    </div>
                )
            }
            
        </div>

    );
}
export default App;