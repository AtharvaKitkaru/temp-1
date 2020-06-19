import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Container from "./components/container/Container";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollTop />
        <Container />
      </div>
    </BrowserRouter>
  );
}

export default App;
