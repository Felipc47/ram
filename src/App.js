import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';

document.title = 'Rick and Morty'

function App() {

  const [mode, SetMode] = useState ()


  return <div className='bg-secondary text-white'>
    <h1 className='text-center display-5 bg-dark py-3 lead text-info py-5'> 
    Rick and Morty </h1>

  <CharacterList />
 

  </div>
   
}

export default App;
