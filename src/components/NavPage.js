import React from "react";
import { useState } from "react"

const NavPage = ({prev, next, onPrevious, onNext}) => {

  const handlePrevious = () => {
    onPrevious ();
  }
  const handleNext = () => {
    onNext ();
  }
    return (
      <nav>
      <ul className="navbar">
        <div className="container-fluid my-2 py-2">
        <li className="list-unstyled"> <button type="button" onClick={handlePrevious} className="btn btn-outline-info"> Previous {} </button></li>
        <li className="list-unstyled"> <button type="button" className="btn btn-outline-light">🏠 {} </button></li>
        
        <li className="list-unstyled"> <button type="button" onClick={handleNext} className="btn btn-outline-info" >Next</button> </li>
        </div>
      </ul> 
      </nav>
    )
  }

  export default NavPage