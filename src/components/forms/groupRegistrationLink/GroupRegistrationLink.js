import React, { Component } from "react";
import "./GroupRegistrationLink.scss";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button } from "reactstrap";

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
      //<div>
      //<div style={{ margin: "2em" }} />
      <div className="container shadow">
        <div id="group-registration-link">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            <p>
              <u>Group Registration</u>
            </p>
            {/*<div style={{}} />*/}
          </div>
          <Form
            onSubmit={this.handleSubmit}
            className="group-registration mx-auto my-md-1 mt-1 col-12"
          >
            <div className="row">
              <FormGroup className="col-md-4 col-12">
                <Label for="nameGL">
                  Group Leader Name<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="text"
                  id="nameGL"
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="rollNumGL">
                  Group Leader Roll Number
                  <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="number"
                  name="number"
                  id="rollNumGL"
                  placeholder="Enter you roll number"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="emailIgGL">
                  Group Leader Email<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="emailIdGl"
                  placeholder="Enter your email"
                />
              </FormGroup>
            </div>
            <hr />
            <div className="row">
              <FormGroup className="col-md-4 col-12">
                <Label for="nameMem2">
                  Member 2 Name<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="text"
                  id="nameMem2"
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="rollNumMem2">
                  Member 2 Roll Number<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="number"
                  name="number"
                  id="rollNumMem2"
                  placeholder="Enter you roll number"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="emailIdMem2">
                  Member 2 Email<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="emailIdMem2"
                  placeholder="Enter your email"
                />
              </FormGroup>
            </div>
            <hr />
            <div className="row">
              <FormGroup className="col-md-4 col-12">
                <Label for="nameMem3">Member 3 Name</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="text"
                  id="nameMem3"
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="rollNumMem3">Member 3 Roll Number</Label>
                <Input
                  onChange={this.handleChange}
                  type="number"
                  name="number"
                  id="rollNumMem3"
                  placeholder="Enter you roll number"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="emailIdMem3">Member 3 Email</Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="emailIdMem3"
                  placeholder="Enter your email"
                />
              </FormGroup>
            </div>
            <hr />
            <div className="row">
              <FormGroup className="col-md-4 col-12">
                <Label for="nameMem4">Member 4 Name</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="text"
                  id="nameMem4"
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="rollNumMem4">Member 4 Roll Number</Label>
                <Input
                  onChange={this.handleChange}
                  type="number"
                  name="number"
                  id="rollNumMem4"
                  placeholder="Enter you roll number"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="emailIdMem4">Member 4 Email</Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="emailIdMem4"
                  placeholder="Enter your email"
                />
              </FormGroup>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                className="btn"
                style={{
                  backgroundColor: "rgb(183, 32, 46)",
                  color: "white",
                  outline: "none",
                  boxShadow: "none",
                }}
                type="submit"
              >
                Save and Proceed to Project Registration
              </Button>
            </div>
          </Form>
        </div>
      </div>
      //</div>
    );
  }
}
export default GroupRegistrationLink;
