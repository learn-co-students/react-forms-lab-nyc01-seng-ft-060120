import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      //charsLeft: 280,
      //input: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  //charsLeft = (e) => {
  //  this.setState({
  //    charsLeft: --this.state.charsLeft,
  //    input: e.target.value
  //  })
  //};
  //<p>{this.state.charsLeft}</p>

  render() {
    let char = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={(e) => this.handleChange(e)}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
        />
          {char}
      </div>
    );
  }
}

export default TwitterMessage;
