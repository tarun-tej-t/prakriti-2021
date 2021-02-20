import React, { Component, useEffect, useState } from "react";


import img1 from "../../../public_html/img/gl.jpeg";
import img2 from "../../../public_html/img/gl2.jpeg";
import img3 from "../../../public_html/img/gl3.jpeg";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
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
              kmactive="nav-link "
              daactive="nav-link  "
              glactive="nav-link active"
              agactive="nav-link"
              fdactive="nav-link"
              thactive="nav-link"
              maactive="nav-link"
              snactive="nav-link"
              qactive="nav-link"
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
                        <img src={fadeImages[0]} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={fadeImages[1]} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={fadeImages[2]} />
                      </div>
                    </div>
                  </Fade>
                  <p>
                  Promotion of agriculture - entrepreneurship has always been a leitmotif of Prakriti right from its inception. While the main emphasis of the summit has always been on how Agripreneurs who have the potential of combining entrepreneurial skill and modernization in the field of agriculture can play the role of catalysts in transforming the traditional farmer into a modern agripreneur, the time has been devoted for developing agri-food entrepreneurs with distinct traits and skills to explore novel opportunities in the field of agriculture and food science & technology.             
<br/><br/>Stay tuned for knowing the speakers of 2021 edition of Prakriti.
                    <div stlyle={{ float: "right", paddingLeft: "200vw" }}>
                      <p>
                       
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
