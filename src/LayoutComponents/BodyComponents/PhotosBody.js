import React from "react";
import Scroll from "react-scroll";
import Carousel from "better-react-carousel";

import PhotoDisplayBlock from "../../Components/PhotoDisplayBlock";

import pic0 from "../../ArtAssets/artAssets/ExamplePhotos/example0.jpg";
import pic1 from "../../ArtAssets/artAssets/ExamplePhotos/example1.jpg";
import pic2 from "../../ArtAssets/artAssets/ExamplePhotos/example2.jpg";
import pic3 from "../../ArtAssets/artAssets/ExamplePhotos/example3.jpg";
import pic4 from "../../ArtAssets/artAssets/ExamplePhotos/example4.jpg";
import pic5 from "../../ArtAssets/artAssets/ExamplePhotos/example5.jpg";
import pic6 from "../../ArtAssets/artAssets/ExamplePhotos/example6.jpg";
import pic7 from "../../ArtAssets/artAssets/ExamplePhotos/example7.jpg";
import pic8 from "../../ArtAssets/artAssets/ExamplePhotos/example8.jpg";
import pic9 from "../../ArtAssets/artAssets/ExamplePhotos/example9.jpg";
import pic10 from "../../ArtAssets/artAssets/ExamplePhotos/example10.jpg";
import pic11 from "../../ArtAssets/artAssets/ExamplePhotos/example11.jpg";

// This page will be used to display Hobby Photoshop projects that can be downloaded and used as wallpapers.

let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

let picArray = [
  pic0,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
];
let picName = "Example ";
let picNameArray = [];

for (let i = 0; i < picArray.length; i++) {
  picNameArray.push(picName + i);
}

class PhotosBody extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      path0: pic0,
      path1: pic1,
      path2: pic2,
      path3: pic3,
      path4: pic4,
      path5: pic5,
      path6: pic6,
      path7: pic7,
      path8: pic8,
      path9: pic9,
      path10: pic10,
      path11: pic11,
      name0: picNameArray[0],
      name1: picNameArray[1],
      name2: picNameArray[2],
      name3: picNameArray[3],
      name4: picNameArray[4],
      name5: picNameArray[5],
      name6: picNameArray[6],
      name7: picNameArray[7],
      name8: picNameArray[8],
      name9: picNameArray[9],
      name10: picNameArray[10],
      name11: picNameArray[11],
    };
  }

  //Scrolling Methods
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
      path0,
      path1,
      path2,
      path3,
      path4,
      path5,
      path6,
      path7,
      path8,
      path9,
      path10,
      path11,
      name0,
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      name7,
      name8,
      name9,
      name10,
      name11,
    } = this.state;

    return (
      <Element // Main Container Element. Defines the borders on the scrolling.
        name="PhotoBodyClassContainerElement"
        className="element"
        id="PhotoBodyClass-containerElement"
      >
        <h1>These are placeholder photos. More will be made later.</h1>

        <Element id="PhotoBodyCarouselContainerScrollElement">
          <Carousel
            id="PhotoBodyCarouselContainer"
            cols={1}
            rows={1}
            gap={10}
            autoplay={5000}
            mobileBreakpoint={500}
            loop
          >
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path0}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path1}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path2}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path3}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path4}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path5}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path6}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path7}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path8}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path9}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path10}></img>
            </Carousel.Item>
            <Carousel.Item className="PhotoBodyCarouselItem">
              <img className="PhotoBodyCarouselPicture" src={path11}></img>
            </Carousel.Item>
          </Carousel>
        </Element>
        <Element className="ScrollElementDiv">
          <ul className="PhotoUL">
            <li className="PhotoLI">
              <PhotoDisplayBlock
                pathToChild0={path0}
                pathToChild1={path1}
                nameToChild0={name0}
                nameToChild1={name1}
              ></PhotoDisplayBlock>
            </li>
          </ul>
        </Element>
        <Element className="ScrollElementDiv">
          <ul className="PhotoUL">
            <li className="PhotoLI">
              <PhotoDisplayBlock
                pathToChild0={path2}
                pathToChild1={path3}
                nameToChild0={name2}
                nameToChild1={name3}
              ></PhotoDisplayBlock>
            </li>
          </ul>
        </Element>
        <Element className="ScrollElementDiv">
          <ul className="PhotoUL">
            <li className="PhotoLI">
              <PhotoDisplayBlock
                pathToChild0={path4}
                pathToChild1={path5}
                nameToChild0={name4}
                nameToChild1={name5}
              ></PhotoDisplayBlock>
            </li>
          </ul>
        </Element>
        <Element className="ScrollElementDiv">
          <ul className="PhotoUL">
            <li className="PhotoLI">
              <PhotoDisplayBlock
                pathToChild0={path6}
                pathToChild1={path7}
                nameToChild0={name6}
                nameToChild1={name7}
              ></PhotoDisplayBlock>
            </li>
          </ul>
        </Element>
        <Element className="ScrollElementDiv">
          <ul className="PhotoUL">
            <li className="PhotoLI">
              <PhotoDisplayBlock
                pathToChild0={path8}
                pathToChild1={path9}
                nameToChild0={name8}
                nameToChild1={name9}
              ></PhotoDisplayBlock>
            </li>
          </ul>
        </Element>
        <Element className="ScrollElementDiv">
          <ul className="PhotoUL">
            <li className="PhotoLI">
              <PhotoDisplayBlock
                pathToChild0={path10}
                pathToChild1={path11}
                nameToChild0={name10}
                nameToChild1={name11}
              ></PhotoDisplayBlock>
            </li>
          </ul>
        </Element>
      </Element>
    );
  }
}

export default PhotosBody;
