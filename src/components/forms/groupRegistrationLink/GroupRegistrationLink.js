import React, { Component } from "react";
import "./GroupRegistrationLink.scss";
class GroupRegistrationLink extends Component {
  constructor() {
    super();
    this.state =
      JSON.parse(localStorage.getItem("groupRegistrationForm")) || {};
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("groupRegistrationForm", JSON.stringify(this.state));
  };
  render() {
    return (
      <div id="group-registration-link">
        <p>Group Registration Link</p>
      </div>
    );
  }
}
export default GroupRegistrationLink;
