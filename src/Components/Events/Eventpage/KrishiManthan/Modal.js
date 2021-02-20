import React, { Component } from "react";
import pdf from '../../../public_html/documents/Registration Guide Manual.pdf'
import "./modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <React.Fragment>
        {this.props.show && (
          <div
          className="modal1"
          style={{ overflowY: "scroll", backgroundColor: "rgb(0,0,0,0.3)" }}
        >
          <h1
            style={{
              backgroundColor: "#09AFDF",
              borderRadius: "9px",
              marginLeft: "5%",
              marginTop: "-0vh",
              position: "fixed",
              width: "90%",
              color: "white",
            }}
          >
                 Krishi-Manthan{" "}
                  <span
                    onClick={this.props.onHide}
                    style={{
                      cursor: "pointer",
                      textAlign: "right",
                      float: "right",
                    }}
                  >
                    {" "}
                    &ensp;x&ensp;
                  </span>
                </h1>
                <div id="container2">
<h2>Event Description</h2><hr/>
                <h5 style={{fontSize:'15px',fontWeight:'700',color:'#333',lineHeight:'1.2',fontFamily:'Raleway,sans-serif'}}>
                Prakriti presents to you, a new event named “Krishi-Manthan”, where the participant needs to ponder upon a particular challenge faced by the farmers. Participants need to place themselves in the situation of farmers and provide the most feasible solution based on all the relevant data which will be provided by us regarding the resources and the budget constraints. Fit in the shoes of a real farmer and tackle their problem just like you manage your pocket money.
                </h5>
                <h4>Problem Statement : Will be updated soon <a href="/" target="_blank" style={{color:'blue'}}></a></h4>
                <span>
                  <h3>Rules</h3>
                  <h4 style={{textAlign:'left'}}>The online quiz will be conducted in two phases. Participants can appear for any one or both of them :</h4>
                  
                  <ul style={{listStyle:'none',lineHeight:'30px',fontSize:'16px'}}>
                   <li>1) Only those teams are allowed to participate who have registered online.</li>
                    <li>
                      {" "}
                      2) A maximum of five members are allowed in a team and a minimum of 3.
                    </li>

                    <li>
                      {" "}
                      3) Teams must mail their detailed abstract(in word or PDF form) or presentation to contact@prkrt.co.in with the subject of the mail as “Prakriti2021_Krishi-Manthan_Submission_abstractSubmission_team name” before the deadline ().
                    </li>

                    <li>
                      {" "}
                      4) Teams also have to submit a video-abstract, of not more than 5 minutes, explaining their abstract or presentation before the deadline().
                    </li>

                    <li>
                      {" "}
                      5) NOTE:-In the video-abstract the voice of the presenting member must be clear.                    </li>

                    <li>
                      {" "}
                      6) On the basis of video-abstract,teams will be selected for the second round(Question and Answer round) which will be conducted preferably live through Google Hangouts on the day of the event.                    </li>
                   
                    <li>
                      {" "}
                   
                      7) The submission abstract or presentation must contain the team name, team members name, contact number,mail address and college they belong to.                    </li>

                    <li>
                      {" "}
                      8) Exceeding the time limit can lead to the imposition of penalties on the teams.                    </li>

                    <li>
                      {" "}
                      9) The decision of judges is final and binding. Team Prakriti reserves the right to disqualify any team in case of violation of any of the above rules.
                    </li>

                    <li>
                    10) Total Prize Money:- INR 8000.             
                           </li>

                  </ul>
                  
                </span>
                <button onClick={this.props.onHide}>Close</button>
                <br />
                <br />
                <br />
                <br />
              </div>
              </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
