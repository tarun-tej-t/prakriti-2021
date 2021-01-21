import React, { Component } from "react";
import Eventcard from "./Eventcard";

import "./events.css";

export default function Events() {
  return (
    <div  id="events">
        <div class="services-area">
    <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <br />
              <br />
              <div class="section-headline services-head text-center">
                <h2>Events</h2>
              </div>
            </div>
        

          <div style={{width:'100%'}}>
            <Eventcard 
            elink="#/quizella"
            eicon={<i class="fa fa-check-square-o"></i>}
              etitle="QUIZELLA"
              edescription="Time to tickle your grey cells in order to know more about the world in and around you along with some of the most intuitive Agri-related questions.
         "
            />
          
            <Eventcard
              eicon={<i class="fa fa-check-square-o"></i>}
              etitle="Quizella"
              edescription="Time to tickle your grey cells in order to know more about the world in and around you along with some of the most intuitive Agri-related questions.
         "
            />{" "}
            <Eventcard
              eicon={<i class="fa fa-check-square-o"></i>}
              etitle="Quizella"
              edescription="Time to tickle your grey cells in order to know more about the world in and around you along with some of the most intuitive Agri-related questions.
         "
            />{" "}
            <Eventcard
              etitle="Quizella"
              edescription="Time to tickle your grey cells in order to know more about the world in and around you along with some of the most intuitive Agri-related questions.
         "
            />{" "}
            <Eventcard
              etitle="Quizella"
              edescription="Time to tickle your grey cells in order to know more about the world in and around you along with some of the most intuitive Agri-related questions.
         "
            />{" "}
            <Eventcard
              etitle="Quizella"
              edescription="Time to tickle your grey cells in order to know more about the world in and around you along with some of the most intuitive Agri-related questions.
         "
            />{" "}
            <Eventcard
              etitle="Quizella"
              edescription="Time to tickle your grey cells in order to know more about the world in and around you along with some of the most intuitive Agri-related questions.
         "
            />{" "}
            <Eventcard
              etitle="Quizella"
              edescription="Time to tickle your grey cells in order to know more about the world in and around you along with some of the most intuitive Agri-related questions.
         "
            />
          </div>  </div></div></div>
        </div>
    
  );
}
