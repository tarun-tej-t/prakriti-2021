import React, { Component } from "react";
import "./comingsoon.css";

export default class Comingsoon extends Component {
  render() {
    return (
      <div>
        <div class="containercs" style={{zIndex:"0",height:"100vh"}}>
          {/* <div class="header">
            <div class="clr"></div>
          </div> */}

          <div class="wdp-container">
            <div class="wdp-content">
              <div class="wdp-logo"></div>
              <h2 class="frame-1">Coming Soon!</h2>
                {/* <h2 class="frame-2">Soon!</h2>
            <h2 class="frame-3">web design POP</h2>
              <h2 class="frame-4">With a new look</h2> */}
              {/* <h2 class="frame-5">
                <span style={{ textTransform: "none" }}>webdesign</span>
                <span style={{ textTransform: "none", color: "#e2292f" }}>
                  POP.com
                </span>
              </h2> */}
              {/* <a
                class="wdp-circle-link"
                href="/home"
              >
                Home
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
