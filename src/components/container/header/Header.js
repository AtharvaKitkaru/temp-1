import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import "./Header.scss";
import $ from "jquery";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }
  toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });
  render() {
    return (
      <div id="header" className="sticky-top bg-white shadow-sm noselect mb-4">
        <Navbar light className="col-lg-12 mx-auto">
          <NavbarBrand>
            <Link to="/">
              <img
                className="d-md-block d-none"
                src="assets/images/somaiyaLogoCropped.png"
                alt="Project Portal"
                width={140}
              />
              <img
                className="d-md-none"
                src="assets/images/somaiyaLogoShort.png"
                alt="Project Portal"
                width={60}
              />
            </Link>
          </NavbarBrand>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              style={{
                background: "none",
                border: "none",
                boxShadow: "none",
                cursor: "default",
              }}
            >
              <img
                src="assets/images/user.jpeg"
                className="rounded-circle"
                width={50}
                height={50}
                alt="UserAvatar"
                style={{ cursor: "pointer" }}
              />
            </DropdownToggle>
            <DropdownMenu right className="shadow-sm">
              <Link to="/assignments">
                <DropdownItem>
                  <i className="fa fa-fw mr-2 fa-book fa-sm" />
                  My assignments
                </DropdownItem>
              </Link>
              <Link to="/grades">
                <DropdownItem>
                  <i className="fa fa-fw mr-2 fa-mortar-board fa-sm" />
                  My grades
                </DropdownItem>
              </Link>
              <Link to="/group-registration">
                <DropdownItem>
                  <i className="fa fa-fw mr-2 fa-child fa-sm" />
                  Group Registration
                </DropdownItem>
              </Link>
              <button
                className="dropdown-item"
                onClick={() => alert("Clicked Profile Button")}
              >
                <i className="fa fa-fw mr-2 fa-user fa-sm" />
                Profile
              </button>
              <Link to="/logout">
                <DropdownItem>
                  <i className="fa fa-fw mr-2 fa-lock fa-sm" />
                  Log out
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </Navbar>
      </div>
    );
  }
}
export default Header;
