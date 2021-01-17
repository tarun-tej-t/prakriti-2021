import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import '../public_html/reg/css/style.css'

export default class Registration extends Component {
  render() {
    return (
      <div>
        <Navbar nRegistration="active" />

        
        <div class="main">
          <div class="content">
            <section class="signup">
              {/*<img src="images/signup-bg.jpg" alt=""> */}
              <div class="container">
                <div class="signup-content">
                  <ul class="list" style={{ textAlign: "center" }}>
                    <li>
                      <i class="icon-check-1"></i>
                      <h5>
                        {" "}
                        It is recommended to all the participants to go through
                        this document before proceeding for the registration
                        process.
                      </h5>
                    </li>
                  </ul>
                  <ul class="list" style={{ textAlign: "center" }}>
                    <li>
                      <i class="icon-check-1" />
                      <h5>
                        {" "}
                        <strong>
                          <a
                            href="documents/Registration Guide Manual.pdf"
                            target="_blank"
                          >
                            {" "}
                            Registration Guide Manual.pdf (must read)
                          </a>
                        </strong>
                      </h5>
                    </li>
                  </ul>
                  <br />
                  <br />
                  <form id="signup-form" name="signup-form" class="signup-form">
                    <h2 class="form-title">
                      <a
                        href="https://erp.iitkgp.ac.in/CEP/secure/courses.htm"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Click here to register for Prakriti 2020
                      </a>
                    </h2>
                  </form>
                  <strong>Note</strong> : Participants are requested to :
                  <br />
                  <br />
                  1. Keep a soft copy of the Application and the Payment slip
                  generated from the registration portal.
                  <br />
                  2. Remember the registration ID.
                  <br /> It will be required for verification of the participant
                  before appearing for any of the online events.
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
