import React from "react";
import Carousel from "better-react-carousel";

import pic0 from "../ArtAssets/aboutMePictures/bridge.jpg";
import pic1 from "../ArtAssets/aboutMePictures/bubbles.jpg";
import pic2 from "../ArtAssets/aboutMePictures/disney.jpg";
import pic3 from "../ArtAssets/aboutMePictures/fishing.jpg";
import pic4 from "../ArtAssets/aboutMePictures/london.jpg";
import pic5 from "../ArtAssets/aboutMePictures/snorkling.jpg";
import pic6 from "../ArtAssets/aboutMePictures/StudentAward.jpg";
import pic7 from "../ArtAssets/aboutMePictures/traveling.jpg";

import textCollect from "../TextAssets/aboutMeTitles.json";

// Initial test to see if the Carousel Library would work. Currently used in the AboutBody.js file.

const Gallery = () => {
  const TEXTASSETS = textCollect.map((items) => (
    <a className="aboutMeText" id={items.id + "aboutMeText"}>
      {items.content}
    </a>
  ));
  const picArray = [pic0, pic1, pic2, pic3, pic4, pic5, pic6, pic7];

  return (
    <Carousel cols={1} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className="ListTestingDivider">
        <ul id="ListTestingGallery">
          <li>
            <img className="aboutMePic" src={picArray[0]}></img>
          </li>
          <li>{TEXTASSETS[0]}</li>
        </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>

      <div className="ListTestingDivider">
        <ul id="ListTestingGallery">
          <li>{TEXTASSETS[1]}</li>
          <li>
            <img className="aboutMePic" src={picArray[1]}></img>
          </li>
        </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="ListTestingDivider">
        <ul id="ListTestingGallery">
          <li>
            <img className="aboutMePic" src={picArray[2]}></img>
          </li>
          <li>{TEXTASSETS[2]}</li>
        </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="ListTestingDivider">
        <ul id="ListTestingGallery">
          <li>{TEXTASSETS[3]}</li>
          <li>
            <img className="aboutMePic" src={picArray[3]}></img>
          </li>
        </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="ListTestingDivider">
        <ul id="ListTestingGallery">
          <li>
            <img className="aboutMePic" src={picArray[4]}></img>
          </li>
          <li>{TEXTASSETS[4]}</li>
        </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="ListTestingDivider">
        <ul id="ListTestingGallery">
          <li>{TEXTASSETS[5]}</li>
          <li>
            <img className="aboutMePic" src={picArray[5]}></img>
          </li>
        </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="ListTestingDivider">
        <ul id="ListTestingGallery">
          <li>
            <img className="aboutMePic" src={picArray[6]}></img>
          </li>
          <li>{TEXTASSETS[6]}</li>
        </ul>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="ListTestingDivider">
        <ul id="ListTestingGallery">
          <li>{TEXTASSETS[7]}</li>
          <li>
            <img className="aboutMePic" src={picArray[7]}></img>
          </li>
        </ul>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Gallery;
