import React from "react";

// Creates each "block" to display the different 3D models to be displayed on the website.

class ModelDisplayBlock extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
        title: this.props.sendTitle,
        desc: this.props.sendDesc,
        pic: this.props.sendPic
     
    }
  }

  render() {

    const {title, desc, pic} = this.state;
    
    const label = "ModelDisplayBlock";
    
    return (
    <div className={label + "MainContainer"}>
        <ul id={label + "UL"}>
        <li className={label + "ImageLI"}><img className={label + "Image"} src={pic}></img></li>
        <li className={label + "ButtonLI"}><button className={label + "Button"}>PLAY</button></li>
        
        <li  className={label + "InfoLI"}><div className={label + "TextContainer"}>
            <h1 className={label + "Title"}>{title}</h1>
            <p className={label + "Description"}> {desc}</p>
            
        </div></li>
        </ul>
    </div>
    );
  }
}

export default ModelDisplayBlock;
