import React, { Component } from "react";
import "./Eventcard.css";
import comingsoon from './coming soon.png'

export default class Eventcard extends Component {
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
        {this.props.poster ? (<div class="meta">
         
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
          </div>):<div class="meta">
         
         <div class="photo" style={{ backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyuqSc1U2jY-SALsSISPedD7NQZQwaiz_5Q&usqp=CAU)` }}></div>
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
       </div>}
          <div class="description">
            {this.props.sponsor ? (
              <img src={this.props.sponsor} style={{ height: "80px" }} />
            ) : null}

            <h1>{this.props.name}</h1>
            <h2>{this.props.tagline}</h2>
            <p> {this.props.description}</p>
            <p class="read-more">
              {this.props.ps ? (
                <a href={this.props.ps} target="_blank">
                  Problem Statement
                </a>
              ) : null}
               {this.props.rules ? (
                <a href={this.props.rules} target="_blank">
                  Rules
                </a>
              ) : null}
               {this.props.submit ? (
              <a href={this.props.submit} target="_blank">
                Submit
              </a> ) : null}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
