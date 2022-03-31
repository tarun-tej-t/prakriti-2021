import React, { Component } from "react";
import "./Eventcard.css";
import comingsoon from "./coming soon.png";

export default class GuestCard extends Component {
  constructor(props) {
    super(props);

    this.bgimage = {
      backgroundImage: `url(${this.props.poster})`,
    };
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
          <div class="description" >
           
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
            
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
              
              </div>
            
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: "700", padding: "10px 10px 10px 0px" }}>
                  {this.props.time ? (
                    <span>
                     Time:
                      <br />
                      {this.props.time}
                    </span>
                  ) : null}
                </p>
               
                <p onClick={this.showtreasurehuntDetails}>
                    <br/>
                  <a href={this.props.joinlink} target="_blank">
                      <button id="foot">
                        <button class="button-os">Join!</button>
                      </button>
                  </a>
                  &ensp;
                </p>
                
              </div>
           <br/>
          </div>
        </div>
      </div>
    );
  }
}
