import React from "react";

import { Socials } from "../Components/Socials";

// This page will serve as the Header of the website displaying the title and the *soon to be* animated
// Social links displayed in the top right of the site.

export const Header = () => {

   

  return (
    <div id="MainHeader">
      <div id="MainTitle">
        <h1 id="MainHeaderTitle">Portfolio Website</h1>
        <Socials></Socials>
      </div>
    </div>
  );
};
