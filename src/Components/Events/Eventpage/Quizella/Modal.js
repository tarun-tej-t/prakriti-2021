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
                fontSize:'3rem'
              }}
            >
              Quizella{" "}
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
                  lineHeight: "1.2",
                  fontFamily: "Raleway,sans-serif",
                }}
              >
                It is said “Knowledge is Power” which proves itself time and
                again. To test the knowledge of the students in general
                awareness of the world around us and technical questions from
                the field of agriculture, we bring to you the Agro-tech quiz
                named, named “Quizella”. It would provide a platform to the best
                minds of India in the field of Agricultural and Food Engineering
                to test their excellence amongst others and find out their
                stand. Having a wide variety of questions from direct ones to
                audio-visual, this event will surely keep all you participants
                in full charge of your senses.
              </h5>
              <span>
                <h3>Rules</h3>
                <h4 style={{ textAlign: "left" }}>
                  The online quiz will be conducted in two phases. Participants
                  can appear for any one or both of them :
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
                    I) <span style={{ fontWeight: "700" }}>
                      GENERAL QUIZ :
                    </span>{" "}
                    This online quiz tests the knowledge of the students in
                    general awareness of the world around us and technical
                    questions from our everyday life.
                  </li>

                  <li>
                    {" "}
                    1)The date of the quiz is 19th March,2021 (Friday).
                  </li>

                  <li> 2)Total Prize Money: INR 4000.</li>
                  <br />
                  <li>
                    {" "}
                    II){" "}
                    <span style={{ fontWeight: "700" }}>
                      AGRO-FOOD QUIZ :
                    </span>{" "}
                    This online quiz tests the knowledge of the students in the
                    field of Agricultural and Food Engineering which includes a
                    wide variety of questions providing you an efficient
                    platform to showcase your expertise in your respective
                    field..
                  </li>

                  <li> 1)The date of the quiz is 20th March,2021 (Saturday).</li>

                  <li> 2)Total Prize Money: INR 4000.</li>
                  <br />
                  <li>
                    {" "}
                    <span style={{ fontWeight: "700" }}>
                      General instructions for both the quizzes :
                    </span>
                  </li>

                  <li>
                    {" "}
                    1) Participants who have registered online would be able to
                    participate.
                  </li>

                  <li> 2) This is an Individual Event.</li>

                  <li>
                    3) There is no Negative marking. The answer once submitted,
                    could not be changed.
                  </li>

                  <li>
                    4) Only 1 attempt is allowed per quiz day. Do not refresh
                    the page once the quiz has started.
                  </li>

                  <li>
                    5) Time taken to answer a question will also taken into
                    account while judging the responses and will be used as a
                    tie-breaker between the participants.
                  </li>
                  <li>
                    6) The decision of judges is final and binding. Team
                    Prakriti reserves the rights to disqualify any one in case
                    of violation of any of the above rules.
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
