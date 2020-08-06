import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tweet: "",
      chars: props.maxChars
    };
  }

  tweetValue = (e) =>{
    this.setState({ tweet: e.target.value}) 
  }

  remainingChars = () => {
    let rem = ((this.state.chars) - (this.state.tweet.length))
    return rem
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.tweetValue} type="text" name="message" id="message" value={this.state.tweet} />
        <h3>Characters remaining: {this.remainingChars()}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
