import React, { Component } from "react";
import "./AssignmentCard.scss";
import { Link } from "react-router-dom";

class AssignmentCard extends Component {
  render() {
    return (
      <div id="assignment-card" className="col-md-6 col-12 p-3">
        <Link to="/assignment/:id">
          <div className="card shadow-sm" style={{ width: "", border: "none" }}>
            <div
              className="card-header text-select card-title text-justify my-auto"
              style={{
                borderBottom: "0.1em solid rgb(183, 32, 46)",
                fontSize: "1em",
                fontWeight: "700",
                color: "#454344",
              }}
            >
              Assignment Name
            </div>
            <div className="card-body col-12 card-text text-muted text-left">
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
        </Link>
      </div>
    );
  }
}

export default AssignmentCard;
