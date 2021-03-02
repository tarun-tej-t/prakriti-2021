import React, { Component } from "react";

export default class Eventcard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="column text-center">    
          <div class="services-contents">
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <a
                      class="services-icon"
                      href={this.props.elink}
                      data-toggle="modal"
                    >{this.props.eicon}
                     
                    </a>
                    <div>
                      {" "}
                      <a
                        class="services-icon"
                        href={this.props.elink}
                        data-toggle="modal"
                      >
                        <h3>{this.props.etitle}</h3>{" "}
                      </a>{" "}
                    </div>
                    <p>{this.props.edescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}
