import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ""};
  }

  handleChange = (e) => {
    let t = e.target
    this.setState({[t.name]: t.value})
  }


  charsRemaining = () => {
    return <p>{this.props.maxChars - this.state.message.length} chars remaining</p>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        {this.charsRemaining()}
      </div>
    );
  }
}

export default TwitterMessage;
