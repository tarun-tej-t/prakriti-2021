import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar4";
import Slider from "./Components/Slider/Slider";
import Aboutpage from "./Components/About/Aboutpage";
import Events from "./Components/Events/Events";
import Contactus from "./Components/Contactus/Contactus";
import Testimonial from "./Components/Testimonial/Testimonial";
import {Link} from 'react-scroll'
import './nav.css'
export default class Homepage extends Component {
  
  constructor(props) {
    super(props)
    this.myRef = React.createRef()  
}


  render() {
    return (
      <div>

 
        <Slider />
        <Aboutpage />
        <Testimonial />
        <Contactus id="contactus" />
       
       
      </div>
    );
  }
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)
}
