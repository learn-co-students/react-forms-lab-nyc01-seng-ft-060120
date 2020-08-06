import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      character: ""
    };
  }
  
  changeHandler = (e) =>{
    this.setState({character: e.target.value })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.character.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.character} onChange= {this.changeHandler}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
