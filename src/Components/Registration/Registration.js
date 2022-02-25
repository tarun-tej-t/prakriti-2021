import React, { Component } from "react";
import Navbar from "../Navbar/Navbar2";
import '../public_html/reg/css/style.css'

import pdf from '../public_html/documents/Registration Guide Manual.pdf'

export default class Registration extends Component {
  render() {
    return (
      <div style={{
        background: `url("https://cdn.wallpapersafari.com/72/67/JgXNDG.gif")  no-repeat fixed center top / cover`,
        backgroundSize:'cover',minWidth:'100vw',minHeight:'100vh'
      }}>
       
      <div style={{paddingTop:'30vh',paddingBottom:'20vh',backgroundColor:'rgb(175, 248, 242,0.75)',minWidth:'100vw',minHeight:'100vh'}}>
       

        <div class="main" >
          <div class="content" >
            <section class="signup" >
          
              <div style={{display: "flex", justifyContent: "center"}}  > 
                <div class="signup-content" style={{textAlign: "justify",
                      textJustify: "inter-word",fontFamily:'Montserrat',width:'70vw', fontWeight:'500'}} >
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
                  <form id="signup-form" name="signup-form" class="signup-form" style={{ textAlign: "justify",
                      textJustify: "inter-word",fontFamily:'Montserrat'}}>
                    <h2 class="form-title">
                      <a
                        href="#"
                        rel="noreferrer"
                        // target="_blank"
                        style={{fontSize:'0.8em',color:"red",fontWeight:'700',fontFamily:'Montserrat'}}
                        
                      >
                        Registrations will be opened soon!!
                        {/* CLICK HERE TO REGISTER FOR PRAKRITI 2021 */}
                      </a>
                    </h2>
                  </form>
                  {/* <strong>Note</strong> : Participants are requested to :
                  <br />
                  <br />
                  <p style={{textAlign: "justify",
                      textJustify: "inter-word",fontFamily:'Montserrat'}}>
                  1. Keep a soft copy of the Application and the Payment slip
                  generated from the registration portal.
                  <br /><br />
                  2. Remember the registration ID.
                  <br /> It will be required for verification of the participant
                  before appearing for any of the online events.</p> */}
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
