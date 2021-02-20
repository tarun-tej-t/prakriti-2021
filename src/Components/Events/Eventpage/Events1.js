import React, { Component } from "react";
import "../styles.css";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../../public_html/img/gl.jpeg";
import img2 from "../../public_html/img/gl2.jpeg";
import img3 from "../../public_html/img/gl3.jpeg";
import { Fade } from "react-slideshow-image";
import leftarrow from "../arrow-circle-left-solid.svg";
import { Link } from "react-router-dom";
//You need this npm package to do createReactClass

const fadeImages = [img1, img2, img3];
export default class Events1 extends Component {
  render() {
    const zoomOutProperties = {
      indicators: true,
      scale: 0.1,

      duration: 3000,
      transitionDuration: 500,
      infinite: true,
      prevArrow: (
        <div style={{ width: "30px", marginRight: "-30px", color: "white" }}>
          <img
            src={leftarrow}
            style={{ width: "30px", marginRight: "-30px", color: "white" }}
          />
        </div>
      ),
      nextArrow: (
        <div style={{ width: "30px", marginLeft: "-30px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#fff"
          >
            <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
          </svg>
        </div>
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
                  >
                    Events
                  </h1>
                  <hr className="schedule-hr1" />
                  <hr className="schedule-hr2" />
                  <p className="wow fadeInDown" data-wow-delay="0.2s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                    elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div
              className="schedule-area row wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
                <div className="table-responsive">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="/Events"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 1000,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4> Poster Presentation</h4>
                          <h5></h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Quizella"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 1000,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4>Quizella</h4>
                          <h5></h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Events2"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4>Krishi Manthan	</h4>
                          <h5></h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Events2"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4>Data Analysis</h4>
                          <h5></h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Events2"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4>MAD-AD</h4>
                          <h5></h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Events2"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4>SELFIE WITH NATURE</h4>
                          <h5></h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Events2"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4>GUEST LECTURE</h4>
                          <h5></h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Events2"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4>TREASURE HUNT</h4>
                          <h5></h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Events2"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4>Find the Devil</h4>
                          <h5></h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Events2"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4>Agrivation</h4>
                          <h5></h5>
                        </div>
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
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
                    Poster design is an expression of thoughts and technical
                    prowess. Your poster can be about anything you want but with
                    one constraint: it must be inspired by the field of
                    agriculture and food engineering. It might tell a story or
                    explain and provide a visual impression of your thoughts -
                    the only limit being your imagination! Come on, Showbiz your
                    style, and put forth a message.
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
