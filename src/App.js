import React, { useState } from "react";

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
  const buttonValues = ["Home", "About Me", "Games", "Photos", "3D Models"];
  const buttonArray = [];

  // Sets up the Different Bodies into an array.
  const bodyValues = ["Home", "About Me", "Games", "Photos", "3D Models"];
  const bodyArray = [
    <HomeBody></HomeBody>,
    <AboutMeBody></AboutMeBody>,
    <GamesBody></GamesBody>,
    <PhotosBody></PhotosBody>,
    <TDModelsBody></TDModelsBody>,
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

  // Creates Multiple Buttons with unique ID's and puts them all into an array.
  for (let i = 0; i < buttonValues.length; i++) {
    buttonArray.push(
      <button
        className="NavButtons"
        id={i + "NavButton"}
        value={buttonValues[i]}
        onClick={(e) => bodySwitch(e.target)}
      >
        {buttonValues[i]}
      </button>
    );
  }

  // Takes the button array and puts them all into a list.
  let listButtons = buttonArray.map((buttons) => (
    <li className="NavButtonsList" id={buttons.id + "Li"} key={buttons.id}>
      {buttons}
    </li>
  ));

  // Wave animation elements for background.
  let numberofWaves = 5;
  let waveArray = [];
  for (let i = 0; i < numberofWaves; i++) {waveArray.push(<div className="wave"></div>);}
  let printWaves = waveArray.map((items) => items);

  return (
    <div className="App">
      <Header></Header>
      <div className="waves">{printWaves}</div>
      <div id="NavBodyDiv">
        <div id="NavBarContainer">
          <ul id="LeftNavButtonList">{listButtons}</ul>
        </div>
        <div className="MainBody" id={"MainBody-" + currentBody}>
          {currentSelection}
        </div>
        
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
