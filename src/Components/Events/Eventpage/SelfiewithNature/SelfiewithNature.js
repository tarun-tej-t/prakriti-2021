import React, { Component, useEffect, useState } from "react";
import Product from "./Product";
import "../../styles.css";
import img1 from "../../../public_html/img/gl.jpeg";
import img2 from "../../../public_html/img/gl2.jpeg";
import img3 from "../../../public_html/img/gl3.jpeg"; 
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import SWN from "./swn.jpg";
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
              thactive="nav-link"
              maactive="nav-link "
              snactive="nav-link active"
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
                      <div className="image-container" >
                        <img src={SWN} style={{width:"100%",justifyContent:"center",alignItems:"center",alignSelf:"center"}} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                      <img src={SWN} style={{width:"100%",justifyContent:"center",alignItems:"center",alignSelf:"center"}} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container" >
                      <img src={SWN}  style={{width:"100%",justifyContent:"center",alignItems:"center",alignSelf:"center"}}/>
                      </div>
                    </div>
                  </Fade>
                  <p>
                  Break out your smartphone and head out to take quiet walk with mother nature and take your selfie with nature.
<br/><br/>Here comes the first Pre-Event of PRAKRITI 2022 Selfie With Nature.
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
