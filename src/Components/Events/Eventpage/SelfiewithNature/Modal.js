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
              SELFIE WITH NATURE{" "}
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
                Break out your smartphone and head out to take quiet walk with
                mother nature and take your selfie with nature.
                <br />
                <br />
                Here comes the first Pre-Event of PRAKRITI 2021 Selfie With
                Nature.
              </h5>
              <h4>To submit your entries,  <a href="https://forms.gle/sGwkJQFP8RzfJSq78" target="_blank" style={{color:'red'}}>Click here</a></h4>
              <span>
                <h3>Rules</h3>

                <ul
                  style={{
                    listStyle: "none",
                    lineHeight: "40px",
                    fontSize: "16px",
                  }}
                >
                  <li> 1) This is an Individual event</li>

                  <li>
                    {" "}
                    2) Please do send the photograph with your details by
                    filling  <a
              href="https://forms.gle/sGwkJQFP8RzfJSq78"
              target="_blank"
            >this Google Form.</a>
                  </li>

                  <li>
                    3) Only the entries sent through this Google form will be
                    accepted.
                  </li>

                  <li>
                    {" "}
                    4) Use of Photoshop or any other software will lead to
                    disqualification.
                  </li>

                  <li>
                    {" "}
                    5) Your entries will be uploaded on an Album named "Selfie
                    With Nature, Prakriti 2022" on the Facebook page of Prakriti
                    by the team.
                  </li>

                  <li>
                    6) Number of likes and shares received till 18th March would
                    only be considered. Higher weightage will be given to number
                    of shares.
                  </li>
                  <li>
                    7) Only those likes and shares would be counted who have already followed the facebook page of  <a
              href="https://www.facebook.com/prkrt.iitkgp"
              target="_blank"
            >PRAKRITI-IIT KHARAGPUR</a>
                  </li>
                  <li>
                    8) The number of shares which are done applying privacy over them or done in private groups will not be counted. 

                  </li>
                  <li>
                    9) Number of shares and likes of the post shared by our page will only be counted.

                  </li>
                  <li>
                    9) Prizes will be given to those participants who will be registering through our website of  Prakriti 2022 (Registrations will begin soon)  
                  </li>

                  <li>
                    10) The decision of judges is final and binding. Team Prakriti reserves the rights to disqualify any team in case of violation of any of the above rules or found doing illicit actions.

                  </li>
                  <li>
                    11) Total Prize Money: INR 5,000.
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
