import React, { Component } from "react";
import { Zoom } from "react-slideshow-image";
import CA from "./Campus Ambassador Program 3.jpg";
import kmposter from "./kmposter.jpg";
import fbcover from "./Fb Cover Page 3.jpg";
import "./Posterupdates.css";
import { Slide } from "react-slideshow-image";

export default class Posterupdates extends Component {
  render() {
    const fadeProperties1 = {
      duration: 3000,
      canSwipe: false,
      indicators: true,
      pauseOnHover: true,
      indicators: (i) => <div className="indicator">{i + 1}</div>,
    };
    return (
      <div style={{ backgroundColor: "#97F9E3" }}>
        <br />
        <h1 style={{ color: "#11785D", fontWeight: "700" }}>Anouncements</h1>
        <hr
          style={{
            width: "8%",
            marginLeft: "46%",
            backgroundColor: "rgba(6, 12, 34, 0.16)",
            height: "2px",
          }}
        />
        <br />
        <div>
          <Zoom {...fadeProperties1}>
            <div class="card mb-3" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters">
                <div class="col-md-4" style={{ padding: "0.5vw" }}>
                  <img src={CA} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text" style={{ padding: "3vw",fontWeight:'500',fontSize:'18px',fontFamily:'Josefin Sans' }}>
                      {" "}
                      Hola Folks !!
                      <br />
                      Agricultural and Food Engineering Department, IIT
                      Kharagpur is going to organize the 12th edition of its
                      annual agri and food innovation fest through online mode.
                      We are hereby providing you the opportunity to represent
                      us in your college/institution.
                      <br /> The campus Ambassador registration form is out now!
                      Get a chance to brush up your leadership skills by
                      enrolling yourself here:
                      <br />
                      <br />
                      Registration Link -{" "}
                      <a href="http://tiny.cc/Prkrt_CA21" target='_blank'>Click Here</a>
                      <br />
                      <br />
                      Limited openings!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters">
                <div class="col-md-4" style={{ padding: "0.5vw" }}>
                  <img src={kmposter} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text" style={{ padding: "3vw",fontWeight:'500',fontSize:'18px',fontFamily:'Josefin Sans'  }}>
                      {" "}
                      The Agricultural Marketing in India is very unorganized.
                      The middlemen of the agricultural supply chain in India
                      tend to exploit the farmers and maximize their own
                      profit’s thus causing distress among the farmers of India.
                      Prakriti’21 presents to you, “Krishi Manthan” – a
                      case-study event, where participants need to perform a
                      detailed research on the current agricultural marketing in
                      India and come up with the most feasible strategies that
                      help gain more profits for the farmers rather than the
                      middlemen.
                      <br />
                      <br />
                      To download the Problem Statement,{" "}
                      <a href="https://tinyurl.com/KrishiManthan" target='_blank'>Click Here</a>
                      <br />
                      Deadline for the submissions is 17 March
                      <br />
                      <br />
                      To submit your abstracts with other necessary details
                      in the google form  
                      <a href="https://tinyurl.com/PrakritiSubmission" target='_blank'> Click Here</a>
                      <br />
                      <br />
                      Visit{" "}
                      <a href="https://www.prkrt.co.in/#/KrishiManthan" target='_blank'>
                        {" "}
                        The Event Page
                      </a>{" "}
                      for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <br />
        </div>{" "}
      </div>
    );
  }
}
