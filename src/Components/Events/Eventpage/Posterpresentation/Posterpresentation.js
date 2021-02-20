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
export default class PosterPesentation extends Component {
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
              maactive="nav-link "
              snactive="nav-link "
              qactive="nav-link "
              ppactive="nav-link active"
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
                  Poster design is an expression of thoughts and technical prowess. Your poster can be about anything you want but with one constraint: it must be inspired by the field of agriculture and food engineering. It might tell a story or explain and provide a visual impression of your thoughts - the only limit being your imagination! Come on, Showbiz your style, and put forth a message.

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
