import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./GroupRegistration.scss";

class GroupRegistration extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <Modal
        backdrop
        scrollable
        centered
        show={this.state.show}
        onHide={() => this.setState({ show: false })}
      >
        <Modal.Header closeButton className="">
          <div className="h4 col-11 text-center">Group Registration</div>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={this.handleSubmit}
            id="group-registration"
            className="col-10 mx-auto"
          >
            <div className="form-group">
              <label htmlFor="leader-roll-number">Leader Roll number</label>
              <input
                type="number"
                className="form-control"
                id="leader-roll-number"
                name="leader-roll-number"
                placeholder="Enter leader's roll number"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="leader-name">Leader name</label>
              <input
                type="text"
                className="form-control"
                id="leader-name"
                name="leader-name"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="leader-email">Leader email</label>
              <input
                type="email"
                className="form-control"
                id="leader-email"
                name="leader-email"
                onChange={this.handleChange}
                required
              />
            </div>
            <button
              style={{
                backgroundColor: "rgb(183, 32, 46)",
                color: "white",
              }}
              className="btn shadow-sm"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default GroupRegistration;
