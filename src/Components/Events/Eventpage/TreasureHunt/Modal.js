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
              Treasure Hunt{" "}
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
              >(THEME : SAVE THE AMAZON)
              <br/>
              "The world has enough for everyone's needs, but not everyone's greed", that’s what Mahatma Gandhi said in one of his best-known quotes. But it took us several decades and a devastating pandemic to realize the depth of his quote. Indeed, we have limited resources on our planet and our everlasting greeds may soon turn the planet lifeless. To change the current scenario, and make our youth aware of different environmental issues, PRAKRITI 2021 is launching an online treasure hunt event for the first time.

              </h5>
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
                   
1) This is an individual event.

                  </li>

               
                  <li> 2) Only those are allowed to participate who have registered online.
.</li>
                
                  <li>
                   3) In this event, participants would be given different virtual missions that would address some burning environmental issues like climate change, amazon fires, urban pollution etc. Each mission would be further divided into smaller tasks and to complete each task participants need to solve a bunch interesting riddles.
                  </li>

                  <li> 4) After solving each task, participants would receive “completion codes”, which they would need in the later stages of the game.
</li>

                  <li> 5) Participants who would complete all the missions in the shortest time would be the winner.
</li>
          
                  <li>
                   6) Total Prize Money: INR 10,000
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
