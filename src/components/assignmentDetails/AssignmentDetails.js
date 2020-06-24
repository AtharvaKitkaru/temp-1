import React, { Component } from "react";
import "./AssignmentDetails.scss";
import CommentSection from "./CommentSection";
import DetailsSection from "./DetailsSection";
import TaskSection from "./TaskSection";

class AssignmentDetails extends Component {
  render() {
    return (
      <div id="assignment-details" className="container noselect">
        <div className="d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-4 mx-auto my-md-0 mt-4">
            <TaskSection />
          </div>
          <div className="col-12 col-md-8 mx-auto my-md-0 mt-1">
            <DetailsSection />
          </div>
        </div>
        <div className="col-12 my-4 my-md-2 text-center">
          <CommentSection />
        </div>
      </div>
    );
  }
}

export default AssignmentDetails;
