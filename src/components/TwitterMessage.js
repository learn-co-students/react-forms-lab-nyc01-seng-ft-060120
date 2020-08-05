import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.state.message=""
  }

  updateCount = (e) => {
    this.setState({message: e.target.value})
  }
  
  remainingChars = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={ e => this.updateCount(e) } type="text" name="message" id="message" value={this.state.message} />
        <p>{this.remainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
