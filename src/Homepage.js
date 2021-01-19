import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar2";
import Slider from "./Components/Slider/Slider";
import Aboutpage from "./Components/About/Aboutpage";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
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
        <marquee style={{zIndex:"10", position:"absolute", left:'5px',top:'80px', fontFamily: 'sans-serif', backgroundColor:'black', marginRight: '20px', fontSize:'12pt', fontWeight: 'bold', color:'yellow', height:'34px', border:'black 3px SOLID',scrollamount:"9"}}> <strong>Results of 'PRAKRITI 2020' are out !!</strong>&nbsp;&nbsp;&nbsp; The events were conducted in Online mode  due to outbreak of the pandemic caused by (COVID-19) !! &nbsp;&nbsp;&nbsp; For any query, you can contact us on our contact@prkrt.co.in or  Facebook page!</marquee>

       <Navbar nHome="active" />
        <Slider />
        <Aboutpage  />
        <Events  />
        <Testimonial/>
        <Contactus/>
        <Footer />
      </div>
    );
  }
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)
}
