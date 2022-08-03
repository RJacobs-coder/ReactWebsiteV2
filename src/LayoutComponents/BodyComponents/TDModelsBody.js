import React from "react";
import Scroll from "react-scroll";
import {motion} from "framer-motion";

import ModelDisplayBlock from "../../Components/ModelDisplayBlock";

import pic0 from "../../ArtAssets/artAssets/ExamplePhotos/example0.jpg";
import pic1 from "../../ArtAssets/artAssets/ExamplePhotos/example1.jpg";
import pic2 from "../../ArtAssets/artAssets/ExamplePhotos/example2.jpg";
import pic3 from "../../ArtAssets/artAssets/ExamplePhotos/example3.jpg";

import textCollect from "../../TextAssets/modelTitles.json";

// This page will display the Blender 3D assets created as part of my Hobby Projects.

let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

const picArray = [pic0, pic1, pic2, pic3];

const blockTitle = textCollect.map((items) => (
  <a className="modelText" id={items.id + "modelText"}>
    {items.title}
  </a>
));

const blockDescription = textCollect.map((items) => (
  <a className="modelText" id={items.id + "modelText"}>
    {items.description}
  </a>
));

class TDModelsBody extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      title0: blockTitle[0],
      title1: blockTitle[1],
      title2: blockTitle[2],
      title3: blockTitle[3],

      desc0: blockDescription[0],
      desc1: blockDescription[1],
      desc2: blockDescription[2],
      desc3: blockDescription[3],

      pic0: picArray[0],
      pic1: picArray[1],
      pic2: picArray[2],
      pic3: picArray[3],
    };
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    const {
      title0,
      title1,
      title2,
      title3,
      desc0,
      desc1,
      desc2,
      desc3,
      pic0,
      pic1,
      pic2,
      pic3,
    } = this.state;

    return (

      <Element
        name="ModelBodyClassContainerElement"
        className="element"
        id="ModelBodyClass-containerElement"
      >
        <h1>This is Where the 3D Models will go. Current are Placeholders.</h1>

        <Element>
          <ModelDisplayBlock
            sendTitle={title0}
            sendDesc={desc0}
            sendPic={pic0}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title1}
            sendDesc={desc1}
            sendPic={pic1}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title2}
            sendDesc={desc2}
            sendPic={pic2}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title3}
            sendDesc={desc3}
            sendPic={pic3}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title0}
            sendDesc={desc0}
            sendPic={pic0}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title1}
            sendDesc={desc1}
            sendPic={pic1}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title2}
            sendDesc={desc2}
            sendPic={pic2}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title3}
            sendDesc={desc3}
            sendPic={pic3}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title0}
            sendDesc={desc0}
            sendPic={pic0}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title1}
            sendDesc={desc1}
            sendPic={pic1}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title2}
            sendDesc={desc2}
            sendPic={pic2}
          ></ModelDisplayBlock>
        </Element>
        <Element>
          <ModelDisplayBlock
            sendTitle={title3}
            sendDesc={desc3}
            sendPic={pic3}
          ></ModelDisplayBlock>
        </Element>
      </Element>
    );
  }
}

export default TDModelsBody;
