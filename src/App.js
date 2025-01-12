import logo from './logo.svg';
import './App.css';
import 'milligram'
import { useState } from 'react';
import { Movie } from './model/Movie';

function App() {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [movies, setMovies] = useState([])

  function handleAddMovie() {
    setMovies([...movies, new Movie(title, year)])
    setTitle("")
    setYear("")
  }

  return (
    <div className='App'>
      <h1>My favorite movies to watch</h1>
      <h2>Titles</h2>
      <ul>
        {movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
      </ul>
      <h2>Add movie</h2>
      <div>
        <label>Title</label>
        <input className='App-input' type="text" value={title} 
          onChange={(event) => setTitle(event.target.value)}/>
      </div>
      <div>
        <label>Year</label>
        <input className='App-input' type="text" value={year} 
          onChange={(event) => setYear(event.target.value)}/>
      </div>
      {title.length > 0 && year.length > 0 && <button onClick={() => handleAddMovie()}>Add Movie</button>}
    </div>
  );
}

export default App;
