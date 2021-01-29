import React, { useState } from "react";

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
      className="header"
      style={{
        position: "fixed",
        top: "0",
        width: "100vw",
        zIndex: "9999999999999999999999999999999999999999",
      }}
    >
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <img src={logoprakriti} style={{ width: "250px" }} />
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
                }}>Home</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#">
              <Lin to="about" spy={true} smooth={true}>
                <Link to="/" onClick={() => {
                  window.scroll({
                    left: 0,
                    top:1000,
                    behavior: "smooth",
                  });
                }}>About</Link>
              </Lin>
            </a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#">
              <Lin to="events" spy={true} smooth={true}>
                <Link to="/" onClick={() => {
                  window.scroll({
                    left: 0,
                    top:2000,
                    behavior: "smooth",
                  });
                }}>Events</Link>
              </Lin>
            </a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#Team" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}>Team</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#Sponsors" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}>Sponsors</a>
          </li>

          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <a href="#Registration" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}>Registrarion</a>
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
                }}>Home</a>
        </li>
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">
            <Lin to="about" spy={true} smooth={true}>
              <Link to="/" onClick={() => {
                  window.scroll({
                    left:0,
                    top: 900,
                    behavior: "smooth",
                  });
                }}>About</Link>
            </Lin>
          </a>
        </li>
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">
            <Lin to="events" spy={true} smooth={true}>
              <Link to="/" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 2000,
                    behavior: "smooth",
                  });
                }}>Events</Link>
            </Lin>
          </a>
        </li>
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#Team" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}>Team</a>
        </li>
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#Sponsors"  onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}>Sponsors</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="#Registration"  onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}>Registrarion</a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick} id="dhide">
        {click ? (
          <h1 className="menu-icon"><img src={close} width='30px'/></h1>
        ) : (
          <h1 className="menu-icon"><img src={bars} width='30px'/></h1>
        )}
      </div>
    </div>
  );
};

export default Header;
