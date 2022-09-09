import React from "react"
import { useState } from "react"

const Character = ({character} ) => {

    const status = character.status;
    const display = character.results;  
  

    return (
        <div className='text-center p-3' > 
        <img className="img-fluid rounded-circle" src={character.image} alt={character.name} >
        </img> 
        
        <p>
    
        <h5><span className="text-info">Origin:</span> {character.origin.name} </h5>
        <h5><span className="text-info">Status:</span>
        
        {(() => {
            if (status === "Dead") {
              return (
                <div
                  
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  
                >
                  {status}
                </div>
              );
            }
          })()}
        
   
  


         </h5>  
        </p>
        </div>  
    )
}

export default Character