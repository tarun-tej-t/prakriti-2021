import React, { Component } from "react";

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
              Mad-Ad{" "}
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
              <br />
              <hr />
              <h5
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#333",
                  lineHeight: "1.6",
                  fontFamily: "Raleway,sans-serif",
                }}
              >
                Advertise an agricultural product in a humorous way via
                eye-catching Ad multimedia expressing your dramatics & marketing
                skills.
              </h5>
              <h4>
                Problem Statement :{" "}
                <a
                  href="https://tinyurl.com/Prakriti21MadAd"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  Click Here
                </a>
              </h4>
              <h4>Deadline for the submissions is 18 March, 11:59pm.</h4>
              <h4>
                To submit your abstracts with other necessary details in the
                google form{" "}
                <a
                  href="https://tinyurl.com/Prakriti21Submission"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  Click Here
                </a>
              </h4>
              <span>
                <h3>Rules</h3>

                <ul
                  style={{
                    listStyle: "none",
                    lineHeight: "40px",
                    fontSize: "16px",
                  }}
                >
                  <li>
                    {" "}
                    1) Only teams whose members have registered online would be
                    able to participate as teams.
                  </li>

                  <li> 2) Maximum of 4 members can represent a team.</li>

                  <li>
                    3) Animated video (for e.g. cartoons) will not be allowed.
                  </li>

                  <li>
                    {" "}
                    4) Participants must submit the above mentioned files to
                    this google form link before the deadline (18th
                    March,11:59pm).
                  </li>

                  <li>
                    {" "}
                    5) The video shoot should be entirely original and
                    plagiarism will lead to disqualification.
                  </li>

                  <li>
                    6) Participants are free to include as many actors they want
                    in their play but merit will be given only to those whose
                    have registered as a team (maximum 4 members).
                  </li>
                  <li>
                    7) Video can be in Hindi/English language. Use of adult
                    content, cuss words, abusive language and hurting religious
                    sentiments are strictly prohibited and will lead to
                    immediate disqualification.
                  </li>
                  <li>
                    8) The decision of judges is final and binding. Team
                    Prakriti reserves the rights to disqualify any team in case
                    of violation of any of the above rules.
                  </li>

                  <li>9) Total Prize Money: INR 10,000.</li>
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
