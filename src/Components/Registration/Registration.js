import React, { Component } from "react";
import Navbar from "../Navbar/Navbar2";
import '../public_html/reg/css/style.css'
import rfb from '../public_html/img/rfb.jpg'
import pdf from '../public_html/documents/Registration Guide Manual.pdf'
const imagess=[
  rfb
]
export default class Registration extends Component {
  render() {
    return (
      <div style={{
        background: `url('${rfb}') no-repeat center center`,
      }}>
       
      <div style={{paddingTop:'20vh',paddingBottom:'20vh'}}>
       

        <div class="main" >
          <div class="content" >
            <section class="signup" >
          
              <div style={{display: "flex", justifyContent: "center"}}  > 
                <div class="signup-content" style={{width:'70vw'}} >
                  <ul class="list" style={{ textAlign: "center",}}>
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
                            href= {pdf}
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
                        style={{fontSize:'0.8em'}}
                      >
                        CLICK HERE TO REGISTER FOR PRAKRITI 2021
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
      </div></div>
    );
  }
}
