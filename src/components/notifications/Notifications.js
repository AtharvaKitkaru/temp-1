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
    this.setState({ visited: !this.state.visited });
    if (this.state.visited) {
      $(`#notification-${this.props.notification}`).css({
        textDecoration: "line-through",
      });
      $(`#notification-${this.props.notification} > i`)
        .removeClass("fa-flash")
        .addClass("fa-angellist");
    } else {
      $(`#notification-${this.props.notification}`).css({
        textDecoration: "",
      });
      $(`#notification-${this.props.notification} > i`)
        .removeClass("fa-angellist")
        .addClass("fa-flash");
    }
  };
  render() {
    return (
      <div
        id={"notification-" + this.props.notification}
        className="list-group-item text-justify"
        onClick={this.visit}
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
