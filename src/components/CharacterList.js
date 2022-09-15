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
              page == 1 ? <button disabled={true} className="btn btn-md btn-outline-info"> Principal page </button> 
              : <button disabled={false} onClick={() => setPage(page - 1)} className="btn btn-md btn-outline-info"> ⇦ Page {page - 1}  </button>
            }
            
            
            </li>
           
          <li className="list-unstyled">
            <button onClick={() => setPage(1)} className="btn btn-md btn-outline-info">🏠</button>
            </li>

            
          <li className="list-unstyled">

            {
              page == 43 ? <button disabled={true} className="btn btn-md
               btn-outline-info">  Last page </button> : <button disabled={false} onClick={() => setPage(page + 1)} className="btn btn-md btn-outline-info"> Page {page + 1} ⇨ </button>
            }

          </li>
          </ul>

        </nav>
      </header>
    )
}


function CharacterList () {

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
            <div className="container">
  <div className="row">
    Filter component will be placed here
    <div className="col-lg-8 col-12">
      <div className="row">
      <Character results = {results} />
        
      </div>
    </div>
  </div>
  </div>
            
               
      <NavPage page={page} setPage={setPage}/>

           </div>
           
        )
      }
          </div>

    )
}


export default CharacterList