import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const initialMovie = "Memento"
  const [title, setTitle] = useState(initialMovie)
  const [titleLengthText, setTitleLengthText] = useState(getTitleLengthText(initialMovie.length))

  function handleChange(event) {
    setTitle(event.target.value)
    setTitleLengthText(getTitleLengthText(event.target.value.length))
  }

  function getTitleLengthText(length) {
    if (length == 0) {
      return null
    } else if (length < 5) {
      return `A little too short: ${length} characters.`
    } else if (length <= 20) {
      return `Seems to be perfect: ${length} characters.`
    } else {
      return `That's too long: ${length} characters.`
    }
  }

  return (
    <div className='App-header'>
      <h1>My favorite movies to watch</h1>
      <h2>My favorite movie for today is {title}.</h2>
      <h3>{titleLengthText}</h3>
      <input type="text" value={title} onChange={handleChange} />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
