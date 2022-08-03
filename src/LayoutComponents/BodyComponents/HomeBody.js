import React from "react";
import {motion} from "framer-motion";

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
        <motion.h1
        animate={{fontSize:50, color: '#000000', x: -100, y: 100}}> 
        Animation Test</motion.h1>
<motion.div 
initial={{opacity: 0}}
animate={{opacity:1}}>
        <motion.button
        initial={{y: -250}}
        animate={{y: 0}}
        >
          Animation Button
        </motion.button>
        <motion.button
        initial={{y: -350}}
        animate={{y: 0}}
        >
          Animation Button
        </motion.button>
        <motion.button
        initial={{y: -450}}
        animate={{y: 0}}
        >
          Animation Button
        </motion.button>
        <motion.button
        initial={{y: -550}}
        animate={{y: 0}}
        >
          Animation Button
        </motion.button>
        </motion.div>
   
   </div>
  );
};
