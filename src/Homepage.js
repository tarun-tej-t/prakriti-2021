import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar2";
import Slider from "./Components/Slider/Slider";
import Aboutpage from "./Components/About/Aboutpage";
import Events from "./Components/Events/Events";
import Contactus from "./Components/Contactus/Contactus";
import Testimonial from "./Components/Testimonial/Testimonial";
import {Link} from 'react-scroll'

export default class Homepage extends Component {
  
  constructor(props) {
    super(props)
    this.myRef = React.createRef()  
}

   

  render() {
    return (
      <div>
 
      
        <Slider />
        <Aboutpage  />
        <Events  />
        <Testimonial/>
        <Contactus/>
       
       
      </div>
    );
  }
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)
}
