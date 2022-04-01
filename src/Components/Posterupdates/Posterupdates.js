import React, { Component } from "react";
import { Zoom} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import CA from "./ca.jfif";
import W1 from "./w1.jfif";
import swnposter from "./swn.jpg";
import machineFreaks from "./mf.jpeg"
import poster from "./poster.jpg"
import quiz from "./quiz.jpeg"
import krisi from "./krisi.jpeg"
import agriDeadline from "./agriDeadline.jpeg"
import media2 from "./mediaPartner2.jpeg"
import media1 from "./mediaPartner.jpeg"
import theme from "./theme.jpeg"
import daysleft from "./daysleft.jpeg"
import sponserEvent from "./eventsSponser.jpeg"
import foodquest from "./foodquest.jpeg"
import partner from "./partner.jpeg"
import altairSpons from "./altairSpons.jpeg"

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
      canSwipe: true,
      indicators: true,
      pauseOnHover: true,
      arrows: true
    };
    const zoomOutProperties = {
      duration: 3000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      pauseOnHover: true,
      Navigationsize: 500,
      arrows: true
    };
    return (
      <div style={{  }}>
        <br />
        <h1
          style={{
            color: "#11785D",
            fontWeight: "700",
            fontFamily: "Montserrat",
          }}
        >
          Announcements
        </h1>
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
          <Zoom {...zoomOutProperties}>
          <div class=" mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto"}}>
                <div class="col-md-4" >
                  <img
                    src={daysleft}
                    class="card-img"
                    alt="..."
                  />
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
                      Hola peeps!!
                      <br />
                      The wait is finally over, 2 more days to go for this exciting and exhilarating fest to begin.
                      <br />
                      <br />
                      Prakriti 2022 is set to host many thrilling and fun events so stay tuned for this opportunity. 
                      <br />      
                      <br />                               
                      For more information and registration -{" "}
                      <a
                        href="prkrt.co.in/Registration
"
                        target="_blank"
                      >
                        Click Here
                      <br />
                      <br />
                      </a>
                      {" "}
                      <a
                        href=" https://www.facebook.com/hashtag/2daystogo
"
                        target="_blank"
                      >
                        #2daystogo
                      </a>
                      <br />
                      {" "}
                      <a
                        href=" https://www.facebook.com/hashtag/prakriti_2022
"
                        target="_blank"
                      >
                        #prakriti_2022
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>           
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={theme}
                    class="card-img"
                    alt="..."
                  />
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
                      Ahoy fellas!
                      <br />
                      Gear up for the 13th edition of one of the largest Agri and Food innovation fest, PRAKRITI 2022 to be conducted on 1-3 April this year.
                      <br />
                      <br />
                      Don't miss this opportunity to engage yourself in the profusion of exciting events.
                      <br />
                      <br />
                      Come! Join us on this amazing and exciting journey with us.
                      <br />
                      <br />
                      Count-down begins now.
                      <br />
                      <br />
                      {" "}
                      <a
                        href="https://www.facebook.com/hashtag/prakriti2022
"
                        target="_blank"
                      >
                        #prakriti2022
                      </a>
                      <br />
                      {" "}
                      <a
                        href="https://www.facebook.com/hashtag/foodforall
"
                        target="_blank"
                      >
                       #foodforall
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={agriDeadline}
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="col-md-8" >
                  <div class="card-body" >
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
                      Hola folks!
                      <br />
                      The deadline of Agrivation has been extended to 31st March.
                      <br />
                      <br />
                      So, you have more time to awaken the hidden entrepreneur in you and create a meaningful impact in our society.
                      <br />
                      <br />
                      In this event, the participants are challenged to
                      understand India’s problems with food security and come up
                      with viable startup ideas that can ensure food-security
                      for millions of Indians.
                      <br />
                      <br />
                      Prize money worth INR 20,000 + Chance to receive funding
                      from ABIF-IIT Kharagpur.
                      <br />
                      <br />
                      So, grab this opportunity and start your journey as a
                      “Food-Security-Entrepreneur”
                      <br />
                      <br />
                      To get the Problem Statement -{" "}
                      <a
                        href="https://www.prkrt.co.in/agrivation-ps
"
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      <br />
                      To submit your business model doc-{" "}
                      <a
                        href="https://bit.ly/Agrivation-Submissions
"
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      Last date for document submission: 28th March 2022
                      <br />
                      To be a part of more such amazing events don’t forget to
                      register for PRAKRIT-2022{" "}
                      <a
                        href="https://www.prkrt.co.in/Registration
"
                        target="_blank"
                      >
                        Here
                      </a>{" "}
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a">
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
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
                        fontFamily: "Montserrat",
                        alignSelf: "center",
                      }}
                    >
                      {" "}
                      Break Up from the daily hustle and take a while to cherish
                      the joys of life !! In a world of constant change and
                      streaming technology, find solace in nature. Bring out
                      your love for nature by capturing your
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
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img src={foodquest} class="card-img" alt="..." />
                </div>
                {/* <div class="col-md-4" style={{ padding: "0.5vw" }}>
                  <img src={scheduled0} class="card-img"  alt="..." />
                </div> */}
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
                      The time has come to showcase your expertise as a scientist, innovator, and food enthusiast.
                      <br />
                      <br />
                      Prakriti- IIT Kharagpur in association with Eggoz nutrition presents “FOOD QUEST”, one of India's biggest Food-Product Development Challenge. This competition challenges the young minds across India to do qualitative and quantitative research and invent an innovative egg-based product that would appeal to the Indian plates.
                       <br />
                      <br />
                      Prize money worth INR 90,000 + Complimentary Goodies. 
Best Submissions May Even Secure Internships Or Placements At Eggoz.
                      <br />
                      <br />
                      So, grab this opportunity and start your “egg-cellent” adventure as an innovator.
                       <br />
                      <br />
                      Get the Problem Statement at: {" "}
                      <a href="https://www.prkrt.co.in/foodquest-ps
" target="_blank">
                        Click Here
                      </a>
                      <br />
                      Submit your report at: {" "}
                      <a href=" https://bit.ly/Food-Quest-Prakriti-2022
" target="_blank">
                        Click Here
                      </a>
                      <br />
                      Last date for report submission: 28th March 2022
                      <br />
                       To be a part of more such amazing events don’t forget to register for PRAKRIT-2022 at: {" "}
                      <a href="https://www.prkrt.co.in/Registration

" target="_blank">
                         Here
                      </a>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
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
                      IIT Kharagpur is coming up with PRAKRITI, one of the most
                      anticipated agricultural and food innovation fest in
                      India. And we are looking for Campus Ambassadors...
                      <br />
                      <br />
                      Campus Ambassador is a student who is responsible for the
                      participation of students from his/her particular college
                      in PRAKRITI.
                      <br />
                      <br />
                      Perks of being a Campus Ambassador:
                      <br />
                      <ul style={{ fontSize: "80%" }}>
                        <li>
                          {" "}
                          An opportunity to associate with IIT Kharagpur which
                          has one of the greatest Alumni networks in the world.
                        </li>
                        <li>
                          {" "}
                          Certification by IIT Kharagpur which can be immensely
                          helpful to improve your CV.
                        </li>
                        <li>
                          'Best of the Best' Campus Ambassadors will be provided
                          with Special Recognition by team-PRAKRITI.
                        </li>
                        <li>
                          {" "}
                          An opportunity to develop great Social & Interpersonal
                          skills.
                        </li>
                        <li>
                          {" "}
                          A great Real-Life experience of managing people under
                          your umbrella which cannot be learned through books
                          and classrooms.
                        </li>
                      </ul>
                      <br />
                      Registration Link -{" "}
                      <a href="https://bit.ly/caprkrt22" target="_blank">
                        Click Here
                      </a>
                      <br />
                      We will contact you for Interview & further procedure once
                      applied.
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
                    */}
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={machineFreaks}
                    class="card-img"
                    alt="..."
                  />
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
                      Ahoy fellas. PRAKRITI-2022 brings "Machine Freaks- Machinery Analytics Event" to you in collaboration with Altair Engineering Inc.
                      <br />
                      In this competition, you would be challenged to use Discrete Element Modelling (DEM) to effectively simulate the soil-tool interaction for tillage applications in ALTAIR EDEM with an appropriate physics model and study the drat forces with respect to tillage speed while taking soil cohesion and adhesion into account.
                      <br />
                      <br />
                      Prize Money: INR 25,000
                      <br />
                      <br />
                      Submission Deadline: 31st March, 2022
                      <br />
                      <br />
                      Get started NOW by downloading the problem statement:{" "}
                      <a
                        href="https://bit.ly/Machine-Freaks-Problem-Statement
"
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      <br />
                                         
                      To register yourself for this event and other exciting events, visit:{" "}
                      <a
                        href="https://www.prkrt.co.in/Registration
"
                        target="_blank"
                      >
                        Here
                      </a>{" "}
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={poster}
                    class="card-img"
                    alt="..."
                  />
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
                      Hola folks!
                      <br />
                      The time has come to showcase your creative skills.
                      <br />
                      <br />
                      Prakriti-IIT Kharagpur presents " Poster Making Competition". This competition challenges the young minds across India to communicate their research and understanding about different aspects of "FOOD SECURITY".
                      <br />
                      <br />
                      Prize money: INR 5000
                      <br />
                      <br />
                      Rules and Guidelines:{" "}
                      <a
                        href=" prkrt.co.in/Poster-Presentation-PS

"
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      <br />
                      Submit your poster at:{" "}
                      <a
                        href="https://bit.ly/Poster-Submission-2022
"
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      <br />
                      Last date for submission: 31st March
                      <br />
                      <br />
                                         
                      To participate in this event and more such amazing events register at {" "}
                      <a
                        href="https://www.prkrt.co.in/Registration
"
                        target="_blank"
                      >
                        Here
                      </a>{" "}
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={quiz}
                    class="card-img"
                    alt="..."
                  />
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
                      Hola folks!
                      <br />
                      Prakriti-IIT Kharagpur in association with AgriVision4U presents to you “ Quizella ” an online quiz event. So, gear up for the exciting questions and register at:{" "}
                      <a
                        href="  https://www.prkrt.co.in/Registration

"
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      <br />
                      Prize Money : INR 10,000
                      <br />
                      <br />
                      Best performers will get discount coupons on courses offered by AgriVision4U.
                      <br />
                      <br />
                      (To know more, visit{" "})
                      <a
                        href=" https://www.agrivision4u.com/
"
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      <br />
                      All the necessary details will be shared with the registered participants via mail.
                      <br />
                      <br />
                                         
                      Visit our website for more details: {" "}
                      <a
                        href="https://www.prkrt.co.in/

"
                        target="_blank"
                      >
                        Here
                      </a>{" "}
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={krisi}
                    class="card-img"
                    alt="..."
                  />
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
                      Ahoy Fellas,
                      <br />
                      PRAKRITI-2022 is back with “ KRISHI-MANTHAN ”, an exciting case study competition to stimulate the hidden problem-solving skills in you. In this competition, you would be challenged to think strategically and give a detailed plan to bring a “Millet Revolution In India”.
                      <br />
                      <br />
                      Want to know more? Grab the Problem statement and get started with your problem-solving journey.
                      <br />
                      <br />
                      Best performers will get discount coupons on courses offered by AgriVision4U.
                      <br />
                      <br />
                      Problem Statement: {" "}
                      <a
                        href=" prkrt.co.in/Krishi-Manthan-PS
"
                        target="_blank"
                      >
                        Click Here
                      </a>
                      <br />
                      <br />
                      Prize Money:  INR 20,000
                      <br />
                      <br />
                                         
                      Submit your Solutions:  {" "}
                      <a
                        href="bit.ly/manthan22-submissions
"
                        target="_blank"
                      >
                        Here
                      </a>
                      <br />
                      <br />
                      To participate in this event and more such amazing register at  {" "}
                      <a
                        href="prkrt.co.in/Registration
"
                        target="_blank"
                      >
                        Here
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={media1}
                    class="card-img"
                    alt="..."
                  />
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
                      Prakriti-2022 proudly announces {" "}
                      <a
                        href=" https://www.facebook.com/foodkida/
"
                        target="_blank"
                      >
                        Foodkida 
                      </a>
                      {" "} and Krishishastra as Social media partners.
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={media2}
                    class="card-img"
                    alt="..."
                  />
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
                      Prakriti-2022 proudly announces {" "}
                      <a
                        href=" https://www.facebook.com/foodkida/
"
                        target="_blank"
                      >
                        AgriVision4U
                      </a>
                      {" "} as Social media partner.
AgriVision4U is an agriculture and allied Ed-Tech platform offering precise and effective learning programs for students competing for GATE(XE/XL/GE), CFTRI, ICAR-JRF & CFSO/TO.
                      <br />
                      <br />
                      To know more about them, visit: {""}
                      <a href="https://www.agrivision4u.com/
"                     target="blank" 
                      >
                      Click Here
                      </a>
                      <br />
                      <br />
                      {""}
                      <a href="https://www.facebook.com/hashtag/agrivision4u
"                     target="blank" 
                      >
                        #agrivision4u
                      </a>
                      <br />
                     {""}
                      <a href="https://www.facebook.com/hashtag/prakriti2022
"                     target="blank" 
                      >
                        #prakriti2022
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={sponserEvent}
                    class="card-img"
                    alt="..."
                  />
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
                      Prakriti2022 proudly presents {" "}
                      <a
                        href=" https://www.facebook.com/EggozNutrition/
"
                        target="_blank"
                      >
                        Eggoz
                      </a>
                      {" "}as its Events partner.
                      <br />
                      <br />
                      Eggoz is a brand of packaged eggs with a promise of freshness and quality. They are on a mission to revolutionize India’s protein consumption by bringing UV sanitized eggs fresh from the farm to plates of millions of consumers.
                      <br />
                      <br />
                      Visit Eggoz here: {""}
                      <a href="https://eggoz.in/
"                     target="blank" 
                      >
                      Click Here
                      </a>
                      <br />
                      <br />
                      {""}
                      <a href="https://www.facebook.com/hashtag/eggoz
"                     target="blank" 
                      >
                        #eggoz
                      </a>
                      <br />
                     {""}
                      <a href="https://www.facebook.com/hashtag/prakriti2022
"                     target="blank" 
                      >
                        #prakriti2022
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={partner}
                    class="card-img"
                    alt="..."
                  />
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
                      Prakriti-2022 proudly announces Agri-Business Incubation Centre, IIT Kharagpur as its Events Partner.
                      <br />
                      <br />
                      The ABIC is mandated to incubate innovative ideas in the agriculture and food technology domain for creating Agri-preneures. It develops, demonstrates, and transfers low-cost technologies for the sustainable development of agricultural and rural communities.
                      <br />
                      <br />
                       {""}
                      <a href="https://www.facebook.com/hashtag/abiciitkharagpur
"                     target="blank" 
                      >
                      #abiciitkharagpur
                      </a>
                      <br />
                      {""}
                      <a href="https://www.facebook.com/hashtag/abifiitkharagpur
"                     target="blank" 
                      >
                        #abifiitkharagpur
                      </a>
                      <br />
                     {""}
                      <a href="https://www.facebook.com/hashtag/prakriti2022
"                     target="blank" 
                      >
                        #prakriti2022
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
              <div class="row no-gutters" style={{ margin: "0 auto" }}>
                <div class="col-md-4" >
                  <img
                    src={altairSpons}
                    class="card-img"
                    alt="..."
                  />
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
                      Prakriti2022 proudly presents {" "}
                      <a href="https://www.facebook.com/altairengineering/"
                      target="blank">
                       Altair
                      </a>
                      {" "}as its Events partner.
                      <br />
                      <br />
                      Altair (Nasdaq: ALTR) is a global technology company, which provides software and cloud solutions in the areas of simulation, high-performance computing (HPC), and artificial intelligence (AI). Altair enables organizations in nearly every industry to compete more effectively in a connected world while creating a more sustainable future.
                      <br />
                      <br />
                       {""}
                      <a href="https://www.facebook.com/hashtag/altair
"                     target="blank" 
                      >
                      #Altair
                      </a>
                      <br />
                      {""}
                      <a href="https://www.facebook.com/hashtag/prakriti2022
"                     target="blank" 
                      >
                        #prakriti2022
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
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
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
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
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
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
           
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
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
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
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
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
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
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
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
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
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
            <div class="mb-3 container-a" style={{ maxWidth: "100vw" }}>
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
