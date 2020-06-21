import React, { Component } from "react";
import "./AssignmentList.scss";
import Notifications from "../notifications/Notifications";
import AssignmentCard from "../assignmentCard/AssignmentCard";
import $ from "jquery";

class AssignmentList extends Component {
  componentWillUnmount() {
    $("#header").css({ display: "" });
  }
  checkData = () => {
    if ($("#notification-list").html().length === 0)
      $.when($("#notifications-container").remove()).then(
        $("#assignment-list > div").removeClass("col-lg-8")
      );
  };
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
      </div>
    );
  }
}

export default AssignmentList;
