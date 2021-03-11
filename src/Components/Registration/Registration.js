import React, { Component } from "react";
import Navbar from "../Navbar/Navbar2";
import '../public_html/reg/css/style.css'

import pdf from '../public_html/documents/Registration Guide Manual.pdf'

export default class Registration extends Component {
  render() {
    return (
      <div style={{
        background: `url('https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/rfb.jpg') center`,
        backgroundSize:'cover',minWidth:'100vw',minHeight:'100vh'
      }}>
       
      <div style={{paddingTop:'30vh',paddingBottom:'20vh'}}>
       

        <div class="main" >
          <div class="content" >
            <section class="signup" >
          
              <div style={{display: "flex", justifyContent: "center"}}  > 
                <div class="signup-content" style={{width:'70vw'}} >
                 {/*} <ul class="list" style={{ textAlign: "center",}}>
                    <li>
                      <i class="icon-check-1"></i>
                      
                    </li>
                  </ul>
                  <ul class="list" style={{ textAlign: "center" }}>
                    <li>
                      <i class="icon-check-1" />
                      <h5>
                        {" "}
                        <strong>
                         
                        </strong>
                      </h5>
                    </li>
    </ul>*/}
                  <form id="signup-form" name="signup-form" class="signup-form">
                    <h2 class="form-title">
                      <a
                        href="https://www.meraevents.com/event/prakriti-iit-kharagpur"
                        rel="noreferrer"
                        target="_blank"
                        style={{fontSize:'0.8em',color:"red",fontWeight:'700',fontFamily:':Lato'}}
                        
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
      </div>
      </div>
    );
  }
}
