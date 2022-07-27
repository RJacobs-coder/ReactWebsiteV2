import React from "react";

import { Socials } from "/home/robert/Documents/ReactWebsiteV2/src/Components/Socials.js";

// This page serves as footer of the page displaying contact information.

export const Footer = () => {
  const textArray = ["Phone:", "Email:"];
  const infoArray = ["ExamplePhoneNumber", "ExampleEmailAddress"];
  const compArray = [];

  for (var i = 0; i < textArray.length; i++) {
    compArray.push(
      <ul href="#" id={i + "Anchor"}>
        <li><h2>{textArray[i]}</h2></li>
        <li><h3>{infoArray[i]}</h3></li>
      </ul>
    );
  }

  var listItems = compArray.map((elements) => (
    <li className="FooterItems" id={elements.props.id + "li"} key={elements.id}>
      {elements}
    </li>
  ));

  return (
    <div id="Footer">
      <h1>Contact Me: </h1>
      <ul id="FooterUL">
      <li><ul id="FooterList">{listItems}</ul></li>
      <li id="FooterSocials"><Socials ></Socials></li>
      </ul>
    </div>
  );
};
