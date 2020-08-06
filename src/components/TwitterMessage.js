import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  clickHandler = (event) =>  {
    this.setState({
      message: event.target.value
    })
    console.log(this.state.message.length)
  }

  render() {
    let chars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message"
        onChange={this.clickHandler}
        value={this.state.message}/>
        <p>You have {chars} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
