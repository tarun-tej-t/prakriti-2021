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
              Find the Devil{" "}
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
           </h5>
              <span>
               
                <h4 style={{ textAlign: "left",fontSize: "15px",lineHeight: "1.7", }}>
                Prakriti 2021 introduces an entirely new Online event: Find The Devil to make you more aware about hidden killers in your food,
We can’t imagine our lives without food. Whether a family dinner, or binging out with friends, food is a common thread that binds us all. But today, our food system is changing. Food companies are coming up with new products every day. Just visit your local Kirana shop after a week and you find completely new items on the shelves. These items come with attractive packages and innovative ad campaigns to grab your attention. Their branding is done in a way that compels you to spend your money on them. Some claim to be “Tasty and Healthy”, some promise “Weight loss”, while others use tags like “Fat free”, “Sugar Free”, “Gluten free”, etc.
<br/><br/>
But, a careful look at their ingredients would reveal a completely different story. Majority of food products in the Indian market contain some of the most hazardous chemicals in the form of artificial flavouring agents, cheap preservatives, and taste enhancers. They are heavily processed in order to enhance their taste and make them more appealing to consumers. Eating such ultra-processed food products is degrading our health exposing us to deadly diseases like cancer. 
     
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
                    1) Only teams whose members have registered online would be able to participate as teams.
                  </li>

                  <li> 2) Each team can contain a maximum of four(4) participants..</li>
           
                  <li>
                    {" "}
                    3) Students from different colleges can form a single team.

                  </li>

                  <li>4) Your team needs to identify a common toxin or “Devil” that’s present in a particular food product. 
</li>

                  <li> 5) You would be given 3 clues to identify the  “Devil”. If you get it right in the very first clue you get 3 points. If you get it right after the second clue you get 2 points. And if you give the correct answer after the third and final clue you will get 1 point. 
.</li>
                
                  <li>
                    {" "}
                    6) But there’s a catch. You get only one attempt to answer. If your team gets it wrong after the first clue, you cannot answer after the subsequent clues.
                  </li>

                  <li>
                    {" "}
                    7) Total Prize Money: INR 5,000 + sponsored prizes in each round
                  </li>

                  <li> <br/> Once the answer is revealed, we will explain how that particular chemical causes harm to your health, and how you can stay away from it. We will also introduce a responsible brand (sponsor) whose product is free from that “Devil” and safe to use. If your team is the quickest to give the correct answer, every member will receive the sponsored product as a prize.</li>

                 
                
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
