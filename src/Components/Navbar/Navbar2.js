import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logoprakriti from "../public_html/img/final1.jpg";
import { Link } from "react-router-dom";
import { Link as Lin } from "react-scroll";

export default class Navbar2 extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        onSelect
        expand="lg"
        fixed="top"
        variant="dark"
        style={{ position: "fixed", backgroundColor: "black" }}
      >
        &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
        &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
        <Navbar.Brand href="#home">
          <img
            src={logoprakriti}
           
            alt="Prakriti-2021"
            width="155"
           
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          stlye={{ color: "white", backgroundColor: "white" }}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          stlye={{ color: "white", backgroundColor: "white" }}
        >
          <Nav>
            
          </Nav>
          <Nav style={{ paddingLeft: "20vw" }}>
          <Nav.Link style={{ paddingRight: "2vw" }}>
              <Link
                to="/home"
                onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                style={{ color: "white" }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link style={{ paddingRight: "2vw" }}>
              <Lin to="about" spy={true} smooth={true}>
                <Link to="/" style={{ color: "white" }}>
                  About
                </Link>
              </Lin>
            </Nav.Link>

            <Nav.Link style={{ paddingRight: "2vw" }}>
              {" "}
              <Lin to="events" spy={true} smooth={true}>
                <Link to="/" style={{ color: "white" }}>
                  Events
                </Link>
              </Lin>
            </Nav.Link>
            <Nav.Link style={{ paddingRight: "2vw" }}>
              <Link
                to="/Team"
                onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                style={{ color: "white" }}
              >
                Team
              </Link>
            </Nav.Link>
            <Nav.Link style={{ paddingRight: "2vw" }}>
              <Link
                onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to="/Sponsors"
                style={{ color: "white" }}
              >
                Sponsors
              </Link>
            </Nav.Link>
            <Nav.Link style={{ paddingRight: "2vw" }}>
              <Link
                onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to="/Registration"
                style={{ color: "white" }}
              >
                Registration
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
