import React, { Component } from 'react'
import './Eventcard.css'

export default class  Eventcard extends Component{
    
    constructor(props) {
        super(props);
    
        this.bgimage = {
          backgroundImage: `url(${this.props.poster})`,
        };
      }
 
    render() {
    return (
      <div style={{padding:"0px 20px 20px 20px"}}>  
          
        
    <div class={this.props.cname}>
      <div class="meta">
        <div class="photo" style={{...this.bgimage}}></div>
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
      <div class="description">
          {(this.props.sponsor)? (
              <img src={this.props.sponsor} style={{height:"80px"}}/>
          ): null}
          
        <h1>{this.props.name}</h1>
        <h2>{this.props.tagline}</h2>
        <p> {this.props.description}</p>
        <p class="read-more">
        {(this.props.ps)? (
          <a href={this.props.ps} target="_blank">Problem Statement</a> ): null}
           <a href={this.props.submit} target="_blank">Submit</a>
        </p>
      
      </div>
    </div>
       
    </div>
    )
  }
}
