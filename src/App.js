  import { useState } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import { Home } from './Home/Home';

function App() {
  const [movie,setMoviName]=useState();
  return (
    <>
   <NavBar setMoviName={setMoviName} movie={movie}/>
   <Home setMoviName={setMoviName} movie={movie}/>
    </>
  );
}

export default App;
