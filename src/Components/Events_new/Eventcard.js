import React, { Component } from "react";
import "./Eventcard.css";
import comingsoon from "./coming soon.png";

export default class Eventcard extends Component {
  constructor(props) {
    super(props);

    this.bgimage = {
      backgroundImage: `url(${this.props.poster})`,
    };
  }
  showGeneralQuizDetails() {
    
  }
  showAgroQuizDetails() {
    alert(
      "Quizella: Agro Quiz\n\nDate: 2nd April 2022\nTime: 8 to 9pm\n\nQuiz Links would be emailed to the registered participants before the event starts"
    );
  }
  showtreasurehuntDetails() {
    alert(
      "Event: TREASURE HUNT\n\nDate: 3rd April 2022\nTime: 4pm\n\nTreasure Hunt link would be emailed to the registered participants before the event starts"
    );
  }
  render() {
    return (
      <div style={{ padding: "0px 20px 20px 20px" }}>
        <div class={this.props.cname}>
          {this.props.poster ? (
            <div class="meta">
              <div class="photo" style={{ ...this.bgimage }}></div>
              {/* <ul class="details">
            <li></li>
          <li class="author"><a href="#">John Doe</a></li>
          <li class="date">Aug. 24, 2015</li>
          <li class="tags">
            <ul>
              <li>Prize money worth INR 90,000 + Complimentary Goodies. </li>
             
            </ul>
          </li>
        </ul> */}
            </div>
          ) : (
            <div class="meta">
              <div
                class="photo"
                style={{
                  backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyuqSc1U2jY-SALsSISPedD7NQZQwaiz_5Q&usqp=CAU)`,
                }}
              ></div>
              {/* <ul class="details">
         <li></li>
       <li class="author"><a href="#">John Doe</a></li>
       <li class="date">Aug. 24, 2015</li>
       <li class="tags">
         <ul>
           <li>Prize money worth INR 90,000 + Complimentary Goodies. </li>
          
         </ul>
       </li>
     </ul> */}
            </div>
          )}
          <div class="description">
            {this.props.sponsor ? (
              <>
                {" "}
                <br />
                {this.props.name === "QUIZELLA: Agro Quiz" ? (
                  <>
                    {" "}
                   
                    <img
                      src={this.props.sponsor}
                      style={{ width: "150px" }}
                    />{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <br />
                    <img
                      src={this.props.sponsor}
                      style={{ width: "80px" }}
                    />{" "}
                    <br/>
                  </>
                )}{" "}
              </>
            ) : null}
            <h1>{this.props.name}</h1>
            <h2>{this.props.tagline}</h2>
            {this.props.prizemoney ? (
              <h5
                style={{
                  textAlign: "left",
                  fontWeight: "700",
                  padding: "10px 10px 10px 0px",
                }}
              >
                PRIZE MONEY WORTH INR {this.props.prizemoney}
              </h5>
            ) : null}{" "}
            <p style={{textAlign:"justify"}}> {this.props.description}</p>
            {this.props.name === "QUIZELLA: Agro Quiz" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
               
               <p >
                    <br />
                  <a href={this.props.joinlink1} target="_blank">
                      <button id="foot">
                        <button class="button-os">Registration</button>
                      </button>
                  </a>
                  &ensp;
                </p>
                  
                
                  <p >
                    <br/>
                  <a href={this.props.joinlink2} target="_blank">
                      <button id="foot">
                        <button class="button-os">Play!!</button>
                      </button>
                  </a>
                  &ensp;
                </p>
              </div>
            ) : this.props.name === "TREASURE HUNT" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <p>
                <br/>
                <a href={this.props.joinlink2} target="_blank">
                  <button id="foot">
                    <button class="button-os">Play!!</button>
                    
                  </button>
                  </a>
                  <br/>
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: "700", padding: "10px 10px 10px 0px" }}>
                  {this.props.deadline ? (
                    <span>
                      Submission deadline:
                      <br />
                      {this.props.deadline}
                    </span>
                  ) : null}
                </p>
                <p class="read-more">
                  {this.props.ps ? (
                    <a href={this.props.ps} target="_blank">
                      Problem Statement
                    </a>
                  ) : null}
                  {this.props.rules ? (
                    <a href={this.props.rules} target="_blank">
                      Rules and Guidelines
                    </a>
                  ) : null}
                  {this.props.submit ? (
                    <a href={this.props.submit} target="_blank">
                      Submit
                    </a>
                  ) : null}
                </p>
                
              </div>
            )}
            {this.props.name === "TREASURE HUNT" || this.props.name === "QUIZELLA: Agro Quiz" ? (<br/>):(null)}
          </div>
        </div>
      </div>
    );
  }
}
