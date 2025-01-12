import logo from './logo.svg';
import './App.css';

function App() {
  let title = "Memento"

  function handleChange(event) {
    console.log(event.target.value)
  }

  return (
    <div className='App-header'>
      <h1>My favorite movies to watch</h1>
      <h2>My favorite movie for today is {title}.</h2>
      <input type="text" onChange={handleChange}/>
    </div>
  );
}

export default App;
