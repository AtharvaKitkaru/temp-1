import React, { Component } from "react";
import "./AssignmentDetails.scss";
import CommentSection from "./CommentSection";
import DetailsSection from "./DetailsSection";
import TaskSection from "./TaskSection";

class AssignmentDetails extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 mx-auto">
            <TaskSection />
          </div>
          <div className="col-12 col-md-8 mx-auto">
            <DetailsSection />
          </div>
        </div>
        <div className="col-12 text-center">
          <CommentSection />
        </div>
      </div>
    );
  }
}

export default AssignmentDetails;
