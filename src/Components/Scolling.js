import React from "react";
import Scroll from "react-scroll";

// Reference material for the full example of the react-scroll code. Used on many components in the site.

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Scrolling extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
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
    return (
      <div>
        <div id="anchor" className="element">
          test 6 (anchor)
        </div>

        <Link
          activeClass="active"
          to="firstInsideContainer" // Reference to Elements Below
          spy={true}
          smooth={true}
          duration={250}
          containerId="containerElement"
          style={{ display: "inline-block", margin: "20px" }}
        >
          Go to first element inside container
        </Link>

        <Link
          activeClass="active"
          to="secondInsideContainer"  // Reference to Elements Below
          spy={true}
          smooth={true}
          duration={250}
          containerId="containerElement"
          style={{ display: "inline-block", margin: "20px" }}
        >
          Go to second element inside container
        </Link>
        <Element // Main Container Element. Defines the borders on the scrolling.
          name="test7"
          className="element"
          id="containerElement"
          style={{
            position: "relative",
            height: "1000px",
            overflow: "scroll",
            marginBottom: "100px",
          }}
        >
          test 7 (duration and container)
          <Element // Child Elements. Can be used for LINK tag above.
            name="firstInsideContainer" // ID Used for Link above.
            style={{
              marginBottom: "200px",
            }}
          >
            first element inside container
          </Element>
          <Element
            name="secondInsideContainer" // ID Used for Link above.
            style={{
              marginBottom: "200px",
            }}
          >
            second element inside container
          </Element>
        </Element>
      </div>
    );
  }
}

export default Scrolling;
