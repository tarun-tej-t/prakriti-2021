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
                fontSize:'3rem'
              }}
            >
              Agrivation{" "}
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
                Agrivation is an Agri-Innovation competition that encourages business minded people to build viable food and agriculture-based enterprises which may have the potential to upgrade the existing agriculture scenarios, create employment and improve the incomes of people engaged directly and indirectly in agro-based activities.
              </h5>
              <span>
               
                <h4 style={{ textAlign: "left",fontSize: "15px",lineHeight: "1.7", }}>
                Here are certain examples around which business ideas can be pitched – <br/>
1.Transform food production, sale, and service so that nutritious food is accessible to every person globally on a daily basis 
<br/>2.Reinvent agricultural practices for long-term sustainability and planet health.
<br/>3.Shift consumption away from animal-based meats
<br/>4.Transform agricultural practices, reducing the use of chemical fertilizers and other agricultural inputs that damage aquatic ecosystems.
<br/><br/>Participants are also allowed to choose any other aspects related to agriculture and pitch their business idea around that topic. It is not necessary that the ideas should be based on the above topics only.
<br/><br/>This is a golden chance to bring forward the innovator in you and “be the change” you wish to see in the lives of millions of people whose lives depend on agro-based activities.


                </h4>
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
                    1)Only teams whose members have registered online would be able to participate.
                  </li>

                  <li> 2)Teams must consist anywhere between 1 – 4 members.</li>
           
                  <li>
                    {" "}
                   3) Students from different colleges can form a single team.

                  </li>

                  <li> 4)Registered teams must submit their business idea/business model with detailed abstract (in word or PDF form) or presentation to contact@prkrt.co.in with the subject of the mail as “Prakriti2021_Agrivation_Submission _Team Name” before the given deadline.
</li>

                  <li> 5)Teams also have to submit a video-abstract, of not more than 5 minutes, explaining their business model or presentation before the deadline.
.</li>
                
                  <li>
                    {" "}
                  6)On the basis of video-abstract,teams will be selected for the second round(Question and Answer round) which will be conducted preferably live through Google Hangouts on the day of the event.
                  </li>

                  <li>
                    {" "}
                    7) NOTE:-In the video-abstract the voice of the presenting member must be clear.Teams whose Business ideas do not relate to Agriculture and teams whose video abstract exceeds 5 mins can lead to the imposition of penalties.

                  </li>

                  <li> 8) If any plagiarised content is found it can lead to the imposition of penalties on the teams.
</li>

                  <li>
                    9) The submission abstract must contain the team name, team members name, contact number, email address and college they belong to.

                  </li>

                  <li>
                    10) The decision of judges is final and binding. Team Prakriti reserves the right to disqualify any team in case of violation of any of the above rules.
                  </li>

                  <li>
                    11)Total Prize money - INR 10,000 .
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
