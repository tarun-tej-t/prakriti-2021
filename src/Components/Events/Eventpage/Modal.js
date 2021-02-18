import React, { Component } from "react";

import "./modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <React.Fragment>
        {this.props.show && (
          <div className="modal1" style={{overflowY:'scroll'}}>

<div className='body999'>

  <div id="container2" >
  <div style={{boxSizing:'content-box'}}><h3 onClick={this.props.onHide} style={{cursor:'pointer',textAlign:'right' }}>&ensp;x&ensp;</h3></div>


  <main>
    <h3>Rules</h3>
      <ol>
 <li> Only those teams are allowed to participate who have registered online.</li>
  
  <li> A maximum of three members are allowed in a team and a minimum of one.</li>
  
  <li> Teams must mail their detailed description (in word or PDF form) or presentation along with the poster to contact@prkrt.co.in with the subject of the mail as “Prakriti2021_poster_presentation_Submission_abstractSubmission_team name” before the deadline (18th March,11:59 pm).</li>
  
  <li> Teams also have to submit a video-abstract, of not more than 5 minutes, explaining their description of poster or presentation before the deadline(20th March,11:59pm).</li>
  
  <li> NOTE:-In the video-abstract the voice of the presenting member must be clear.</li>
  
  <li> On the basis of video-abstract,teams will be selected for the second round(Question and Answer round) which will be conducted preferably live through Google Hangouts on the day of the event.</li>
  
  <li> The video-abstract of each team must not exceed 5 minutes and exceeding the time limit can lead to the imposition of penalties on the teams.</li>
  
  <li> The submission abstract or presentation must contain the team name, team members name, contact number,mail address and college they belong to.</li>
  
  <li> If any plagiarised content is found it can lead to the imposition of penalties on the teams.</li>
  
  <li>The decision of judges is final and binding. Team Prakriti reserves the right to disqualify any team in case of violation of any of the above rules.</li>
  
   <h5>Total Prize Money:- INR 8000.</h5>
</ol>
<ol>
 <li> Only those teams are allowed to participate who have registered online.</li>
  
  <li> A maximum of three members are allowed in a team and a minimum of one.</li>
  
  <li> Teams must mail their detailed description (in word or PDF form) or presentation along with the poster to contact@prkrt.co.in with the subject of the mail as “Prakriti2021_poster_presentation_Submission_abstractSubmission_team name” before the deadline (18th March,11:59 pm).</li>
  
  <li> Teams also have to submit a video-abstract, of not more than 5 minutes, explaining their description of poster or presentation before the deadline(20th March,11:59pm).</li>
  
  <li> NOTE:-In the video-abstract the voice of the presenting member must be clear.</li>
  
  <li> On the basis of video-abstract,teams will be selected for the second round(Question and Answer round) which will be conducted preferably live through Google Hangouts on the day of the event.</li>
  
  <li> The video-abstract of each team must not exceed 5 minutes and exceeding the time limit can lead to the imposition of penalties on the teams.</li>
  
  <li> The submission abstract or presentation must contain the team name, team members name, contact number,mail address and college they belong to.</li>
  
  <li> If any plagiarised content is found it can lead to the imposition of penalties on the teams.</li>
  
  <li>The decision of judges is final and binding. Team Prakriti reserves the right to disqualify any team in case of violation of any of the above rules.</li>
  
   <h5>Total Prize Money:- INR 8000.</h5>
</ol>
<ol>
 <li> Only those teams are allowed to participate who have registered online.</li>
  
  <li> A maximum of three members are allowed in a team and a minimum of one.</li>
  
  <li> Teams must mail their detailed description (in word or PDF form) or presentation along with the poster to contact@prkrt.co.in with the subject of the mail as “Prakriti2021_poster_presentation_Submission_abstractSubmission_team name” before the deadline (18th March,11:59 pm).</li>
  
  <li> Teams also have to submit a video-abstract, of not more than 5 minutes, explaining their description of poster or presentation before the deadline(20th March,11:59pm).</li>
  
  <li> NOTE:-In the video-abstract the voice of the presenting member must be clear.</li>
  
  <li> On the basis of video-abstract,teams will be selected for the second round(Question and Answer round) which will be conducted preferably live through Google Hangouts on the day of the event.</li>
  
  <li> The video-abstract of each team must not exceed 5 minutes and exceeding the time limit can lead to the imposition of penalties on the teams.</li>
  
  <li> The submission abstract or presentation must contain the team name, team members name, contact number,mail address and college they belong to.</li>
  
  <li> If any plagiarised content is found it can lead to the imposition of penalties on the teams.</li>
  
  <li>The decision of judges is final and binding. Team Prakriti reserves the right to disqualify any team in case of violation of any of the above rules.</li>
  
   <h5>Total Prize Money:- INR 8000.</h5>
</ol>
     </main>
     <button onClick={this.props.onHide} style={{position:'fixed',top:'90vh',right:'2vw'}}>Close</button>

  </div>
</div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
