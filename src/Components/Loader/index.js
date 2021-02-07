import React, { Component } from "react";

import "./index.css"

class index extends Component {
  render() {
    return (
      <div class="spinLoader">
        <div class="spinInner one"></div>
        <div class="spinInner two"></div>
        <div class="spinInner three"></div>
      </div>
    );
  }
}

export default index;
