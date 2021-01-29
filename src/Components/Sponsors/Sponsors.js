import React, { Component } from "react";
import Sponsorcard from "./Sponsorcard";
import Navbar from "../Navbar/Navbar2";
import maharshiimage from "../public_html/img/mrice.jpg";
import sbg from "../public_html/img/sbg.jpg";
import "./Sponsors.css";

export default class Sponsors extends Component {
  render() {
    return (
      <div style={{
        background: `url('${sbg}') repeat center center`,
      }}>
           <marquee
       style={{
        zIndex: "10",
        position: "absolute",
        left: "5px",
        top: "70px",
        fontFamily: "sans-serif",
        backgroundColor: "#F0720D",
        marginRight: "20px",
        fontSize: "12pt",
        fontWeight: "bold",
        color: "#267355",
        height: "34px",
        width: "99vw",
        border: "black 3px SOLID",
        scrollamount: "9",
      }}
      >
        {" "}
        <strong></strong>&nbsp;&nbsp;&nbsp; The events are conducted in Online
        mode due to outbreak of the pandemic caused by (COVID-19) !!
        &nbsp;&nbsp;&nbsp; For any query, you can contact us on our
        contact@prkrt.co.in or Facebook page!
      </marquee>
        <div id="team" style={{paddingTop:'20vh'}} class="our-team-area area-padding">
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
            /><Sponsorcard
            simage={maharshiimage}
            stitle="MAHARANI RICE"
            slink="http://www.maharanirice.in/"
          /><Sponsorcard
          simage={maharshiimage}
          stitle="MAHARANI RICE"
          slink="http://www.maharanirice.in/"
        /><Sponsorcard
        simage={maharshiimage}
        stitle="MAHARANI RICE"
        slink="http://www.maharanirice.in/"
      /><Sponsorcard
      simage={maharshiimage}
      stitle="MAHARANI RICE"
      slink="http://www.maharanirice.in/"
    /><Sponsorcard
    simage={maharshiimage}
    stitle="MAHARANI RICE"
    slink="http://www.maharanirice.in/"
  /><Sponsorcard
  simage={maharshiimage}
  stitle="MAHARANI RICE"
  slink="http://www.maharanirice.in/"
/><Sponsorcard
              simage={maharshiimage}
              stitle="MAHARANI RICE"
              slink="http://www.maharanirice.in/"
            />
          </div>
        </div><br/><br/><br/>
      </div>
    );
  }
}
