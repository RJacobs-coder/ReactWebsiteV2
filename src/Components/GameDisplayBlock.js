import React from "react";

// Currently does not work. Requires design.

class GameDisplayBlock extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
        title: this.props.sendgametitle,
        desc: this.props.sendgamedesc,
        pic: this.props.sendgamepic,
     
    }
  }

  render() {

    const {title, desc, pic} = this.state;
    
    const label = "GameDisplayBlock";
    
    return (
    <div className={label + "MainContainer"}>
      <li className={label+"LI"}><img className={label+"Image"} src={pic}></img></li>
      <li className={label+"LI"}><h1 className={label+"Title"}>{title}</h1></li>
      <li className={label+"LI"}><p className={label+"Description"}>{desc}</p></li>
      <li className={label+"LI"}><button className={label+"Button"}>Play</button></li>
    </div>
    );
  }
}

export default GameDisplayBlock;
