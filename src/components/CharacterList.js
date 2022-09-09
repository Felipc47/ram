import { useEffect, useState } from "react";
import Character from "./Character";
import Search from "./search";
import prueba2 from "./prueba2";

function NavPage ({page, setPage}) {
  return (
      <header>
        <nav>
          <ul className="navbar">
            <li className="list-unstyled"> 
            {
              page == 1 ? <button disabled={true} className="btn btn-lg btn-dark"> Principal page </button> 
              : <button disabled={false} onClick={() => setPage(page - 1)} className="btn btn-lg btn-outline-info"> ⇦ Page {page - 1}  </button>
            }
            
            
            </li>
           
          <li className="list-unstyled">
            <button onClick={() => setPage(1)} className="btn btn-lg btn-outline-info">🏠</button>
            </li>

            
          <li className="list-unstyled">

            {
              page == 43 ? <button disabled={true} className="btn btn-lg
               btn-outline-info">  Last page </button> : <button disabled={false} onClick={() => setPage(page + 1)} className="btn btn-lg btn-outline-info"> Page {page + 1} ⇨ </button>
            }

          </li>
          </ul>

        </nav>
      </header>
    )
}


function CharacterList () {

    const [characters, setCharacters] = useState ([])
    const [loading, setLoading] = useState (true)
    const [page, setPage] = useState (1)
    const [search, setSearch] = useState("")
    const [fetchedData, updateFetchedData] = useState([]);
    const { info, results } = fetchedData ();

    
  
    const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;  

    useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        updateFetchedData(data);
      })();
      }, [api]);
      

      return (
        <div className="App">
          <h1 className="text-center mb-3">Characters</h1>
          <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="row">
                  <Card page="/" results={results} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default App;