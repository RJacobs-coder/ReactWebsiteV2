import React, { useState } from "react";
import { motion } from "framer-motion";

import { Header } from "./LayoutComponents/Header";
import { Footer } from "./LayoutComponents/Footer";

import { HomeBody } from "./LayoutComponents/BodyComponents/HomeBody";
import { AboutMeBody } from "./LayoutComponents/BodyComponents/AboutMeBody";
import GamesBody from "./LayoutComponents/BodyComponents/GamesBody";
import PhotosBody from "./LayoutComponents/BodyComponents/PhotosBody";
import TDModelsBody from "./LayoutComponents/BodyComponents/TDModelsBody";

function App() {
  // Maintains Current State or Selection of which body is to be presented.
  const [currentBody, setBody] = useState("");
  console.log("Initial Set - " + currentBody);

  // Sets up the Button Values.
  const buttonValues = ["Home", "AboutMe", "Games", "Photos", "3DModels"];
  const buttonArray = [];

  // Sets up the Different Bodies into an array.
  const bodyValues = ["Home", "AboutMe", "Games", "Photos", "3DModels"];
  const bodyArray = [
    <HomeBody></HomeBody>,
    <AboutMeBody></AboutMeBody>,
    <GamesBody></GamesBody>,
    <PhotosBody></PhotosBody>,
    <TDModelsBody></TDModelsBody>
  ];

  // Keeps track of which Body is currently selected.
  let currentState = currentBody;
  console.log("Current State - " + currentState);

  //Organises which Index of the bodyArray is Selected based on Button CLicks.
  let currentSelection;
  for (let i = 0; i < bodyArray.length; i++) {
    if (currentState === bodyValues[i]) {
      currentSelection = bodyArray[i];
    }
  }

  // Takes the Current Body (setState) from the button and re assigns the current state.
  const bodySwitch = (e) => {
    console.log("Before Click - " + currentBody);
    setBody(e.value);
    console.log("After Click - " + currentBody);

    return currentBody;
  };

  // On hover events for Styling.
  function MouseOver(event) {
    event.target.style = "background: #fcfcd4; color: #00a8d6";
    event.target = "Socials";
  }
  function MouseOut(event) {
    event.target.style = "";
  }

  // Creates Multiple Buttons with unique ID's and puts them all into an array.
  for (let i = 0; i < buttonValues.length; i++) {
    buttonArray.push(
      <motion.button
        className="NavButtons"
        id={i + "NavButton"}
        value={buttonValues[i]}
        onClick={(e) => bodySwitch(e.target)}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        initial={{y:-250, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{delay: (i/5), duration: 1}}
      >
        {buttonValues[i]}
      </motion.button>
    );
  }

  // Takes the button array and puts them all into a list.
  let listButtons = buttonArray.map((buttons) => (
    <li className="NavButtonsList" id={buttons.id + "Li"} key={buttons.id}>
      {buttons}
    </li>
  ));

  return (
    <div className="App">
      <Header></Header>

      <div id="NavBodyDiv">
        <div id="NavBarContainer">
          <ul id="LeftNavButtonList">{listButtons}</ul>
        </div>

        {/* <div className="waves">{printWaves}</div> */}
        <motion.div className="MainBody" id={"MainBody-" + currentBody}
              initial={{x:250, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{delay: 0.5, duration: 0.5}}>
          {currentSelection}
        </motion.div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
