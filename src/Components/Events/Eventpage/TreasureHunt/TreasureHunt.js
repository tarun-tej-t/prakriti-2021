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
              thactive="nav-link active"
              maactive="nav-link"
              snactive="nav-link"
              qactive="nav-link "
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
                        <img src="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/treasurehunt.jpg" />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src="https://github.com/tarun-tej-t/Prakriti2021_images/blob/main/prakriti2021/th3.PNG?raw=true" width="3000px"/>
                      </div>
                    </div>
                   
                    <div className="each-fade">
                      <div className="image-container">
                        <img src="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/treasurehunt1.jpg" />
                      </div>
                    </div>
                   
                  </Fade>
                  <p>
                  (THEME : SAVE THE AMAZON)                  <br/>
                  <br/>
                  "The world has enough for everyone's needs, but not everyone's greed", that’s what Mahatma Gandhi said in one of his best-known quotes. But it took us several decades and a devastating pandemic to realize the depth of his quote. Indeed, we have limited resources on our planet and our everlasting greeds may soon turn the planet lifeless. To change the current scenario, and make our youth aware of different environmental issues, PRAKRITI 2021 is launching an online treasure hunt event for the first time.
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
