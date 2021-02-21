import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coverweb from '../public_html/img/Cover_web.jpg'


export default class Aboutpage extends Component {
  render() {
    return (
      <div id="about"><div >
        <br/>   <br/><br/><br/>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h2>About Prakriti</h2>
            </div>
          </div>
        </div>
        <div class="row">
         {/*} <!-- single-well start-->*/}
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-left">
                <h4 class="sec-head">About Us</h4>
                
                <p style={{fontFamily:' Helvetica, sans-serif', fontSize: '16px', textAlign: 'left'}}>Prakriti is an initiative by the students of Indian Institute of Technology, Kharagpur, to amalgamate the academia and industry associated with the agricultural and food sector.
                </p>
                <br/>
                <br/>
              <div class="single-well">
                
                    
                    <img src="https://raw.githubusercontent.com/tarun-tej-t/Prakriti2021_images/main/prakriti2021/All%20Events%20Poster.jpg" alt="" height= '340px' width='600px' />
              
              </div>
            </div>
          </div>
         {/*single-well end-->*/}
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-middle">
              <div class="single-well" style={{textAlign:'justify',textJustify:'inter-word'}}>
                
                  <h4 class="sec-head">History</h4>
                
                <p style={{textAlign:'justify',textJustify:'inter-word'}}>
                  With its inception in 2010, Prakriti pioneered the cause of organizing an Agri and Food Innovation Fest at a national level. The first edition of Prakriti saw a huge participation from both the academic and the industrial front. Association with renowned companies like ITC, John Deere, Tetrapak and Siemens contributed significantly in catalyzing its success and helped it achieve greater heights. This year, we hope to make the fest bigger and better by extending our heartiest welcome to many more agro-based institutions and enterprises, and coalesce it with the concept of sustainability.
                </p>
                <h4 class="sec-head">Registration</h4>
                <ul>
                  
                  <li>
                    <i class="fa fa-check"></i>  The registration fee has been revised due to the shift from AT-SITE mode to ONLINE mode of conduction of the events.
                  </li>
                  <li>
                      <i class="fa fa-check"></i><Link to="Registration" onClick={() => {
                  window.scroll({
                    left: 0,
                    top: 0,
                    behavior: "smooth",
                  });
                }}><strong>CLICK HERE TO PROCEED TO THE REGISTRATION PORTAL</strong></Link>
                  </li>
                    
                  
                </ul>
                <br/>
               {/* <h4 class="sec-head">IMPORTANT NOTICE </h4>
                <ul>
                    <strong>*** RESULTS ARE OUT ***</strong><a href="Results.html" target = "_blank"> CLICK HERE</a>
                   
                  <li>
                    <i class="fa fa-check"></i> Team Prakriti is deeply grieved to announce that, this year “Prakriti 2020” will not be conducted at IIT Kharagpur Campus as planned. 
                  </li>
                  <li>
                    <i class="fa fa-check"></i> This decision has been taken in light of the order issued by the MHRD to avoid public gatherings of any sort and the present circumstances in India regarding the increasing number of cases of people getting affected by Coronavirus (COVID-19).
                  </li>
                  <li>
                      <i class="fa fa-check"></i> Please visit our 'revised' <a class="page-scroll" href="#services">Events</a> section.<br/> To cover for this  unprecedented situation, Team Prakriti has made some modifications in the events in order to conduct them entirely in online mode. 
                  </li>
                  <li>
                      <i class="fa fa-check"></i> Team Prakriti will send a <strong>Soft-copy of the certificate of merit and participation certificate</strong> at the registered mail address of the participants..
                  </li>
                  
                  
                </ul>*/}
              </div>
            </div>
          </div>
          {/*} End col*/}
        </div>
      </div>
    </div> </div>
    );
  }
}
