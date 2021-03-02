import React, { Component } from "react";
import Slider from "@farbenmeer/react-spring-slider";
import { Fade } from "react-slideshow-image";

export default class Testimonial extends Component {
  
  render() {
    const zoomOutProperties = {
      indicators: (i) => <div className="indicator" style={{borderRadius:'50%'}}><div style={{backgroundColor:'white',borderRadius:'50%',padding:'5px'}}></div></div>,

      scale: 0.1,

      duration: 8000,
      transitionDuration: 1000,
      infinite: true,
      canSwipe:true,
      prevArrow: (
        <div style={{ width: "30px", marginRight: "-30px", color: "white" }}>
          <img
        
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
           
          </svg>
        </div>
      ),
    };
    return (
      <div>
       
        <div class="testimonials-area">
          <div class="testi-inner area-padding">
            <div class="testi-overly"></div>
            <div class="container ">
              <div class="row">
              
                <div class="col-md-12 col-sm-12 col-xs-12">
                  {/* Start testimonials Start */}
                  <div class="testimonial-content text-center">
                    <span class="quate" >
                      <i class="fa fa-quote-right"></i>
                    </span>
                    {/* start testimonial carousel */}
                    <div class="testimonial-carousel">
                    <Fade {...zoomOutProperties}>
                  
                   
                    <div className="each-fade">
                      <div className="image-container">
                      <div class="single-testi">
                        <div class="testi-text">
                          <p>
                            I am happy to see another remarkable edition of the
                            our departmental annual fest , Prakriti. The
                            department fest of Agricultural and Food Engineering
                            has become a well known national event attracting
                            students across the country ,with diverse events
                            both online and offline focusing on analysis problem
                            solving in the field of agriculture as well as
                            industrial applications. This fest gives you the
                            opportunity to interact with your peers and listen
                            to field experts in the country, I therefore urge
                            you to participate in the 12th edition of Prakriti
                            and understand the future lying ahead. {" "}
                          </p>
                          <h6>
                            From the Desk of Head Of Department, Prof. Rintu Banerjee
                          </h6>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                      <div class="single-testi">
                        <div class="testi-text">
                          <p>
                            The growth of Prakriti has been astonishing from
                            where it had started, it has nurtured many young
                            minds all over the India and given them the
                            opportunity to challenge each other. I personally
                            believe, that it's one of those fest where people
                            actually enjoy while showcasing their raw talent and
                            this year we also plan to make the event more
                            competitive and valuable for your future. I advise
                            you all attend in large numbers and make the event a
                            great success. See you soon at IIT Kharagpur.
                          </p>
                          <h6>
                            From the Desk of Chairperson, Prof Rajendra Machavaram .{" "}
                          </h6>
                        </div>
                      </div>
                      </div>
                    </div>
                  </Fade>
                      
                      {/* End single item */}
                    </div>
                  </div>
                  {/* End testimonials end */}
                </div>
                {/* End Right Feature */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
