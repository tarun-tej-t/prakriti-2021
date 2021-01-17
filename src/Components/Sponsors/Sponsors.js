import React, { Component } from "react";
import Sponsorcard from "./Sponsorcard";
import Navbar from "../Navbar/Navbar";
import maharshiimage from "../public_html/img/mrice.jpg";
import "./Sponsors.css";

export default class Sponsors extends Component {
  render() {
    return (
      <div>
        <Navbar nSponsors="active" />
        <div id="team" class="our-team-area area-padding">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="section-headline text-center">
                  <h2>Sponsors 2019</h2>
                </div>
              </div>
            </div>

            <h4>Event Partners</h4>
            <Sponsorcard
              simage={maharshiimage}
              stitle="MAHARANI RICE"
              slink="http://www.maharanirice.in/"
            />
          </div>
        </div>
      </div>
    );
  }
}
