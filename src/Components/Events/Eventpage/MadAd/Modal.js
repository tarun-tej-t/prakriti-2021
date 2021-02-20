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
                backgroundColor: "#09AFDF",
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

                  <li>
                    {" "}
                    2) An advertisement video film (shoot) to be presented along with the banner of your product in JPEG format.

                  </li>

                  <li>
                  3) You can choose any of the topics from the list: 
                  <ul style={{paddingLeft:'4vw'}}>
                    <li>  a) Concept of E- Mandi</li>
                    <li>b) Any Agricultural Product (implements, tractor, seeds , etc.)</li>
     <li>c) Government Schemes on Agricultural Development and Advanced Irrigation Practices</li>
     <li>d) Less known Agronomic Products and Techniques</li>
     <li>e) Organic Food Products</li>
     <li>f) Food Processing Techniques & Products (dairy, fisheries, etc.)</li>


                  </ul>
                  </li>

                  <li>
                    {" "}
                    4) Video must not be more than 2.5 minutes of duration keeping in mind that it is an Ad.
                  </li>

                  <li>
                    {" "}
                    5) Animated video (for e.g. cartoons) will not be allowed.

                  </li>

                  <li>6) Maximum of 4 members can represent a team.
</li>
<li>7) Participants need to send their names,contact number,mail address and the college name at our mail address (contact@prkrt.co.in) while sending the following:- Video , Banner and a short write-up explaining their Ad, product and their marketing approach.</li>
<li>8) The video shoot should be entirely original and plagiarism will lead to disqualification.</li>
<li>9) Participants are free to choose any other idea and include as many actors they want in their play but merit will be given only to those whose contact details have been sent to our mail address mentioned above(4 members).</li>

<li>10) Video can be in Hindi/English language. Use of adult content, cuss words, abusive language and hurting religious sentiments are strictly prohibited and will lead to immediate disqualification.</li>
<li>11) The decision of judges is final and binding. Team Prakriti reserves the rights to disqualify any team in case of violation of any of the above rules.</li>
<li>12) Total Prize Money: INR 10,000.</li>

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
