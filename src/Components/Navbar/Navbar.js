import React, { Component } from "react";
import logoprakriti from "../public_html/img/final1.jpg";
import { Link } from "react-router-dom";
import {Link as Lin} from 'react-scroll'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        {" "}
        <div
          id="sticker"
          class="header-area"
          style={{ backgroundColor: "#0D0D0D", position: "fixed" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-12"></div>
              <nav class="navbar navbar-default">
                {/* Brand and toggle get grouped for better mobile display  */}
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#myNavbar"
                  >
                    <span
                      class="icon-bar"
                      style={{ backgroundColor: "#222020" }}
                    ></span>
                    <span
                      class="icon-bar"
                      style={{ backgroundColor: "#222020" }}
                    ></span>
                    <span
                      class="icon-bar"
                      style={{ backgroundColor: "#222020" }}
                    ></span>
                  </button>
                  {/* Brand  */}
                  <a
                    class="navbar-brand page-scroll sticky-logo"
                    href="index.html"
                  >
                    <img
                      id="logo_img"
                      src={logoprakriti}
                      alt="The Project"
                      style={{
                        height: " 40px",
                        width: "200px",
                        paddingLeft: "15px",
                      }}
                    />
                  </a>
                </div>
                {/* Collect the nav links, forms, and other content for toggling  */}
                <div
                  class="collapse navbar-collapse main-menu bs-example-navbar-collapse-1"
                  id="myNavbar"
                >
                  <ul class="nav navbar-nav navbar-right">
                    <li class={this.props.nHome}>
                      <a >
                        {" "}
                        <Link to="/"  onClick={() => {
                            window.scroll({
                              left: 0,
                              top: 0,
                              behavior: "smooth",
                            });
                          }}>Home</Link>
                      </a>
                    </li>
                    <li class={this.props.nAbout}>
                      <a>
                        {" "}
                        
                       <Lin  to="about" spy={true} smooth={true}><Link to="/" >About</Link></Lin>
                   
                       
                      </a>
                    </li>
                    <li class={this.props.nEvents}>
                      <a>
                        {" "}
                   
                         <Lin  to="events" spy={true} smooth={true}><Link to="/" >Events</Link></Lin>
                       
                      </a>
                    </li>

                    <li class={this.props.nTeam}>
                      <a>
                        <Link to="/Team" onClick={() => {
                            window.scroll({
                              left: 0,
                              top: 0,
                              behavior: "smooth",
                            });
                          }}>Team</Link>
                      </a>
                    </li>
                    <li class={this.props.nSponsors}>
                      <a>
                        <Link to="/Sponsors" onClick={() => {
                            window.scroll({
                              left: 0,
                              top: 0,
                              behavior: "smooth",
                            });
                          }}>Sponsors</Link>
                      </a>
                    </li>

                    <li class={this.props.nRegistration}>
                      <a>
                        <Link to="/Registration" onClick={() => {
                            window.scroll({
                              left: 0,
                              top: 0,
                              behavior: "smooth",
                            });
                          }}>Registration</Link>
                      </a>
                    </li>
                  </ul>
                </div>
                {/*</div> navbar-collapse */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
