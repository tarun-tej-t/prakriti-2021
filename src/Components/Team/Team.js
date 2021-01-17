import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Jayeeta from "../public_html/img/Jayeeta Ma'am.png"
import Machavaram from "../public_html/img/Rajendra Machavaram sir.jpg"
import Hod from "../public_html/img/hod.jpg"
export default class Team extends Component {
  render() {
    return (
      <div>
             <Navbar nTeam="active" />
        <div id="team" class="our-team-area area-padding">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="section-headline text-center">
                  <h2>Professors</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="team-top">
                <div class="col-sm-offset-4 col-sm-4 col-sm-offset-4 col-xs-offset-3 col-xs-6 col-xs-offset-3">
                  <div class="single-team-member">
                    <div class="team-img">
                      <img
                        src={Hod}
                        alt=""
                        style={{ height: "350px", width: "380px" }}
                      />
                    </div>
                    <div class="team-content text-center">
                      <h5>Nirupama Mallick</h5>
                      <p>Head Of Department</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>
              <div class="row">
                <div class="team-top">
                  <div class="col-md-3 col-sm-offset-3 col-sm-3 col-sm-offset-3 col-xs-6">
                    <div class="single-team-member">
                      <div class="team-img">
                        <img
                          src={Jayeeta}
                          alt=""
                          style={{ height: "270px", width: "262px" }}
                        />
                      </div>
                      <div class="team-content text-center">
                        <h4>Jayeeta Mitra</h4>
                        <p>Chairperson</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3 col-xs-6">
                    <div class="single-team-member">
                      <div class="team-img">
                        <img
                          src={Machavaram}
                          alt=""
                          style={{ height: "270px", width: "262px" }}
                        />
                      </div>
                      <div class="team-content text-center">
                        <h4>Rajendra Machavaram</h4>
                        <p>Co-Chairperson</p>
                      </div>
                    </div>
                  </div>
                  {/* End column */}
                </div>
              </div>
            
          </div>
        </div>
      </div>
    );
  }
}
