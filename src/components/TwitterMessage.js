import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remainingCharacters: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value, 
      remainingCharacters: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)}/>
        <h3>Remaining Characters: {this.state.remainingCharacters}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
