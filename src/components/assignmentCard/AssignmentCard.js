import React, { Component } from "react";
import "./AssignmentCard.scss";

class AssignmentCard extends Component {
  state = {};
  render() {
    return (
      <div id="assignment-card col-12">
        <div
          className="card col-12 shadow-sm"
          style={{ width: "auto", border: "none" }}
        >
          <div
            className="card-header card-title text-justify my-auto"
            style={{
              borderBottom: "0.1em solid red",
              fontSize: "1em",
              fontWeight: "700",
              color: "#454344",
            }}
          >
            Assignment Name
          </div>
          <div class="card-body col-12 card-text text-muted text-left">
            <div className="" style={{ fontSize: "0.8em" }}>
              <div className="row">
                <div className="col-6">
                  {" "}
                  <b>Posted On:</b>
                </div>
                <div className="col-6 text-right">15/6/2020</div>
              </div>
              <div className="row">
                <div className="col-6">
                  {" "}
                  <b>Submission Status:</b>
                </div>
                <div className="col-6 text-right">Not submitted</div>
              </div>
              <div className="row">
                <div className="col-6">
                  {" "}
                  <b>Weightage:</b>
                </div>
                <div className="col-6 text-right">25</div>
              </div>
              <div className="row">
                <div className="col-6">
                  {" "}
                  <b>Posted On:</b>
                </div>
                <div className="col-6 text-right">23/6/2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignmentCard;
