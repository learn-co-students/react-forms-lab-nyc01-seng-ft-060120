import React from "react";

class TwitterMessage extends React.Component {

  state = {text: ""};

  changeHandler = (e) => {
    // if (e.target.value.length > this.props.maxChars){
    //   window.alert('Too long')
    // } else {
      this.setState({text: e.target.value});
    // }
  }

  render() {
    return (
      <div>
        <p>Remaining Chars Left: {this.props.maxChars - this.state.text.length}</p>
        <strong>Your message:</strong>
        <input onChange={this.changeHandler} type="text" name="message" id="message" value={this.state.text} />
      </div>
    );
  }
}

export default TwitterMessage;
