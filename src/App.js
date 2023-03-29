import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL = 'https://www.omdbapi.com?apikey=c032e2d7';
const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
    "Year": "2016",
    "imdbID": "tt18689424",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
}
const App = () => {
    const [movies , setmovies]= useState([]);

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
                    value='superman'
                    onChange={() => { }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { }}
                />

            </div>
            <div className="container">
                <MovieCard movie1={movie1}/>

            </div>
        </div>

    );
}
export default App;