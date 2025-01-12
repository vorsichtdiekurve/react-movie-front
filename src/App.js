import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const movies = [
    {title: "Wall-E"},
    {title: "Pulp Fiction"},
    {title: "Matrix"},
    {title: "1670"},
  ];

  return (
    <div className='App-header'>
      <h1>My favorite movies to watch</h1>
      <h2>Titles</h2>
      <ul>
        {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
      </ul>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
