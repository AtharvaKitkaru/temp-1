import React, { Component } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import AssignmentList from "../assignmentsList/AssignmentList";
import AssignmentDetails from "../assignmentDetails/AssignmentDetails";
import Grades from "../grades/Grades";

class Container extends Component {
  render() {
    return (
      <div id="app-container">
        {document.addEventListener("contextmenu", (event) =>
          event.preventDefault()
        )}
        <Header />
        <div style={{ margin: "6em" }}></div>
        <Switch>
          <Route path="/assignments" component={AssignmentList} />
          <Route path="/assignment/:id" component={AssignmentDetails} />
          <Route path="/grades" component={Grades} />
          <Route path="/logout" render={() => alert("Signed out")} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Container;
