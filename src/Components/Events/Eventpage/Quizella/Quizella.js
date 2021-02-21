import React, { Component, useEffect, useState } from "react";
import Product from "./Product";
import "../../styles.css";
import img1 from "../../../public_html/img/gl.jpeg";
import img2 from "../../../public_html/img/gl2.jpeg";
import img3 from "../../../public_html/img/gl3.jpeg"; 
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Enav from '../Eventnav'
//You need this npm package to do createReactClass

const fadeImages = [img1, img2, img3];
export default class Events1 extends Component {
  state = {
    post: [{ id: 1, name: "Thanveer" }],
  };
  render() {
    const zoomOutProperties = {
      indicators: true,
      scale: 0.1,

      duration: 3000,
      transitionDuration: 500,
      infinite: true,
      prevArrow: (
        <div
          style={{
            width: "4%",
            height: "30vh",
            marginRight: "-30px",
            color: "white",
            backgroundColor: "rgb(255,255,255,0.3)",
            cursor: "pointer",
          }}
        ></div>
      ),
      nextArrow: (
        <div
          style={{
            width: "4%",
            height: "30vh",
            marginLeft: "-30px",
            color: "white",
            backgroundColor: "rgb(255,255,255,0.3)",
            cursor: "pointer",
          }}
        ></div>
      ),
    };

    return (
      <div>
        <section id="schedules" className="schedule section-padding">
          <div className="container eve">
            <div className="row">
              <div className="col-12">
                <div className="section-title-header text-center">
                  <h1
                    className="section-title wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{ fontFamily: "Josefin Sans", fontWeight: "500" }}
                  >
                    Events
                  </h1>
                  <hr className="schedule-hr1" />
                  <hr className="schedule-hr2" />
                  <p className="wow fadeInDown" data-wow-delay="0.2s">
                  
                  </p>
                </div>
              </div>
            </div>
            <div
              className="schedule-area row wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <Enav 
              kmactive="nav-link  "
              daactive="nav-link"
              glactive="nav-link"
              agactive="nav-link"
              fdactive="nav-link"
              thactive="nav-link"
              maactive="nav-link"
              snactive="nav-link"
              qactive="nav-link active"
              ppactive="nav-link"
               />

              <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
                <div
                  className="tab-content"
                  style={{ backgroundColor: "white" }}
                >
                  <Fade {...zoomOutProperties}>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/quizella1.jpg" />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/quizella2.jpg" />
                      </div>
                    </div>
                    
                  </Fade>
                  <p>
                  Time to tickle your grey cells in order to know more about the world in and around you along with some of the most intuitive Agri-related questions.
                  <br/>
                  <br/>
                    It is said “Knowledge is Power” which proves itself time and
                    again. To test the knowledge of the students in general
                    awareness of the world around us and technical questions
                    from the field of agriculture, we bring to you the Agro-tech
                    quiz named, named “Quizella”. It would provide a platform to
                    the best minds of India in the field of Agricultural and
                    Food Engineering to test their excellence amongst others and
                    find out their stand.
                    <div stlyle={{ float: "right", paddingLeft: "200vw" }}>
                      <p>
                        <Product data={this.state.post} />
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
