import React from "react"
import { useState } from "react"

const Character = ({character} ) => {

    const status = character.status;

    function statusCharacter(status){
		switch (status) {
			case 'Alive':
				return ( <span>Alive 🟢</span>);
				break;
			case 'Dead':
				return ( <span>Dead 🔴</span>);
				break;
			case 'unknown':
				return ( <span>Unknown</span>);
				break;
		}
	}

    return (
        <div className='text-center p-3' > 
        <img className="img-fluid rounded-circle" src={character.image} alt={character.name} >
        </img> 
        
        <p>
        <h5><span className="text-info">Name:</span> {character.name}</h5>
        <h5><span className="text-info">Origin:</span> {character.origin.name} </h5>
        <h5><span className="text-info">Status:</span> {statusCharacter (status) }
        
       

         </h5>  
        </p>
        </div>  
    )
}

export default Character