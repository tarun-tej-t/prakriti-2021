import React, { Component } from 'react'
import './Eventcard.css'

export default function Eventcard(props) {

    return (
      <div>  
          
    <div class={props.cname}>
      <div class="meta">
        <div class="photo" style={{backgroundImage: 'url(https://static.meraevents.com/content/gallery/248437/swn1646826096.jpg)'}}></div>
        <ul class="details">
            <li></li>
          <li class="author"><a href="#">John Doe</a></li>
          <li class="date">Aug. 24, 2015</li>
          <li class="tags">
            <ul>
              <li>Prize money worth INR 90,000 + Complimentary Goodies. </li>
             
            </ul>
          </li>
        </ul>
      </div>
      <div class="description">
          <img src="https://github.com/tarun-tej-t/prakriti-2021/blob/master/src/Components/Events_new/eggozlogo.png" height="40px"/>
        <h1>{props.name}</h1>
        <h2>{props.tagline}</h2>
        <p> {props.description}</p>
        <p class="read-more">
          <a href={props.ps}>Problem Statement</a> <a href={props.submit}>Submit</a>
        </p>
        <p class="read-more">
         
        </p>
      </div>
    </div>
    </div>
    )
  }

