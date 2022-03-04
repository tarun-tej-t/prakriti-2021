import React, { useState,Component } from "react";
import { useLocation } from 'react-router-dom';
import logoprakriti from "./prakriti 22.png";

import { Link } from "react-router-dom";
import bars from './list-solid.svg'
import close from './close.svg'
import Scroll from "react-scroll"; 
import "./header.css";


const usePathname = () => {
  const location = useLocation();
  return location.pathname;
}


const Header = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const lw='230px';


  return (
    <div>
      <div
        className= {window.location.pathname==="/" ? "header1":"header1 scroll1"}
      
        style={{
          position: "fixed",
          top:'0px',
          width: "100vw",
          zIndex: "9999999999999999999999999999999999999999",
          fontFamily: 'Raleway,sans-serif',
         
          fontWeight:'900'
        }}
      >
        <div  >
          <div >
            <a href="/" >
              <img src={logoprakriti} width={lw} />
            </a>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="/" onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }} style={{fontSize:'20px',textDecoration:'none'}}>HOME</a>
            </li>
      
      
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="Events" onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }} style={{fontSize:'20px',textDecoration:'none'}}>EVENTS</a>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="Team" onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }} style={{fontSize:'20px',textDecoration:'none'}}>TEAM</a>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="Sponsors" onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }} style={{fontSize:'20px',textDecoration:'none'}}>SPONSORS</a>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="Blog" onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }} style={{fontSize:'20px',textDecoration:'none',color:'red'}}>
                  BLOG
               </a>
            </li>
            <li className=" option mobile-option" onClick={closeMobileMenu}>
              <a href="Registration" onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }} style={{fontSize:'20px',textDecoration:'none'}}>REGISTRATION</a>
            </li>
            <li className=" option mobile-option" onClick={closeMobileMenu}>
              <a href="https://tinyurl.com/Prakriti21Submission" onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }} style={{fontSize:'20px',textDecoration:'none'}} target="_blank">SUBMIT</a>
            </li>
          </ul>
        </div>
        <ul className="signin-up">
          <li className="sign-in" onClick={closeMobileMenu}>
            <a href="/"  onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }}  class="navother" >HOME</a>
          </li>
      
      
          <li className="sign-in" onClick={closeMobileMenu}>
            <a href="Events" onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }}  class="navother">EVENTS</a>
          </li>
          <li className="sign-in" onClick={closeMobileMenu}>
            <a href="/blog"  onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }}  class="navother" style={{cursor:'pointer'}}>Blog</a>
          </li>
       
          <li className="sign-in" onClick={closeMobileMenu}>
            <a href="Sponsors"  onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }}  class="navother" >SPONSORS</a>
          </li>
          <li className="sign-in" onClick={closeMobileMenu}>
            <a href="Team" onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }}  class="navother">TEAM</a>
          </li>
          <li className="sign-in" onClick={closeMobileMenu}>
            <a href="Registration"  onClick={() => {
                    window.scroll({
                      left: 0,
                      top: 0,
                      behavior: "smooth",
                    });
                  }} style={{fontFamily:'lato', padding:'0.7vw',textDecoration:'none',letterSpacing:'2.5px'}} class="navreg">REGISTRATION</a>
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
  

  if (window.scrollY > 20 || window.location.pathname!=="/") {
    document.querySelector(".header1").className = "header1 scroll1";

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

