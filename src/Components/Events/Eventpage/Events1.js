import React, { Component } from 'react'
import '../styles.css'
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../../public_html/img/gl.jpeg'
import img2 from '../../public_html/img/gl2.jpeg'
import img3 from '../../public_html/img/gl3.jpeg'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import leftarrow from '../arrow-circle-left-solid.svg'
import { Link } from "react-router-dom";
//You need this npm package to do createReactClass

const fadeImages = [
   img1,
   img2,
   img3
  ];
  export default class Events1 extends Component {
    render() {
        const zoomOutProperties = {
            indicators: true,
            scale: 0.1,
           
            duration: 3000,
            transitionDuration: 500,
            infinite: true,
            prevArrow: <div style={{width: "30px", marginRight: "-30px",color:'white'}}><img src={leftarrow}  style={{width: "30px", marginRight: "-30px",color:'white'}}/></div>,
            nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
          
          }
        return (
            <div>
               <section id="schedules" className="schedule section-padding">
          <div className="container eve">
            <div className="row">
              <div className="col-12">
                <div className="section-title-header text-center">
                  <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Events</h1>
                  <hr className="schedule-hr1" />
                  <hr className="schedule-hr2" />
                  <p className="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor</p>
                </div>
              </div>
            </div>
            <div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
              <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
                <div className="table-responsive">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <Link className="nav-link active"   to="/Events"  onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} >
                        <div className="item-text">
                          <h4>AGRIPRENEURSHIP SUMMIT</h4>
                          <h5>Guest Lectures</h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link"   to="/Events2" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}>
                        <div className="item-text">
                          <h4>Manthan</h4>
                          <h5>15 February</h5>
                        </div>
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
                <div className="tab-content" style={{backgroundColor:'white'}} >
                
                
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
                          <p>Promotion of agricultural - entrepreneurship has always been a leitmotif
                            of Prakriti right from its inception. While the main emphasis of the summit
                            has always been on how Agripreneurs who have the potential of
                            combining entrepreneurial skill and modernization in öeld of agriculture
                            can play the role of catalysts in transforming the traditional farmer into
                            a modern agripreneur, time has been devoted for developing
                            agripreneurs with distinct traits and skills to exploit opportunities proliöc
                            in the öeld of agriculture .
                            <br />
                            The guests talk about the öner intricacies of their work and inspire the
                            students to take the unconventional path and do something out of the
                            box. Panel discussions like agripreneurship summit in Prakriti have
                            made a brand for themselves and remain the topic of incessant
                            discussion and a discussion and anticipation all-round the year.
                          </p>
                        
                 
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}
