import React, { Component } from "react";
import "./Footer.scss";
import $ from "jquery";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container noselect text-center">
          <span>
            <img
              src="/assets/images/somaiyaLogoShort.png"
              alt="KJSCE"
              width={26}
              className="mr-2 pb-1"
            />
            Project Portal
          </span>
        </div>
        <i
          className="fa fa-arrow-up"
          id="jump-to-top"
          data-toggle="tooltip"
          title="Jump to top"
          onClick={() => window.scrollTo(0, 0)}
        ></i>
      </div>
    );
  }
}

export default Footer;
