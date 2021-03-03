import React, { Component } from "react";
import pdf from '../../../public_html/documents/Registration Guide Manual.pdf'
import "./modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <React.Fragment>
        {this.props.show && (
          <div
          className="modal1"
          style={{ overflowY: "scroll", backgroundColor: "rgb(0,0,0,0.3)" }}
        >
          <h1
            style={{
              backgroundColor: "red",
              borderRadius: "9px",
              marginLeft: "5%",
              marginTop: "-0vh",
              position: "fixed",
              width: "90%",
              color: "white",
            }}
          >
                 Krishi-Manthan{" "}
                  <span
                    onClick={this.props.onHide}
                    style={{
                      cursor: "pointer",
                      textAlign: "right",
                      float: "right",
                    }}
                  >
                    {" "}
                    &ensp;x&ensp;
                  </span>
                </h1>
                <div id="container2">
<h2>Event Description</h2><hr/>
                <h5 style={{fontSize:'15px',fontWeight:'700',color:'#333',lineHeight:'1.2',fontFamily:'Raleway,sans-serif'}}>
                Prakriti presents to you, a new event named “Krishi-Manthan”, where the participant needs to ponder upon a particular challenge faced by the farmers. Participants need to place themselves in the situation of farmers and provide the most feasible solution based on all the relevant data which will be provided by us regarding the resources and the budget constraints. Fit in the shoes of a real farmer and tackle their problem just like you manage your pocket money.
                </h5>
                <h4>Problem Statement : <a href="https://tinyurl.com/KrishiManthan" target="_blank" style={{color:'blue'}}>Click Here</a></h4>
                <h4>Deadline for the submissions is 17 March.</h4>
<h4>To submit your abstracts with other necessary details in the google form <a  href="https://tinyurl.com/PrakritiSubmission" target="_blank" style={{color:'blue'}}>Click Here</a>
</h4>
                <span>
                  <h3>Rules</h3>
                  <h4 style={{textAlign:'left'}}>The online quiz will be conducted in two phases. Participants can appear for any one or both of them :</h4>
                  
                  <ul style={{listStyle:'none',lineHeight:'30px',fontSize:'16px'}}>
                   <li>1) Only those teams are allowed to participate who have registered online.</li>
                    <li>
                      {" "}
                      2) A maximum of five members are allowed in a team and a minimum of 3.
                    </li>

                    <li>
                      {" "}
                      3) Teams must submit their detailed abstract(in word or PDF form of not more than 12 pages) to this  google form  link   before the deadline (17th March,11:59 pm).​

                    </li>

                    <li>
                      {" "}
                      4) The submission abstract  must contain the team name, team members name, contact number, mail address and college they belong to.​

                    </li>

                    <li>
                      {" "}
                      5) On the basis of abstract ,teams will be selected for the second round(Online  Presentation and Question and Answer round on 20th March) .​
 </li>

                    <li>
                      {" "}
                      6) The presentation time of each team must not exceed 6 minutes followed by 2 minutes of Q&A round.​
 </li>
                   
                    <li>
                      {" "}
                   
                      7) Exceeding the time limit can lead to the imposition of penalties on the teams.​
 </li>

 <li>
                      {" "}
                      8) The decision of judges is final and binding. Team Prakriti reserves the right to disqualify any team in case of violation of any of the above rules.
                    </li>

                    <li>
                    9) Total Prize Money:- INR 8000.             
                           </li>

                  </ul>
                  
                </span>
                <button onClick={this.props.onHide}>Close</button>
                <br />
                <br />
                <br />
                <br />
              </div>
              </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
