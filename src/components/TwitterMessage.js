import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      name:""
    };
  }

  changeHandler = (e) =>{
    this.setState({name: e.target.value})
  }

  render() {
    let charNumber = this.props.maxChars - this.state.name.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.name} name="message" id="message" onChange={this.changeHandler}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
