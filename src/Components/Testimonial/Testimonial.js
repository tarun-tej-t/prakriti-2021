import React, { Component } from "react";
import Slider from "@farbenmeer/react-spring-slider";

export default class Testimonial extends Component {
  render() {
    return (
      <div>
        <Slider
			activeIndex={2}
			slidesAtOnce={2}
			auto
			hasBullets
		
		>
			<div>chi <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />ld 1 b</div>
			<div>child 2</div>
			<div>child 3</div>
		</Slider>
    <Slider hasBullets bulletStyle={{ backgroundColor: "#fff",color:'white' }}>
    <div>child 1</div>
			<div>child 2</div>
			<div>child 3</div>
</Slider>
        <div class="testimonials-area">
          <div class="testi-inner area-padding">
            <div class="testi-overly"></div>
            <div class="container ">
              <div class="row">
              
                <div class="col-md-12 col-sm-12 col-xs-12">
                  {/* Start testimonials Start */}
                  <div class="testimonial-content text-center">
                    <a class="quate" href="#">
                      <i class="fa fa-quote-right"></i>
                    </a>
                    {/* start testimonial carousel */}
                    <div class="testimonial-carousel">
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
                      {/* End single item */}
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
