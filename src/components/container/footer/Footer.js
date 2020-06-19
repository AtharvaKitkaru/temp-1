import React, { Component } from "react";
import "./Footer.scss";

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
            Projects Portal
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
