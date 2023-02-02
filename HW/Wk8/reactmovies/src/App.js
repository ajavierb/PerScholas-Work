import logo from './logo.svg';
import './App.css';

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // USE OUR COMPONENTS IN APPs RETURNED JSX
  return (
    <div className="App">
      <Form />
      <MovieDisplay />
    </div>
  );
}


function App() {
  const apiKey = "8b0f5b77";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
