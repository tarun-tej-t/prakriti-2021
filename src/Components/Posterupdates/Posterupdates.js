import React, { Component } from "react";
import { Zoom } from "react-slideshow-image";
import CA from "./ca.jfif";
import W1 from "./w1.jfif";
import swnposter from "./swn.jpg";

import kmposter from "./kmposter.jpg";
import dael from "./daposter.jpg";
import ppposter from "./ppposter.jpg";
import maposter from "./maposter.jpg";
import qposter from "./qposter.jpg";
import thposter from "./thposter.jpg";
import gl1poster from "./gl1poster.jpg";
import gl2poster from "./gl2poster.jpg";
import inceposter from "./inceposter.jpg";
import scheduled0 from "./scheduled0.jpg";


import "./Posterupdates.css";

export default class Posterupdates extends Component {
  render() {
    const fadeProperties1 = {
      duration: 3000,
      canSwipe: false,
      indicators: true,
      pauseOnHover: true,
    };
    return (
      <div style={{ backgroundColor: "#97F9E3" }}>
        <br />
        <h1 style={{ color: "#11785D", fontWeight: "700", fontFamily:'Montserrat' }}>Announcements</h1>
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
          <div class="card mb-3" >
              <div class="row no-gutters" style={{margin: '0 auto',}}>
                <div class="col-md-4" style={{ alignSelf:"center" }}>
                  <img src={swnposter} class="card-img" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",fontFamily:'Montserrat',
                        alignSelf:"center"
                      }}
                    >
                      {" "}
                      Break Up from the daily hustle and take a while to cherish the joys of life !! In a world of constant change and streaming technology, find solace in nature. Bring out your love for nature by capturing your 
                      <br />
                      <br />      
                     
                      Total Prize Money: 5000 INR
                      <br />
                      Deadline for the submissions is 17 March, 11:59pm
                      <br />
                      <br />
                      To submit your entries
                      <a
                        href="https://bit.ly/Selfie-With-Nature
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
                        href="/SelfiewithNature"
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
                    <br />
                      <br /><br />
                      <br /><br />
                      <br /><br />
                      <br />
                  </div>
                </div>
              </div>
            </div>
          <div class="card mb-3" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{margin: '0 auto',}}>
                <div class="col-md-4" style={{ alignSelf:"center" }}>
                  <img src={W1} class="card-img" alt="..."  />
                </div>
                {/* <div class="col-md-4" style={{ padding: "0.5vw" }}>
                  <img src={scheduled0} class="card-img"  alt="..." />
                </div> */}
                <div class="col-md-6">
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",
                        fontFamily: "Montserrat",
                      }}
                    >
                      {" "}
                      Greetings from PRAKRITI-2022!!!
                      <br />
                      <br />
                      We are elated to announce Mr. Uttam Kumar Founder of Eggoz Nutrition as our guest for the upcoming webinar on Saturday, 12th February, 5 PM.
                      <br />He is a Nutrition Enthusiast, Technology Freak, Passionate Problem solver, and a Successful Entrepreneur.                      <br />
                      <br />
                      He Founded Eggoz in 2017, which has now become one of the most popular brands of packaged eggs across India.
                      <br />In this webinar, he will be sharing his valuable insights on the food industry and entrepreneurship.                      <br />
                      <br />
                    
                      <br />The webinar will be held on MS Teams and you can join by clicking &nbsp;
                      <a href="https://bit.ly/caprkrt22" target="_blank">
                         here
                      </a>
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
             <div class="card mb-3" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{margin: '0 auto',}}>
                <div class="col-md-4" style={{ alignSelf:"center" }}>
                  <img src={CA} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "17px",
                        fontFamily: "Montserrat",
                      }}
                    >
                      {" "}
                      IIT Kharagpur is coming up with PRAKRITI, one of the most anticipated agricultural and food innovation fest in India. And we are looking for Campus Ambassadors...
<br/><br />
Campus Ambassador is a student who is responsible for the participation of students from his/her particular college in PRAKRITI. 
                      <br />
                      <br />
                      Perks of being a Campus Ambassador:
                      <br />
<ul style={{fontSize:"80%"}}>
  <li> An opportunity to associate with IIT Kharagpur which has one of the greatest Alumni networks in the world.</li>
  <li> Certification by IIT Kharagpur which can be immensely helpful to improve your CV.</li>
  <li>'Best of the Best' Campus Ambassadors will be provided with Special Recognition by team-PRAKRITI.</li>
  <li> An opportunity to develop great Social & Interpersonal skills.</li>
  <li> A great Real-Life experience of managing people under your umbrella which cannot be learned through books and classrooms.</li>
</ul>    
                      <br />
                      Registration Link -{" "}
                      <a href="https://bit.ly/caprkrt22" target="_blank">
                        Click Here
                      </a>
                     
                      <br />
                      We will contact you for Interview & further procedure once applied.
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
           {/* <div class="card mb-3" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters">
                <div class="col-md-4" style={{ padding: "0.5vw" }}>
                  <img src={gl2poster} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{
                        padding: "3vw",
                        fontWeight: "500",
                        fontSize: "18px",
                        fontFamily: "Montserrat",
                      }}
                    >
                      {" "}
                      Hola folks!
                      <br />
                      <br />
                      Prakriti 2021 is proud to announce that “Mr. Kaushik K” – the Co-Founder & CEO of “Kheyti” would be delivering the first session of the Guest Lecture series of Prakriti 2021. The session will revolve around the topic - "Becoming an Agri Tech entrepreneur in India". Get ready for some interesting learnings about becoming an agripreneur and make sure to attend the session at the mentioned time!
                      <br />
                      <br />
                      Time: 2:00 pm – 3:30 pm on 20th March.
                      <br />
                      <br />
                      Note: The link for the guest lectures will be shared with
                      the registered participants via Gmail.
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                        fontSize: "18px",fontFamily:'Montserrat'
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
                        fontSize: "18px",fontFamily:'Montserrat'
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
                      Deadline for the submissions is 17 March, 11:59pm
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
                      Deadline for the submissions is 19th March, 11:59pm
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
                        fontSize: "18px",fontFamily:'Montserrat'
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
                      Deadline for the submissions is 18th March, 11:59pm
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
                        fontSize: "18px",fontFamily:'Montserrat'
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
                      Deadline for the submissions is 19th March,11:59pm
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
                      Deadline for the submissions is 18th March,11:59pm
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
                      Date: General Quiz – 19/03/21, Agro Food Quiz – 20/03/21
                      <br />
                      <br />
                      Time: 8:00pm – 9:00pm for General as well as Agro Food
                      Quiz.
                      <br /> <br />
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
                        fontFamily: "Montserrat",
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
            </div> */}
          </Zoom>
          <br />
        </div>{" "}
      </div>
    );
  }
}
