import React, { Component } from "react";

export default class Sponsorcard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
           
          <div style={{padding:'30px'}}>
            <div class="hovereffect" style={{ width: "320px", height: "200px" }}>
              <img
                class="img-responsive"
                alt="Eggoz"
                src={this.props.simage}
                style={{ width: "320px", height: "200px",objectFit:"contain" }}
              />
              <div class="overlay">
                <h2>{this.props.stitle}</h2>
                <a href={this.props.slink} target="_blank" rel="noreferrer" class="info">
                  Know more
                </a>
              </div>
            </div>
          </div>
        
        <br/>
      </div>
    );
  }
}
