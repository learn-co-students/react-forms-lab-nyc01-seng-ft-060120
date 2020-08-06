import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: ""
    };

  }

  clickHandler = (e) => {
    console.log(e.target)
    this.setState({
      [e.target.name] : e.target.value
    }, () => console.log(this.state))
  }

  submitForm = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input onChange={this.clickHandler} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.clickHandler} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
