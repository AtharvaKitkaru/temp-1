import React, { Component } from "react";
import "./Profile.scss";
import { Modal } from "react-bootstrap";
import $ from "jquery";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      enableForm: false,
    };
  }
  handleShow = () => this.setState({ show: true });
  handleHide = () => this.setState({ show: false });
  updateAvatar = (e) => {
    e.preventDefault();
    this.setState({ enableForm: false });
    alert("updated profile picture");
  };
  enableUpdateButton = () => {
    if (document.getElementById("new-profile-picture").files.length !== 0) {
      $("#update-button").removeClass("d-none");
    }
  };
  render() {
    return (
      <div id="profile">
        <Modal
          backdrop
          centered
          show={this.state.show}
          onHide={this.handleHide}
          className="noselect"
        >
          <Modal.Header closeButton>
            <Modal.Title className="col-11 text-center">
              <label htmlFor="new-profile-picture">
                <img
                  src="/assets/images/user.jpeg"
                  alt="UserAvatar"
                  className="rounded-circle"
                  width={100}
                  height={100}
                  style={{ cursor: "pointer" }}
                  data-toggle="tooltip"
                  title="Click to update profile picture"
                  onClick={() => this.setState({ enableForm: true })}
                />
              </label>
              {this.state.enableForm && (
                <form onSubmit={this.updateAvatar}>
                  <input
                    className="d-none"
                    type="file"
                    name="new-profile-picture"
                    id="new-profile-picture"
                    onChange={this.enableUpdateButton}
                  />
                  <button
                    id="update-button"
                    className="d-none btn"
                    style={{
                      backgroundColor: "rgb(183, 32, 46)",
                      color: "white",
                      boxShadow: "none",
                    }}
                    type="submit"
                  >
                    Update Profile Picture
                  </button>
                </form>
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p
              className="text-center offset-0 col-12 shadow p-1 rounded"
              style={{
                backgroundColor: "rgb(183, 32, 46)",
                color: "white",
              }}
            >
              <i className="fa fa-user fa-fw mr-2" />
              Student Details
            </p>
            <div className="col-12">
              <p className="row overflow-auto">
                <b className="col-6">Name:</b>
                <div className="col-6 text-select"> Student User</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Semester:</b>
                <div className="col-6 text-select"> 7</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Roll number:</b>
                <div className="col-6 text-select"> 18140xx</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Email id :</b>
                <div className="col-6 text-select"> sample@somaiya.edu</div>
              </p>
            </div>
            <p
              className="text-center col-12 offset-0 shadow p-1 rounded"
              style={{
                backgroundColor: "rgb(183, 32, 46)",
                color: "white",
              }}
            >
              <i className="fa fa-group fa-fw mr-2" />
              Group Details
            </p>

            <div className="col-12">
              <p className="row overflow-auto">
                <b className="col-6">Group no:</b>
                <div className="col-6 text-select"> 3</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Project:</b>
                <div className="col-6 text-select"> Project name here</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Department:</b>
                <div className="col-6 text-select"> Department name here</div>
              </p>
              <p className="row overflow-auto">
                <b className="col-6">Guide:</b>
                <div className="col-6 text-select"> Guide name here</div>
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Profile;
