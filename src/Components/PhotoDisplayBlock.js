import React from "react";

// Displays each "Block" for the PhotosBody. js file. 
// A block represents a Row on the page. Contains a picture, download button and title. Each row has two items.

class PhotoDisplayBlock extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      path0: this.props.pathToChild0,
      path1: this.props.pathToChild1,
      name0: this.props.nameToChild0,
      name1: this.props.nameToChild1
    }
  }

  render() {

    const {path0, path1, name0, name1} = this.state;

    const buttonValue = "DOWNLOAD"; // Will be expanded later to allow for downloading different Image Sizes.

    return (
      <div className="DisplayBlockMainContainer">
        <div className="DisplayBlockChildContainer">
          <h1 className="DisplayBlockTitle">{name0}</h1>
          <img className="DisplayBlockImage" src={path0}></img>
          <button className="DisplayBlockButton">{buttonValue}</button>
        </div>
        <div className="DisplayBlockChildContainer">
          <h1 className="DisplayBlockTitle">{name1}</h1>
          <img className="DisplayBlockImage" src={path1}></img>
          <button className="DisplayBlockButton">{buttonValue}</button>
        </div>
      </div>
    );
  }
}

export default PhotoDisplayBlock;
