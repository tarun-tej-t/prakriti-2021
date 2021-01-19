import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Link as Lin} from 'react-scroll'
import Navbar from '../../Navbar/Navbar2'

export default class Quizella extends Component {
  render() {
    return (
      <div  style={{backgroundColor:'red'}}
      >
              <Navbar nEvents="active" />
        <div
    

         
        >
          <div  style={{position:'absolute',top:'10vh',width:'80vw',left:'10vw',backgroundColor:'red'}}>
            <div class="modal-content">
              <div class="modal-header">
              
                <h4 class="modal-title" >
                  QUIZELLA
                </h4>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                    <h3>Event Description</h3>
                    <div class="separator-2"></div>
                    <p>
                      <h5>
                        It is said “Knowledge is Power” which proves itself time
                        and again. To test the knowledge of the students in
                        general awareness of the world around us and technical
                        questions from the field of agriculture, we bring to you
                        the Agro-tech quiz named, named “Quizella”. It would
                        provide a platform to the best minds of India in the
                        field of Agricultural and Food Engineering to test their
                        excellence amongst others and find out their stand.
                        Having a wide variety of questions from direct ones to
                        audio-visual, this event will surely keep all you
                        participants in full charge of your senses.
                      </h5>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 col-xs-12">
                    <h3>Rules</h3>
                    <strong>**THIS EVENT WILL NOW BE CONDUCTED ONLINE**</strong>
                    <br />
                    <br />
                    <ul class="list" style={{textAlign:"left"}}>
                      The online quiz will be conducted in two phases.
                      Participants can appear for any one or both of them :
                      <br />
                      <br />
                      <strong>I. GENERAL QUIZ :</strong> This online quiz tests
                      the knowledge of the students in general awareness of the
                      world around us and technical questions from our everyday
                      life.
                      <li>
                        <i class="icon-check-1"></i> 1.The date of the quiz is
                        21st March,2020 (Saturday..
                      </li>
                      <li>
                        <i class="icon-check-1"></i> 2.Total Prize Money: INR
                        4000.{" "}
                      </li>
                      <br />
                      <strong>II. AGRO-FOOD QUIZ :</strong> This online quiz
                      tests the knowledge of the students in the field of
                      Agricultural and Food Engineering which includes a wide
                      variety of questions providing you an efficient platform
                      to showcase your expertise in your respective field..
                      <li>
                        <i class="icon-check-1"></i> 1.The date of the quiz is
                        22nd March,2020 (Sunday..
                      </li>
                      <li>
                        <i class="icon-check-1"></i> 2.Total Prize Money: INR
                        4000.
                      </li>
                      <br />
                      <strong>
                        General instructions for both the quizzes :
                      </strong>
                      <br />
                      <li>
                        <i class="icon-check-1"></i> 1. Participants who have
                        registered online would be able to participate.
                      </li>
                      <li>
                        <i class="icon-check-1"></i> 2. This is an Individual
                        Event.
                      </li>
                      <li>
                        <i class="icon-check-1"></i> 3. There is no Negative
                        marking. The answer once submitted, could not be
                        changed.
                      </li>
                      <li>
                        <i class="icon-check-1"></i> 4. Only 1 attempt is
                        allowed per quiz day. Do not refresh the page once the
                        quiz has started.
                      </li>
                      <li>
                        <i class="icon-check-1"></i> 5. Time taken to answer a
                        question will also taken into account while judging the
                        responses and will be used as a tie-breaker between the
                        participants.
                      </li>
                      <li>
                        <i class="icon-check-1"></i> 7. The decision of judges
                        is final and binding. Team Prakriti reserves the rights
                        to disqualify any one in case of violation of any of the
                        above rules.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-sm btn-default"
                  data-dismiss="modal"
                >
                   <Lin  to="events" spy={true} smooth={true}><Link to="/" >Back</Link></Lin>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
