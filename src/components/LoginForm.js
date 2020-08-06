import React from "react";


const initialState = {
  username: "",
  password: ""
};

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = initialState
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      // name is pointing to the ket of name in form.
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    // if (!this.state.username || !this.state.password) return
      // this.props.handleLogin(this.state)
      // this.setState(initialState)
    // the above code works and replaces all three ifs below
    if (!this.state.username){
      alert("You must enter a Username.")
    }
    if (!this.state.password){
      alert("You must enter your Password.")
    }if (this.state.username && this.state.password){
      this.props.handleLogin(this.state)
      this.setState(initialState)
    }
  }

  render() {
    // console.log(this.state)
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
              <input id="password" 
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form >
    );
  }
}

export default LoginForm;
