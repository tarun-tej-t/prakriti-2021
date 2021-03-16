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
import Enav from "../Eventnav";
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
                  <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
                </div>
              </div>
            </div>
            <div
              className="schedule-area row wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <Enav
                kmactive="nav-link  active"
                daactive="nav-link"
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
                        <img src="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/krishi1.jpg" />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/krishi2.jpg" />
                      </div>
                    </div>
                  </Fade>
                  <p id="kmcontent">
                    Rigorous analysis of a trending problem in
                    agriculture,facing ground level challenges and providing the
                    most economical solution via one's financial expertise.
                    <br />
                    <br />
                    Prakriti presents to you “Krishi-Manthan”, where the
                    participant needs to ponder upon a particular challenge(to
                    be uploaded soon) faced by the farmers. Participants need to
                    place themselves in the situation of farmers and provide the
                    most feasible solution based on all the relevant data which
                    will be provided by us regarding the resources and the
                    budget constraints. Fit in the shoes of a real farmer and
                    tackle their problem just like you manage your pocket money.
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
