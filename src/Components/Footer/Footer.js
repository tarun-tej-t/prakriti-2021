import React, { Component } from "react";
import logoprakriti from "./prakriti 22.png";
import "./assets/css/style.css"
export default class Footer extends Component {
  render() {
    return ( 
      <div >
       {/*} <footer>
          <div class="footer-area-bottom" >
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="copyright text-center">
                    <p>
                      &copy; Copyright <strong>Prakriti</strong>. All Rights
                      Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </footer>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet" />
       Vendor CSS Files */}
          {/*<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/venobox/venobox.css" rel="stylesheet" />
        <link href="assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
         Template Main CSS File */}
        {/*<link href="assets/css/style.css" rel="stylesheet" />
        <a href="/" className="back-to-top"><i className="fa fa-angle-up" /></a>*/}
          <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <img src={logoprakriti} alt="TheEvenet" style={{height:'60px'}} />
                <p style={{ textAlign: "justify",
                      textJustify: "inter-word"}}> Prakriti is an Agri and Food Innovation Fest organized by the students of
          
          the Department of Agricultural and Food Engineering, IIT Kharagpur,
         
          targeting the amalgamation of academia and industry associated
         
          with the agricultural and food sector.</p>
              </div>
           
              <div className="col-lg-4 col-md-6 footer-links">
                <h4 >Useful Links</h4>
                <ul >
                  <li><i className="fa fa-angle-right" /> <a href="" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} >Home</a></li>
                  <li><i className="fa fa-angle-right" /> <a href="Events" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} >Events</a></li>
                  <li><i className="fa fa-angle-right" /> <a href="Team" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} >Team</a></li>
                  <li><i className="fa fa-angle-right" /> <a href="Sponsors" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} >Sponsors</a></li>
                  <li><i className="fa fa-angle-right" /> <a href="Registration" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }} >Registration</a></li>
                </ul>
              </div>
             
              <div className="col-lg-4 col-md-6 footer-contact" >
                <h4>Contact Us</h4>
                <p>
                  Department of Agricultural and Food Engineering <br />
                  Agricultural Engineering Society<br />
                  IIT Kharagpur <br />
                West Bengal <br />
                India <br />
                  <strong>Phone:</strong> +91 7602099943<br />
                  <strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</strong> +91 8240533450<br />
                  <strong>Email:</strong> contact@prkrt.co.in<br />
                
                </p>
              
                <div className="social-links">
                  <p>Follow us</p>
                  <a href="https://www.facebook.com/prkrt.iitkgp/" className="facebook" target='_blank'> <i class="fa fa-facebook-official"></i></a>
                  <a href="https://www.instagram.com/prkrt.iitkgp/" className="instagram" target='_blank'><i className="fa fa-instagram" /></a>
                  <a href="https://www.linkedin.com/company/prakriti-iitkgp/" className="linkedin"   target='_blank'><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="credits">
          &copy; Copyright <strong>Prakriti</strong>. All Rights
                      Reserved
          </div>
          <div className="credits">
          </div>
        </div>
      </footer>
      </div>
    );
  }
}
