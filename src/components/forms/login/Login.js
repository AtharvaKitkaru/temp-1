import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import $ from "jquery";
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "student@somaiya.edu",
      password: "heyleu"
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({successfulSubmission:true});
  }
  componentDidMount() {
    $("#header").remove();
  }
  render() {
    if(this.state.successfulSubmission){
      return <Redirect to = '/group-registration' />
    }
    return (
      <div id="login-container">
        {" "}
        {/*className="container shadow"*/}
        <form onSubmit = {this.handleSubmit} className="form-signin noselect">
          <div className="row">
            <img
              className="mb-4 mx-auto"
              src="/assets/images/somaiyaLogoShort.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="username"
            name="username"
            className="form-control"
            placeholder="Email address"
            onChange={this.handleChange}
            value={this.state.username}
            autoComplete="off"
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
            autoComplete="off"
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            className="btn btn-lg btn-block"
            style={{
              backgroundColor: "rgb(183, 32, 46)",
              color: "white",
              outline: "none",
              boxShadow: "none"
            }}
            type="submit"
          >
            Sign in
          </button>
          <Link
            to="/forgot-password"
            style={{ textDecoration: "none", color: "rgb(183, 32, 46)" }}
          >
            <div className="my-4 text-center">Forgot your password?</div>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
