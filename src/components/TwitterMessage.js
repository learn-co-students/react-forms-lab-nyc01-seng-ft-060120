import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
      counter: 280
    };
  }

  // remainingChars=()=>{
  //   let remaining = (this.props.maxChars - this.state.tweet.length);
  //   return remaining
  // }
  

  handleInputChange=(event)=>{
    this.setState({tweet: event.target.value});
    let remaining = (this.props.maxChars - this.state.tweet.length);
    this.setState({counter: remaining})
  }



  render() {
    return (
        <div>
        <strong>Your message:</strong>
        <input onChange={event=>this.handleInputChange(event)} value={this.state.tweet} type="text" name="message" id="message" />
        {this.state.counter}</div>
    );
  }
}

export default TwitterMessage;
