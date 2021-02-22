import React, { Component } from "react";
import pdf from "../../../public_html/documents/Registration Guide Manual.pdf";
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
            backgroundColor: "red",
             borderRadius: "9px",
             marginLeft: "5%",
             marginTop: "-0vh",
             position: "fixed",
             width: "90%",
             color: "white",
           }}
                >
                  DATA ANALYTICS{" "}
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
                <br />
                <h2>Event Description</h2>
                <hr />
                <h5
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#333",
                    lineHeight: "1.2",
                    fontFamily: "Raleway,sans-serif",
                  }}
                >
                  In the agriculture sector, farmers and agribusiness have to
                  make innumerable decisions every day and intricate
                  complexities involve the various factors influencing them. An
                  essential issue for agricultural planning intention is the
                  accurate yield estimation and estimation of nutrients
                  concentration for the numerous crops involved in the planning
                  or making decisions like which crop to plant before the next
                  harvest. In making these decisions past information is very
                  crucial. Data analysis is based on analyzing past information
                  to predict future conditions in order to make more informed
                  decisions and plan accordingly.{" "}
                </h5>
                <h4>
                  Problem Statement : Will be updated soon{" "}
                  <a href={pdf} target="_blank" style={{ color: "blue" }}></a>
                </h4>
                <span>
                  <h3>Rules</h3>
                  <h4 style={{ textAlign: "left" }}>
                    The online quiz will be conducted in two phases.
                    Participants can appear for any one or both of them :
                  </h4>

                  <ul
                    style={{
                      listStyle: "none",
                      lineHeight: "30px",
                      fontSize: "16px",
                    }}
                  >
                    <li>
                      {" "}
                      1) Only teams whose members have registered online would
                      be able to participate as teams.{" "}
                    </li>

                    <li>
                      {" "}
                      2) Each team can contain a maximum of four(4)
                      participants.{" "}
                    </li>

                    <li>
                      {" "}
                      3) All Teams must submit the following files to
                      contact@prkrt.co.in before the deadline :-{" "}
                    </li>

                    <li> 4) Code: In any language</li>
                    <li>
                      {" "}
                      5) Detailed presentation and appendix( word/PDF document)
                      containing the technical explanation in short.{" "}
                    </li>
                    <li>
                      {" "}
                      6) The submissions must be in a folder named
                      “prakriti2021_DataAnalytics_Abstract_TeamName”.
                    </li>
                    <li>
                      {" "}
                      7) All the reports and presentations submitted by the team
                      must contain the team name, team members name, their
                      contact number and the name of the college they belong to.
                    </li>
                    <li>
                      {" "}
                      8) On the basis of RMSE,teams will be selected for the second round(Question and Answer round) which will be conducted preferably live through Google Hangouts on the day of the event.
                    </li>
                    <li>
                      {" "}
                      9) The whole analysis of the problem statement should be done by the participants themselves. Plagiarism will lead to cancellation of participation.                    </li>
                    <li>10) The decision of judges is final and binding. Team Prakriti reserves the right to disqualify any team in case of violation of any of the above rules.</li>
                    <li>11) Total Prize Money:- INR 8000.</li>
                  </ul>
                </span>
                <button onClick={this.props.onHide}>Close</button>
                <br />
                <br />
                <br />
                <br />
              </div>
            
          
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
