import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.state.password=""
    this.state.username=""
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        if (this.state.username.length>0 && this.state.password.length>0) {
          this.props.handleLogin(this.state)
        }
        }
      }>
        <div>
          <label>
            Username
            <input onChange={e => this.changeHandler(e)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={e => this.changeHandler(e)} id="password" name="password" type="password" value={this.state.password} />
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
