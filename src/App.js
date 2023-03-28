import { useEffect } from "react";
//c747902b
const API_URL = 'https://www.omdbapi.com?apikey=c032e2d7';

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        console.log(data)

    }

    useEffect(() => {
        searchMovies('batman')

    }, [])

    return (
        <h1>App</h1>

    );
}
export default App;