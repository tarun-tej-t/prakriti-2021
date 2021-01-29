import React, { Component } from "react";

export default class Sponsorcard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
            <div style={{ width: "100vw", display: "flex", justifyContent: "center" }} >
        <div class="row">
          <div >
            <div class="hovereffect">
              <img
                class="img-responsive"
                alt="Maharani Rice"
                src={this.props.simage}
                style={{ width: "320px", height: "200px" }}
              />
              <div class="overlay">
                <h2>{this.props.stitle}</h2>
                <a href={this.props.slink} target="_blank" rel="noreferrer" class="info">
                  Know more
                </a>
              </div>
            </div>
          </div>
        </div>    </div>
        <br/>
      </div>
    );
  }
}
