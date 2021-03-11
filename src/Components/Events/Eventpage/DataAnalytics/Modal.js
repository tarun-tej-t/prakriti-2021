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
                fontSize: "3rem",
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
            <div id="container2">
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
                In the agriculture sector, farmers and agribusiness have to make
                innumerable decisions every day and intricate complexities
                involve the various factors influencing them. An essential issue
                for agricultural planning intention is the accurate yield
                estimation and estimation of nutrients concentration for the
                numerous crops involved in the planning or making decisions like
                which crop to plant before the next harvest. In making these
                decisions past information is very crucial. Data analysis is
                based on analyzing past information to predict future conditions
                in order to make more informed decisions and plan accordingly.{" "}
              </h5>
              <h4>
                Problem Statement :
                <a
                  href="https://lnkd.in/g8_fhjF
"
                  target="_blank"
                  style={{ color: "red" }}
                >
                  Click Here
                </a>
              </h4>
              <h4>Deadline for the submissions is 17 March.</h4>
              <h4>
                To submit your abstracts with other necessary details{" "}
                <a
                  href="https://tinyurl.com/Prakriti21Submission"
                  target="_blank"
                  style={{ color: "red" }}
                >
                  Click here
                </a>
              </h4>
              <span>
                <h3>Rules</h3>

                <ul
                  style={{
                    listStyle: "none",
                    lineHeight: "30px",
                    fontSize: "16px",
                  }}
                >
                  <li>
                    {" "}
                    1) Only teams whose members have registered online would be
                    able to participate as teams.{" "}
                  </li>

                  <li>
                    {" "}
                    2) Each team can contain a maximum of four(4) participants.{" "}
                  </li>

                  <li>
                    {" "}
                    3) Students from different colleges can form a single team.
                  </li>
                  <li>
                    4) All Teams must submit the following files to
                    https://tinyurl.com/PrakritiSubmission before the deadline
                    (8th March,11:59 pm) from the beginning of the event.
                  </li>
                  <ul>
                    <li>Code: In any language</li>
                    <li>
                      Presentation and appendix( word/PDF document) containing
                      the technical explanation in short.
                    </li>
                  </ul>
                  <li>
                    {" "}
                    5) All the reports and presentations submitted by the team
                    must contain the team name, team members name, their contact
                    number, and the name of the college they belong to.
                  </li>
                  <li>
                    {" "}
                    6) On the basis of abstract ,teams will be selected for the
                    second round(Online Presentation and Question and Answer
                    round on 21st March) .
                  </li>
                  <li>
                    {" "}
                    7) The presentation time must not exceed 6 minutes followed
                    by the Q&A round of 2minutes, exceeding this may yield
                    negative points.
                  </li>
                  <li>
                    {" "}
                    8) The whole analysis of the problem statement should be
                    done by the participants themselves. Plagiarism will lead to
                    the cancellation of participation.
                  </li>
                  <li>
                    {" "}
                    9) The decision of judges is final and binding. Team
                    Prakriti reserves the right to disqualify any team in case
                    of violation of any of the above rules.
                  </li>
                  <li>10) Total Prize Money:- INR 8000.</li>
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
