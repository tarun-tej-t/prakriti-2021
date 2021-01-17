import React, { Component } from 'react'

export default class Contactus extends Component {
    render() {
        return (
            <div>
                 <div id="contact" class="contact-area">
    <div class="contact-inner area-padding">
      <div class="contact-overly"></div>
      <div class="container ">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h2>Contact us</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {/* Start contact icon column */}
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="fa fa-mobile"></i>
                <p>
                  Call+Whatsapp: 7479370099 <br/>
                  Call+Whatsapp: 9694533544; 9304037602
                </p>
              </div>
            </div>
          </div>
          {/* Start contact icon column */}
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="fa fa-envelope-o"></i>
                <p>
                  Email: contact@prkrt.co.in<br/>
                  
                </p>
              </div>
            </div>
          </div>
          {/* Start contact icon column */}
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                  <a href="https://www.facebook.com/prkrt.iitkgp/" target="_blank">
                <i class="fa fa-facebook-official"></i>
                <p>
                    Prakriti
                </p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}
