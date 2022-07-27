import React from "react";

// Placeholder for landing page. This page will be completed last and will serve as a summary for what
// the website will contain as well as updated information on the author and what to expect in the future.

export const HomeBody = () => {

  // Mouse over Event for Reference.
  function MouseOver(event) {
    event.target.style.background="red";
  }
  function MouseOut(event){
    event.target.style.background="";
  }
  return (
    <div >
        <h1 onMouseOver={MouseOver} onMouseOut={MouseOut}>This is the Default Home Page</h1>
   
   </div>
  );
};
