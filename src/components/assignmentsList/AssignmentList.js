import React, { Component } from "react";
import "./AssignmentList.scss";
import Notifications from "../notifications/Notifications";
import AssignmentCard from "../assignmentCard/AssignmentCard";
import $ from "jquery";
import { Route } from "react-router-dom";

class AssignmentList extends Component {
  componentWillUnmount() {
    $("#header").css({ display: "" });
  }
  checkData = () => {
    if ($("#notification-list").html().length === 0)
      // $.when($("#notifications-container").remove())
      $.when($("#notifications-container").removeClass("d-md-block"))
        .then($("#assignment-list > div").removeClass("col-lg-8"))
        .then(
          window.location.pathname === "/notifications"
            ? (window.location.href = "/assignments")
            : {}
        );
  };
  render() {
    return (
      <div
        id="assignment-list"
        className="noselect d-flex flex-column-reverse flex-lg-row col-lg-11 text-center mx-auto"
      >
        <Route path="/assignments">
          <div className="col-12 col-lg-8">
            <div
              className="shadow rounded p-1 mt-2 mb-4"
              style={{ background: "rgb(183, 32, 46)", color: "white" }}
            >
              <i className="fa fa-list fa-fw mr-1" />
              Assignments
            </div>
            <form action="/" className="row">
              <div className="input-group col-12 col-md-8 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Assignment"
                  id="search-assignment"
                />
                <div className="input-group-append">
                  <button
                    className="btn"
                    style={{
                      background: "rgb(183, 32, 46)",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </form>
            <div id="assignment-cards-container" className="row">
              <AssignmentCard />
              <AssignmentCard />
              <AssignmentCard />
              <AssignmentCard />
              <AssignmentCard />
              <AssignmentCard />
              <AssignmentCard />
              <AssignmentCard />
              <AssignmentCard />
              <AssignmentCard />
            </div>
          </div>
          <div
            id="notifications-container"
            className="d-md-block d-none col-12 col-lg-4 mb-4"
          >
            <div
              className="shadow rounded p-1 mt-2 mb-4"
              style={{ background: "rgb(183, 32, 46)", color: "white" }}
            >
              <i className="fa fa-bell fa-fw mr-1" />
              Notifications
            </div>
            <div
              id="notification-list"
              className="list-group list-group-flush shadow-sm p-1 rounded"
            >
              <Notifications checkData={this.checkData} notification="1" />
              <Notifications checkData={this.checkData} notification="2" />
              <Notifications checkData={this.checkData} notification="3" />
              <Notifications checkData={this.checkData} notification="4" />
              <Notifications checkData={this.checkData} notification="5" />
            </div>
          </div>
        </Route>
        <Route path="/notifications">
          <div id="notifications-container" className="col-12 mb-4">
            <div
              className="shadow rounded p-1 mt-2 mb-4"
              style={{ background: "rgb(183, 32, 46)", color: "white" }}
            >
              <i className="fa fa-bell fa-fw mr-1" />
              Notifications
            </div>
            <div
              id="notification-list"
              className="list-group list-group-flush shadow-sm p-1 rounded"
            >
              <Notifications checkData={this.checkData} notification="1" />
              <Notifications checkData={this.checkData} notification="2" />
              <Notifications checkData={this.checkData} notification="3" />
              <Notifications checkData={this.checkData} notification="4" />
              <Notifications checkData={this.checkData} notification="5" />
            </div>
          </div>
        </Route>
      </div>
    );
  }
}

export default AssignmentList;
