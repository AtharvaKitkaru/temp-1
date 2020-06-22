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
import Profile from "../../profile/Profile";
import GroupRegistration from "../../forms/groupRegistration/GroupRegistration";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }
  profileModalRef = ({ handleShow }) => (this.showModalProfile = handleShow);
  groupRegistrationRef = ({ handleShow }) =>
    (this.showModalGroupRegistration = handleShow);
  componentDidMount() {
    let previousScrollPosition = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > $("#header").height() / 3) {
        if (currentScrollPosition < previousScrollPosition) {
          $("#header").slideDown();
          if ($(window).width() >= 992) {
            $("#assignment-list > #notifications-container").css({
              transform: "translateY(0em)",
            });
            $(
              "#assignment-list > #notifications-container > #notification-list"
            ).css({ height: "70vh" });
          }
        } else if (
          !$("#header").is(":hover") &&
          !$(".dropdown-menu").is(":hover")
        ) {
          $("#header").slideUp();
          $(".dropdown-menu").removeClass("show");
          if ($(window).width() >= 992) {
            $("#assignment-list > #notifications-container").css({
              transform: "translateY(-4em)",
            });
            $(
              "#assignment-list > #notifications-container > #notification-list"
            ).css({ height: "76vh" });
          }
        }
      }
      previousScrollPosition = currentScrollPosition;
    };
  }
  render() {
    return (
      <div id="header" className="bg-white shadow-sm noselect mb-4">
        <Profile ref={this.profileModalRef} />
        <GroupRegistration ref={this.groupRegistrationRef} />
        <Navbar light className="col-lg-12 mx-auto">
          <NavbarBrand href="/">
            <img
              className="d-md-block d-none"
              src="/assets/images/somaiyaLogoCropped.png"
              alt="Project Portal"
              width={140}
            />
            <img
              className="d-md-none"
              src="/assets/images/somaiyaLogoShort.png"
              alt="Project Portal"
              width={60}
            />
          </NavbarBrand>
          <Dropdown
            isOpen={this.state.dropdownOpen}
            toggle={() =>
              this.setState({ dropdownOpen: !this.state.dropdownOpen })
            }
          >
            {/* <DropdownToggle
              style={{
                background: "none",
                border: "none",
                boxShadow: "none",
                cursor: "default",
              }}
            > */}
            <img
              src="/assets/images/user.jpeg"
              className="rounded-circle dropdown-toggle"
              data-toggle="dropdown"
              width={50}
              height={50}
              alt="UserAvatar"
              style={{ cursor: "pointer" }}
            />
            {/* </DropdownToggle> */}
            <DropdownMenu right className="shadow-sm">
              <a className="d-md-none d-block" href="/notifications">
                <DropdownItem>
                  <i className="fa fa-fw mr-2 fa-bell fa-sm" />
                  Notifications
                </DropdownItem>
              </a>
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
                  Group Registration Link
                </DropdownItem>
              </Link>
              <Link to="/project-registration">
                <DropdownItem>
                  <i className="fa fa-fw mr-2 fa-clipboard fa-sm" />
                  Project Registration
                </DropdownItem>
              </Link>
              <button
                className="dropdown-item"
                onClick={() => this.showModalGroupRegistration()}
              >
                <i className="fa fa-fw mr-2 fa-child fa-sm" />
                Group Registration Modal
              </button>
              <button
                className="dropdown-item"
                onClick={() => this.showModalProfile()}
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
              <Link to="/login">
                <DropdownItem>
                  <i className="fa fa-fw mr-2 fa-key fa-sm" />
                  Log in
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
