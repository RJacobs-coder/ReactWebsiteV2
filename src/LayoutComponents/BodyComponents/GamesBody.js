import React from "react";
import Scroll from "react-scroll";
import Carousel from "better-react-carousel";
import GameDisplayBlock from "../../Components/GameDisplayBlock";

import game0 from "../../GameComponents/ExampleGame1";
import game1 from "../../GameComponents/ExampleGame2";
import game2 from "../../GameComponents/ExampleGame3";
import game3 from "../../GameComponents/ExampleGame4";

import pic0 from "../../ArtAssets/artAssets/ExamplePhotos/example0.jpg";
import pic1 from "../../ArtAssets/artAssets/ExamplePhotos/example1.jpg";
import pic2 from "../../ArtAssets/artAssets/ExamplePhotos/example2.jpg";
import pic3 from "../../ArtAssets/artAssets/ExamplePhotos/example3.jpg";

import textCollect from "../../TextAssets/gameTitles.json";

//Current does not work. Intention was to have a Scrolling Element to display the different
//Game options inside a Carousel. The Carousel would activate when a game is chosen.

// Variables for Scrolling functionality.
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

const gameArray = [game0, game1, game2, game3];
const gameValues = ["game0", "game1", "game2", "game3"];

let gameCurrent;
let currentGameValue;

const picArray = [pic0, pic1, pic2, pic3];

const blockTitle = textCollect.map((items) => (
  <a className="gameText" id={items.id + "gameText"}>
    {items.title}
  </a>
));

const blockDescription = textCollect.map((items) => (
  <a className="gameText" id={items.id + "gameText"}>
    {items.description}
  </a>
));

class GamesBody extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      gameSelected: gameCurrent,
      gameValue: currentGameValue,

      displayGameTitle0: blockTitle[0],
      displayGameTitle1: blockTitle[1],
      displayGameTitle2: blockTitle[2],
      displayGameTitle3: blockTitle[3],

      displayGameDesc0: blockDescription[0],
      displayGameDesc1: blockDescription[1],
      displayGameDesc2: blockDescription[2],
      displayGameDesc3: blockDescription[3],

      displayGamePic0: picArray[0],
      displayGamePic1: picArray[1],
      displayGamePic2: picArray[2],
      displayGamePic3: picArray[3],
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
      gameSelected,
      gameValue,
      displayGameTitle0,
      displayGameTitle1,
      displayGameTitle2,
      displayGameTitle3,
      displayGameDesc0,
      displayGameDesc1,
      displayGameDesc2,
      displayGameDesc3,
      displayGamePic0,
      displayGamePic1,
      displayGamePic2,
      displayGamePic3,
    } = this.state;

    const label = "GameBody";

    return (
      <div className={label + "MainContainer"}>
        <h1>
          This is where all the Games will go. This is just a placeholder.
        </h1>
        <Carousel
          id="PhotoBodyCarouselContainer"
          cols={1}
          rows={1}
          gap={10}
          loop
        >
          <Carousel.Item>
            <Element // Main Container Element. Defines the borders on the scrolling.
              name="GameBodyClassContainerElement"
              className="element"
              id="GameBodyClass-containerElement"
            >
              <Element>
                <ul className={label + "UL"}>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle0}
                      sendgamedesc={displayGameDesc0}
                      sendgamepic={displayGamePic0}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle1}
                      sendgamedesc={displayGameDesc1}
                      sendgamepic={displayGamePic1}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle2}
                      sendgamedesc={displayGameDesc2}
                      sendgamepic={displayGamePic2}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle3}
                      sendgamedesc={displayGameDesc3}
                      sendgamepic={displayGamePic3}
                    ></GameDisplayBlock>
                  </li>
                </ul>
              </Element>
              <Element>
                <ul className={label + "UL"}>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle0}
                      sendgamedesc={displayGameDesc0}
                      sendgamepic={displayGamePic0}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle1}
                      sendgamedesc={displayGameDesc1}
                      sendgamepic={displayGamePic1}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle2}
                      sendgamedesc={displayGameDesc2}
                      sendgamepic={displayGamePic2}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle3}
                      sendgamedesc={displayGameDesc3}
                      sendgamepic={displayGamePic3}
                    ></GameDisplayBlock>
                  </li>
                </ul>
              </Element>
              <Element>
                <ul className={label + "UL"}>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle0}
                      sendgamedesc={displayGameDesc0}
                      sendgamepic={displayGamePic0}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle1}
                      sendgamedesc={displayGameDesc1}
                      sendgamepic={displayGamePic1}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle2}
                      sendgamedesc={displayGameDesc2}
                      sendgamepic={displayGamePic2}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle3}
                      sendgamedesc={displayGameDesc3}
                      sendgamepic={displayGamePic3}
                    ></GameDisplayBlock>
                  </li>
                </ul>
              </Element>
              <Element>
                <ul className={label + "UL"}>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle0}
                      sendgamedesc={displayGameDesc0}
                      sendgamepic={displayGamePic0}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle1}
                      sendgamedesc={displayGameDesc1}
                      sendgamepic={displayGamePic1}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle2}
                      sendgamedesc={displayGameDesc2}
                      sendgamepic={displayGamePic2}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle3}
                      sendgamedesc={displayGameDesc3}
                      sendgamepic={displayGamePic3}
                    ></GameDisplayBlock>
                  </li>
                </ul>
              </Element>
              <Element>
                <ul className={label + "UL"}>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle0}
                      sendgamedesc={displayGameDesc0}
                      sendgamepic={displayGamePic0}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle1}
                      sendgamedesc={displayGameDesc1}
                      sendgamepic={displayGamePic1}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle2}
                      sendgamedesc={displayGameDesc2}
                      sendgamepic={displayGamePic2}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle3}
                      sendgamedesc={displayGameDesc3}
                      sendgamepic={displayGamePic3}
                    ></GameDisplayBlock>
                  </li>
                </ul>
              </Element>
              <Element>
                <ul className={label + "UL"}>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle0}
                      sendgamedesc={displayGameDesc0}
                      sendgamepic={displayGamePic0}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle1}
                      sendgamedesc={displayGameDesc1}
                      sendgamepic={displayGamePic1}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle2}
                      sendgamedesc={displayGameDesc2}
                      sendgamepic={displayGamePic2}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle3}
                      sendgamedesc={displayGameDesc3}
                      sendgamepic={displayGamePic3}
                    ></GameDisplayBlock>
                  </li>
                </ul>
              </Element>
              <Element>
                <ul className={label + "UL"}>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle0}
                      sendgamedesc={displayGameDesc0}
                      sendgamepic={displayGamePic0}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle1}
                      sendgamedesc={displayGameDesc1}
                      sendgamepic={displayGamePic1}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle2}
                      sendgamedesc={displayGameDesc2}
                      sendgamepic={displayGamePic2}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle3}
                      sendgamedesc={displayGameDesc3}
                      sendgamepic={displayGamePic3}
                    ></GameDisplayBlock>
                  </li>
                </ul>
              </Element>
              <Element>
                <ul className={label + "UL"}>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle0}
                      sendgamedesc={displayGameDesc0}
                      sendgamepic={displayGamePic0}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle1}
                      sendgamedesc={displayGameDesc1}
                      sendgamepic={displayGamePic1}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle2}
                      sendgamedesc={displayGameDesc2}
                      sendgamepic={displayGamePic2}
                    ></GameDisplayBlock>
                  </li>
                  <li className={label + "LI"}>
                    <GameDisplayBlock
                      sendgametitle={displayGameTitle3}
                      sendgamedesc={displayGameDesc3}
                      sendgamepic={displayGamePic3}
                    ></GameDisplayBlock>
                  </li>
                </ul>
              </Element>
            </Element>{" "}
            {/*Container Element End Tag*/}
          </Carousel.Item>
          <Carousel.Item>
            <h1>This is where the games will go!</h1>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default GamesBody;
