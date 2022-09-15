import React from "react"
import { useState } from "react"
import styles from "../components/stylescharacter.css"

const Character = ({ results }) => {
  let display;

  if (results) {
      display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
          <div
      key={id}
      className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 text-dark"
    >


<div
          className={` bg-white flex-column justify-content-center`}>

          <div className="fs-4 mb-4">{name}</div>
          <img className={`img-fluid`} src={image} alt="" />
          <div >
            
              <div className="fs-5">Last Location</div>
              <div className="fs-6">{location.name}</div>
          </div>
        </div>

        {(() => {
          if (status === "Dead") {
            return (
              <div
                className={`bg-danger`}
              >
                {status}
              </div>
            );
          } else if (status === "Alive") {
            return (
              <div
                className={`bg-success`}
              >
                {status}
              </div>
            );
          } else {
            return (
              <div
                className="bg-info"
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
  return (
    <div className="text-info">
  No found

  </div>
  )
}

return <>{display}</>;
};




export default Character