import React, { Component } from "react";
import logoprakriti from "../public_html/img/final1.jpg";
import { Link } from "react-router-dom";

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
                      <a>
                        {" "}
                        <Link to="/">Home</Link>
                      </a>
                    </li>
                    <li class={this.props.nAbout}>
                      <a>
                        {" "}
                        <Link
                          
                          onClick={() => {
                            window.scroll({
                              left: 0,
                              top: 1100,
                              behavior: "smooth",
                            });
                          }}
                          to="/home"
                        >
                          About
                        </Link>
                      </a>
                    </li>
                    <li class={this.props.nEvents}>
                      <a>
                        {" "}
                        <Link
                          to="/home"
                          onClick={() => {
                            window.scroll({
                              left: 0,
                              top: 2050,
                              behavior: "smooth",
                            });
                          }}
                        >
                          Events
                        </Link>
                      </a>
                    </li>

                    <li class={this.props.nTeam}>
                      <a>
                        <Link to="/Team">Team</Link>
                      </a>
                    </li>
                    <li class={this.props.nSponsors}>
                      <a>
                        <Link to="/Sponsors">Sponsors</Link>
                      </a>
                    </li>

                    <li class={this.props.nRegistration}>
                      <a>
                        <Link to="/Registration">Registration</Link>
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
