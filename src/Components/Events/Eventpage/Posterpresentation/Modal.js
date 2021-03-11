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
                fontSize: "2.6rem",
              }}
            >
              Poster Presentation{" "}
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
                Poster design is an expression of thoughts and technical
                prowess. Your poster can be about anything you want but with one
                constraint: it must be inspired by the field of agriculture and
                food engineering. It might tell a story or explain and provide a
                visual impression of your thoughts - the only limit being your
                imagination! Come on, Showbiz your style, and put forth a
                message.
              </h5>
              <h4>PRAKRITI presents to you the Poster Presentation event, where participants need to design a poster that is both informative and eye-catching that can express ideas as well as messages in the most dazzling way possible ! </h4>
              <h4>Problem Statement: <a href="https://tinyurl.com/PrakritiPosterPresentation" target="_blank" style={{color:'red'}}>Click Here</a></h4>
              <h4>Deadline for the submissions is 17 March.</h4>
              <h4>To submit your abstracts with other necessary details please <a href="https://tinyurl.com/Prakriti21Submission" target="_blank" style={{color:'red'}}>Click Here</a></h4>
              
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
                    1) Only those teams are allowed to participate who have
                    registered online.
                  </li>

                  <li>
                    {" "}
                    2) A maximum of three members are allowed in a team and a
                    minimum of one.{" "}
                  </li>

                  <li>
                    3) Teams must submit their detailed description (in word or PDF form)  along with the poster to this <a href="https://tinyurl.com/PrakritiSubmission" target="_blank">google form link</a> before the deadline (17th March,11:59 pm).​

                  </li>

                  <li>
                    {" "}
                    4)The submission abstract must contain the entire description of the poster and the message that is being conveyed through the poster ​

                  </li>

                  <li>
                    {" "}
                    5) The submission abstract  must contain the team name, team members name, contact number, mail address and college they belong to. ​
                  </li>

                  <li>
                    6) On the basis of abstract ,teams will be selected for the second round(Online  Presentation and Question and Answer round on 21st March) .
                  </li>
                  <li>
                    7) The presentation time of each team must not exceed 6 minutes followed by 2 minutes of Q&A round.
                  </li>
                  <li>
                    8) Exceeding the time limit can lead to the imposition of penalties on the teams. ​

                  </li>
                  <li>
                    9) If any plagiarised content is found it can lead to the imposition of penalties on the teams.​

                  </li>

                  <li>
                    10) The decision of judges is final and binding. Team Prakriti reserves the right to disqualify any team in case of violation of any of the above rules.​

                  </li>
                  <li>11) Total Prize Money: INR 8,000.</li>
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
