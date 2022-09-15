import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';

document.title = 'Rick and Morty'

function App() {

  const [mode, SetMode] = useState () 


  return <div className='bg-white text-dark'>
    <h1 className='text-left display-6 bg-primary py-3 px-3 lead text-white'> 
    Rick and Morty | Wiki </h1>

    

  <CharacterList />
 

  </div>
   
}

export default App;
