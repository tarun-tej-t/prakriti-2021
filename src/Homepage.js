import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Aboutpage from "./Components/About/Aboutpage";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import Contactus from "./Components/Contactus/Contactus";
import Testimonial from "./Components/Testimonial/Testimonial";



export default class Homepage extends Component {
  
  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "./Components/public_html/lib/nivo-slider/js/jquery.nivo.slider.js";
    script.async = true;

    document.body.appendChild(script);
  }

   

  render() {
    return (
      <div>
       <Navbar nHome="active" />
        <Slider />
        <Aboutpage id='about' />
        <Events id="services"/>
        <Testimonial/>
        <Contactus/>
        <Footer />
      </div>
    );
  }
}
