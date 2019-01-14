import React, {Component} from 'react';
import {loginUser, registerUser} from './loginfunc.js';

class Login extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.textBtns = {
      signup: {
        text: "already a user?",
        button: "Log in!",
      },
      login: {
        text: "Not a user yet?",
        button: "Sign up!",
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      signup: false,
      username: '',
      password: '',
      email: '',
      confirm: '',
    };
  }


  render() {
    const {signup, email, password, username, confirm} = this.state;
    return(
      <div>
        <h1 style={{margin:0}}>Sign in</h1>
        <p>Please fill the form below.</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">User name:</label><br/>
          <input id="username" type="text" name="username" required
                 value={username} onChange={this.handleChange}/><br/>
          <label htmlFor="passwrd">Password:</label><br/>
          <input id="passwrd" type="password" name="password" required
                 value={password} onChange={this.handleChange}/><br/>

          {signup
           ?<div>
            <label htmlFor="confirmpwd">Confirm Password:</label><br/>
              <input id="confirmpwd" type="password" value={confirm}
                     name="confirm" required  onChange={this.handleChange}/>
              <br/>
            <label htmlFor="emailfield">Email:</label><br/>
              <input id="emailfield" type="text" name="email" required
                     value={email} onChange={this.handleChange}/><br/>
          </div>
           :""}
          <br/><input type="submit" value="Submit"/><br/><br/>
        </form>

        <div>
          <p>{this.textBtns[signup?"signup":"login"].text}</p>
          <button onClick={this.handleClick}>
            {this.textBtns[signup?"signup":"login"].button}
          </button></div>
      </div>
    );
  }

  handleClick() {
    this.setState({
      signup: !this.state.signup,
    });
  }

  handleSubmit(e) {
    const {signup, email, username, password, confirm} = this.state;
    e.preventDefault();

    if (signup) {
      if (password===confirm) {
        if (password.length > 8) {
          registerUser({
            username: username,
            password: password,
            email: email,
          });
        } else {
          alert("password should be at least 9 characters long");
        }
      } else {
        alert("the passwords do not match");
      }
    } else {
      loginUser({
        username: username,
        password: password,
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
}

export default Login;
