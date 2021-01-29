import React, { Component } from 'react'
import { ReactNavbar } from "react-responsive-animate-navbar";
import logoprakriti from "../public_html/img/logo copy.png";


export default class Navbar3 extends Component {
    render() {
        return (
            <div style={{position:'fixed',top:'0',width:'100vw',zIndex:'9999999999999999999999999999999999999999'}}>
                <ReactNavbar
                style={{zIndex:'1000'}}
        color="rgb(25, 25, 25)"
        logo={logoprakriti}
        menu={[
          { name: "HOME", to: "/" },
          { name: "Team", to: "/Team" },
          { name: "Sponsors", to: "/#/Sponsors" },
          { name: "Registration", to: "#/Registrarion" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/tarun-tej-thadana-3b89b91a5",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/prkrt.iitkgp",
            icon: ["fab", "facebook-f"],
          },
         
        ]}
      />
            </div>
        )
    }
}
