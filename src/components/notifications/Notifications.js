import React, { Component } from "react";
import "./Notifications.scss";
import $ from "jquery";

class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      visited: true,
    };
  }
  visit = () => {
    this.setState({ visited: false });
    $(`#notification-${this.props.notification} > i`)
      .removeClass("fa-flash")
      .addClass("fa-angellist");
  };
  componentDidMount() {
    const that = this;
    $(`#notification-${this.props.notification}`).on("click", () => {
      $(`#notification-${this.props.notification}`).slideUp(
        "fast",
        function () {
          $.when($(this).remove()).then(that.props.checkData());
        }
      );
    });
  }
  render() {
    return (
      <div
        id={"notification-" + this.props.notification}
        className="list-group-item text-justify"
        onClick={this.visit}
        data-toggle="tooltip"
        title="Click to mark done"
        style={{ cursor: "pointer" }}
      >
        <i className="fa fa-flash fa-fw mr-2"></i>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa hic
        quo sit maxime eveniet nulla repellat. Minima, aliquid provident, ad
        odit enim nobis, aut tenetur ipsum ipsam unde omnis?
      </div>
    );
  }
}

export default Notifications;
