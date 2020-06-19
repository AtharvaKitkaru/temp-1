import React, { Component } from "react";
import "./AssignmentList.scss";
import Notifications from "../notifications/Notifications";
import AssignmentCard from "../assignmentCard/AssignmentCard";
import $ from "jquery";

class AssignmentList extends Component {
  componentWillUnmount() {
    $("#header").css({ display: "" });
  }
  render() {
    return (
      <div
        id="assignment-list"
        className="noselect d-flex flex-column-reverse flex-lg-row col-lg-11 text-center mx-auto"
      >
        <div className="col-12 col-lg-8">
          <div
            className="shadow rounded p-1 mt-2 mb-4"
            style={{ background: "rgb(183, 32, 46)", color: "white" }}
          >
            <i className="fa fa-list fa-fw mr-1" />
            Assignments
          </div>
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
        <div id="notifications-container" className="col-12 col-lg-4">
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
            <Notifications />
            <Notifications />
            <Notifications />
            <Notifications />
            <Notifications />
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default AssignmentList;
