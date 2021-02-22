import React, { Component, useEffect, useState } from "react";
import Product from "./Product";
import "../../styles.css";
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
              daactive="nav-link  active"
              glactive="nav-link"
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
                        <img src="https://github.com/tarun-tej-t/Prakriti2021_images/blob/main/prakriti2021/dl3.jpg?raw=true" />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src="https://github.com/tarun-tej-t/Prakriti2021_images/blob/main/prakriti2021/dl2.jpg?raw=true" />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src="https://github.com/tarun-tej-t/Prakriti2021_images/blob/main/prakriti2021/dl1.jpg?raw=true" />
                      </div>
                    </div>
                  </Fade>
                  <p>
                  Data Analytics is based upon analysing past information to predict future conditions and plan accordingly.
               <br/> <br/>   In the agriculture sector, farmers and agribusiness have to make innumerable decisions every day and intricate complexities involve the various factors influencing them. An essential issue for agricultural planning intention is the accurate yield estimation and estimation of nutrients concentration for the numerous crops involved in the planning or making decisions like which crop to plant before the next harvest. In making these decisions past information is very crucial. Data analysis is based on analyzing past information to predict future conditions in order to make more informed decisions and plan accordingly.

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
