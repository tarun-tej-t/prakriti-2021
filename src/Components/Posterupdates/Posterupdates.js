import React, { Component } from "react";
import { Zoom } from "react-slideshow-image";
import CA from "./Campus Ambassador Program 3.jpg";
import swnposter from "./swnpoter.jpg";

import kmposter from "./kmposter.jpg";
import dael from "./dael.jpeg";
import ppposter from "./ppposter.jpg";
import maposter from "./maposter.jpg";
import qposter from "./qposter.jpg";
import thposter from "./thposter.jpg";
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
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",
                        fontFamily: "Josefin Sans",
                      }}
                    >
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
                      <a href="http://tiny.cc/Prkrt_CA21" target="_blank">
                        Click Here
                      </a>
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
                  <img src={swnposter} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",
                        fontFamily: "Josefin Sans",
                      }}
                    >
                      {" "}
                      Let yourself slow down for a while and enjoy the pleasure
                      in life !! In a world of constant change and streaming
                      technology, find solace in nature. Bring out your love for
                      nature by capturing
                      <br />
                      <br />
                      Total Prize Money: 5000 INR
                      <br />
                      Deadline for the submissions is 17 March
                      <br />
                      <br />
                      To submit your entries
                      <a
                        href=" http://tiny.cc/SelfiewithNature
                        "
                        target="_blank"
                      >
                        {" "}
                        Click Here
                      </a>
                      <br />
                      <br />
                      Visit{" "}
                      <a
                        href="/#/SelfiewithNature"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {" "}
                        The Event Page
                      </a>{" "}
                      for more details.
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
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",
                        fontFamily: "Josefin Sans",
                      }}
                    >
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
                      <a
                        href="https://tinyurl.com/KrishiManthan"
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      Deadline for the submissions is 17 March
                      <br />
                      <br />
                      To submit your abstracts with other necessary details in
                      the google form
                      <a
                        href="https://tinyurl.com/Prakriti21Submission"
                        target="_blank"
                      >
                        {" "}
                        Click Here
                      </a>
                      <br />
                      <br />
                      Visit{" "}
                      <a
                        href="/#/KrishiManthan"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {" "}
                        The Event Page
                      </a>{" "}
                      for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters">
                <div class="col-md-4" style={{ padding: "0.5vw" }}>
                  <img src={dael} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",
                        fontFamily: "Josefin Sans",
                      }}
                    >
                      {" "}
                      “Information is the oil of the 21st century, and analytics
                      is the combustion engine” – Peter Sondergaard. Presenting
                      to you the Data Analytics event of Prakriti’21. Ignite
                      your mind engines and come up with solutions that can
                      bring out the maximum efficiency from the data oil
                      provided by us.
                      <br />
                      <br />
                      To download the Problem Statement,{" "}
                      <a
                        href="https://lnkd.in/g8_fhjF
"
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      Deadline for the submissions is 17 March
                      <br />
                      <br />
                      To submit your abstracts with other necessary details in
                      the google form
                      <a
                        href="https://tinyurl.com/Prakriti21Submission
"
                        target="_blank"
                      >
                        {" "}
                        Click Here
                      </a>
                      <br />
                      <br />
                      Visit{" "}
                      <a
                        href="/#/DataAnalytics"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {" "}
                        The Event Page
                      </a>{" "}
                      for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters">
                <div class="col-md-4" style={{ padding: "0.5vw" }}>
                  <img src={ppposter} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",
                        fontFamily: "Josefin Sans",
                      }}
                    >
                      {" "}
                      PRAKRITI presents to you the Poster Presentation event,
                      where participants need to design a poster that is both
                      informative and eye-catching that can express ideas as
                      well as messages in the most dazzling way possible!
                      <br />
                      <br />
                      To download the Problem Statement,{" "}
                      <a
                        href="https://tinyurl.com/PrakritiPosterPresentation
                        "
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      Deadline for the submissions is 17 March
                      <br />
                      <br />
                      To submit your abstracts with other necessary details in
                      the google form
                      <a
                        href="https://tinyurl.com/Prakriti21Submission"
                        target="_blank"
                      >
                        {" "}
                        Click Here
                      </a>
                      <br />
                      <br />
                      Visit{" "}
                      <a
                        href="/#/PosterPresentation"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {" "}
                        The Event Page
                      </a>{" "}
                      for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters">
                <div class="col-md-4" style={{ padding: "0.5vw" }}>
                  <img src={maposter} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",
                        fontFamily: "Josefin Sans",
                      }}
                    >
                      {" "}
                      The “Mad-Ad” Event of Prakriti 2021, in association with
                      24 Mantra, challenges its participants to design ads that
                      are capable of encouraging conventional food consumers to
                      switch to organic food thus helping 24 Mantra increase
                      their consumer base. Participants need to come up with ads
                      that are not only capable of drawing the attention of
                      consumers towards organic products but also convincing
                      them for the consumption of the same. <br />
                      <br />
                      To download the Problem Statement,{" "}
                      <a
                        href="https://tinyurl.com/Prakriti21MadAd
                        "
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      Deadline for the submissions is 17 March
                      <br />
                      <br />
                      To submit your abstracts with other necessary details in
                      the google form
                      <a
                        href="https://tinyurl.com/Prakriti21Submission
 
                        "
                        target="_blank"
                      >
                        {" "}
                        Click Here
                      </a>
                      <br />
                      <br />
                      Visit{" "}
                      <a
                        href="/#/MadAd"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {" "}
                        The Event Page
                      </a>{" "}
                      for more details.
                      <br />
                      <br />
                      Visit 24 Mantra{" "}
                      <a
                        href="https://www.24mantra.com/
          "
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        target="_blank"
                      >
                        {" "}
                        Here
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters">
                <div class="col-md-4" style={{ padding: "0.5vw" }}>
                  <img src={qposter} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",
                        fontFamily: "Josefin Sans",
                      }}
                    >
                      {" "}
                      “The beautiful thing about learning is nobody can take it
                      away from you”—B. B. King.
                      <br />
                      2020 had been quite a year to remember! A lot has happened
                      in the last 12 months. The world has observed changes
                      environmentally, technically, and also in the field of
                      agriculture, etc.
                      <br />
                      The time has come to showcase your learnings and test your
                      general awareness.
                      <br />
                      Prakriti 2021, in association with "FundaMakers" presents
                      to you “General Quiz” and “Agro-Food Quiz” to test your
                      general awareness and technical knowledge in the field of
                      agriculture and food processing. <br />
                      <br />
                      Date: General Quiz – 20/03/21, Agro Food Quiz – 21/03/21
                      <br />
                      Deadline for the submissions is 17 March
                      <br />
                      Time: 5pm – 7pm for General as well as Agro Food Quiz.
                      <br />
                      Note: The details of the quiz platform will be shared with
                      the registered participants via Gmail.
                      <br />
                      <br />
                      Visit{" "}
                      <a
                        href="/#/Quizella"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {" "}
                        The Event Page
                      </a>{" "}
                      for more details.
                      <br />
                      <br />
                      Visit FundaMakers{" "}
                      <a
                        href="https://fundamakers.com/"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        target="_blank"
                      >
                        {" "}
                        Here
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters">
                <div class="col-md-4" style={{ padding: "0.5vw" }}>
                  <img src={thposter} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",
                        fontFamily: "Josefin Sans",
                      }}
                    >
                      {" "}
                      “There is more treasure in books than in all the pirates'
                      loot on Treasure Island”
                      <br />
                      <br />
                      The wait for the most exciting event of the fest is over.
                      Prakriti 2021 presents to you “Treasure Hunt”, a fun event
                      focusing on learning facts in the most adventurous way
                      possible! Gather your gears and get ready for the hunt!
                      <br />
                      <br />
                      Please make sure that you go through the following for the
                      efficient progress of your hunt:
                      <br />
                      <br />
                      Instructions,{" "}
                      <a
                        href="https://tinyurl.com/InstructionsTreasureHunt
                        "
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      <br />
                      Demo Treasure Hunt
                      <a
                        href="https://tinyurl.com/DummyTreasureHunt
                        "
                        target="_blank"
                      >
                        {" "}
                        Click Here
                      </a>
                      <br />
                      <br />
                      Visit{" "}
                      <a
                        href="/#/TreasureHunt"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
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
