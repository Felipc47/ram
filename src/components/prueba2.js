import React from "react"
import { useState } from "react"

const prueba2 = ({ character}) => {

    let display;

  if (character) {
   display = character.map((x) => {
      const { image, name, status, location } = x;

      return (
        <div
        className='text-center p-3'
        >
          <div
            className={`d-flex flex-column justify-content-center`}
          >
            <img className="img-fluid rounded-circle" src={character.image} alt={character.name} >
        </img> 
            <div>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              
            </div>
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default prueba2;