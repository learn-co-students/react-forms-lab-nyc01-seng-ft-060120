import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

    usernameChangeHandler = (e) => {
      this.setState({username: e.target.value})
    }

    passwordChangeHandler = (e) => {
      this.setState({password: e.target.value})
    }

    submitHandler = (e) => {
      e.preventDefault()
      if (this.state.username && this.state.password){
       this.props.handleLogin(e) 
     }else{
      null
     }
      
    }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} onChange={this.usernameChangeHandler} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value= {this.state.password} onChange={this.passwordChangeHandler} />
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
