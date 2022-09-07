import { useEffect, useState } from "react";
import Character from "./Character";
import Search from "./search";

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
    const { info, results } = fetchedData;

    
  
    const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;  

    useEffect(() => {
        async function fetchData () {
          const response = await fetch (api)
          const data = await response.json ()
          setLoading (false)
          setCharacters (data.results)
          updateFetchedData(data)
          
        }
      

        fetchData ()
      }, [page, search]);
      

    return (
        <div className="container ">    
           
      <NavPage page={page} setPage={setPage} />

           { 
        loading ? (<h1> Loading </h1>) : (
          
          <div className="row text-center align-center">
            <h1>Characters</h1>
            <Search setSearch={setSearch} setPage={setPage} />

           {characters.map(character => {
              return (
                <div className="col-md-3" key={character.id}>
                    <Character character={character} />
                </div>
                
              )
            })
          }
      <NavPage page={page} setPage={setPage}/>

           </div>
           
        )
      }
          </div>

    )
}


export default CharacterList