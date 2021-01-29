import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logoprakriti from "../public_html/img/logo copy.png";
import { Link } from "react-router-dom";
import { Link as Lin } from "react-scroll";

export default class Navbar2 extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        onSelect
        expand="md"
        fixed="top"
        variant="dark"
        style={{ position: "fixed", backgroundColor: "rgb(0,0,0,0)" }}
      >
     
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
          stlye={{ color: "red", backgroundColor: "white" }}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
       
        >
          <Nav>
            
          </Nav>
          <Nav style={{ paddingLeft: "20vw" }}>
          <Nav.Link >
              <Link
                to="/home"
                onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                style={{ color: "red" }}
              >
                Home
              </Link>
            </Nav.Link>&ensp;&ensp;&ensp;&ensp;&ensp;
            <Nav.Link >
              <Lin to="about" spy={true} smooth={true}>
                <Link to="/" style={{ color: "red" }}>
                  About
                </Link>
              </Lin>
            </Nav.Link>&ensp;&ensp;&ensp;&ensp;&ensp;

            <Nav.Link >
              {" "}
              <Lin to="events" spy={true} smooth={true}>
                <Link to="/" style={{ color: "red" }}>
                  Events
                </Link>
              </Lin>
            </Nav.Link>&ensp;&ensp;&ensp;&ensp;&ensp;
            <Nav.Link >
              <Link
                to="/Team"
                onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                style={{ color: "red" }}
              >
                Team
              </Link>
            </Nav.Link>&ensp;&ensp;&ensp;&ensp;&ensp;
            <Nav.Link >
              <Link
                onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to="/Sponsors"
                style={{ color: "red" }}
              >
                Sponsors
              </Link>
            </Nav.Link>&ensp;&ensp;&ensp;&ensp;&ensp;
            <Nav.Link >
              <Link
                onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to="/Registration"
                style={{ color: "red" }}
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
