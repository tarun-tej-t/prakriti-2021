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
              agactive="nav-link "
              fdactive="nav-link active"
              thactive="nav-link"
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
                        <img src="https://github.com/tarun-tej-t/Prakriti2021_images/blob/main/prakriti2021/findthedevil1.JPG?raw=true" />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src="https://github.com/tarun-tej-t/Prakriti2021_images/blob/main/prakriti2021/findthedevil2.jpg?raw=true" />
                      </div>
                    </div>
                   
                  </Fade>
                  <p>
                  Prakriti 2021 introduces an entirely new Online event: Find The Devil to make you more aware about hidden killers in your food,
We can’t imagine our lives without food. Whether a family dinner, or binging out with friends, food is a common thread that binds us all. But today, our food system is changing. Food companies are coming up with new products every day. Just visit your local Kirana shop after a week and you find completely new items on the shelves. These items come with attractive packages and innovative ad campaigns to grab your attention. Their branding is done in a way that compels you to spend your money on them. Some claim to be “Tasty and Healthy”, some promise “Weight loss”, while others use tags like “Fat free”, “Sugar Free”, “Gluten free”, etc.
<br/><br/>
But, a careful look at their ingredients would reveal a completely different story. Majority of food products in the Indian market contain some of the most hazardous chemicals in the form of artificial flavouring agents, cheap preservatives, and taste enhancers. They are heavily processed in order to enhance their taste and make them more appealing to consumers. Eating such ultra-processed food products is degrading our health exposing us to deadly diseases like cancer. 

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
