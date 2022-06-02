import "./Modal.css";
//import img1 from './apple.png'
import Eventcard from "../Events_new/Eventcard";

const Modal=({handleClose,show})=>{
 const showHideClassName=show ? "modal display-block" :"modal display-none";
 return(
     <div className={showHideClassName}>
      <section className="modal-main">
      
      
     <Eventcard
              cname="blog-card-e"
              sponsor="https://raw.githubusercontent.com/tarun-tej-t/prakriti-2021/master/src/Components/Events_new/eggozlogo.png"
              poster="https://github.com/mridulaburagohain/wendev/blob/main/egg.png?raw=True"
              name="Crack The Egg Challenge"
              tagline="Think out of the box and design an innovative food product"
              prizemoney="90,000"
              description="The ever-changing work culture has affected the
            lifestyle of Indians. Sometimes, the breakfast and
            lunch meals get missed due to workload and lead
            to eating outside where major consumption is of
            fast food. To promote healthy eating,
            team-PRAKRITI has come up with the Food Quest
            event in which participants are given a particular
            nutrition requirement, and they have to come up
            with a packaged food idea to meet those
            requirements. The final food should be tasty,
            healthy, and appealing to the consumers."
              deadline="30th June 2022"
              ps="https://bit.ly/PScracktheeggchallenge"
              submit="https://bit.ly/CracktheeggSubmission"

            />
      <button onClick={handleClose}>Close</button>
      </section>
     </div>
 )
}

export default Modal;