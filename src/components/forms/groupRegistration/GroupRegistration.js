import React, { Component } from "react";
import { Modal, Form, FormGroup } from "react-bootstrap";
import "./GroupRegistration.scss";
import { Input, Label, Button } from "reactstrap";

class GroupRegistration extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleShow = () => this.setState({ show: true });
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "leader-roll-number") {
      if (e.target.value <= 1610000 || e.target.value >= 2010000) {
        console.error("Invalid roll number");
      }
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <Modal
        backdrop
        centered
        show={this.state.show}
        onHide={() => this.setState({ show: false })}
      >
        <Modal.Header closeButton className="">
          <div className="h4 col-11 text-center">Group Registration</div>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={this.handleSubmit}
            id="group-registration"
            className="col-10 mx-auto"
          >
            <FormGroup>
              <Label htmlFor="leader-roll-number">Leader Roll number</Label>
              <Input
                type="number"
                className="form-control"
                id="leader-roll-number"
                name="leader-roll-number"
                placeholder="Enter leader's roll number"
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="leader-name">Leader name</Label>
              <Input
                type="text"
                className="form-control"
                id="leader-name"
                name="leader-name"
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="leader-email">Leader email</Label>
              <Input
                type="email"
                className="form-control"
                id="leader-email"
                name="leader-email"
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <Button
              style={{
                backgroundColor: "rgb(183, 32, 46)",
                color: "white",
              }}
              className="btn shadow-sm"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default GroupRegistration;
