import React, { useState,Component } from "react";

import logoprakriti from "../public_html/img/logo copy.png";
import { Link as Lin } from "react-scroll";
import { Link } from "react-router-dom";
import bars from './list-solid.svg'
import close from './close.svg'



import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  

  return (
    <div
      className="header1"
      
      style={{
        position: "fixed",
        top:'0px',
        width: "100vw",
        zIndex: "9999999999999999999999999999999999999999",
        fontFamily: 'Raleway,sans-serif',
        fontSize:'1.5vw',
        fontWeight:'600'
      }}
    >
      <div className="logo-nav" >
        <div className="logo-container">
          <a href="#" className="plogo">
            <img src={logoprakriti} width="300vw" />
          </a>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} style={{fontSize:'20px'}}>Home</a>
          </li>
         
         
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#Events" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} style={{fontSize:'20px'}}>Events</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#Team" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} style={{fontSize:'20px'}}>Team</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#Sponsors" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} style={{fontSize:'20px'}}>Sponsors</a>
          </li>

          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <a href="#Registration" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} style={{fontSize:'20px'}}>Registration</a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#"  onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} style={{fontFamily:'lato', padding:'0.8vw',border:'0.2vw solid red'}} class="navother" > Home </a>
        </li>
       
        
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#Events" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} style={{fontFamily:'lato', padding:'0.8vw',border:'0.2vw solid red'}} class="navother">Events</a>
        </li>
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#Team" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} style={{fontFamily:'lato', padding:'0.8vw',border:'0.2vw solid red'}} class="navother">Team</a>
        </li>
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#Sponsors"  onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} style={{fontFamily:'lato', padding:'0.8vw',border:'0.2vw solid red'}} class="navother">Sponsors</a>
        </li>
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#Registration"  onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} style={{fontFamily:'lato', padding:'1vw'}} class="navreg">Registration</a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick} id="dhide">
        {click ? (
          <h1 className="menu-icon"><img src={close} width='30vw'/></h1>
        ) : (
          <h1 className="menu-icon"><img src={bars} width='30vw'/></h1>
        )}
      </div>
    </div>
  );
};



export default class Navbar4 extends Component {
  
componentDidMount() {
  window.addEventListener("scroll", this.handleScroll);
}

componentWillUnmount() {
  window.removeEventListener("scroll", this.handleScroll);
}

handleScroll = () => {
  if (window.scrollY > 20) {
    document.querySelector(".header1").className = "header1 scroll1";
    //document.querySelector(".plogo").className = "plogo plogoscroll";
  } else {
    document.querySelector(".header1").className = "header1";
  }
};
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

