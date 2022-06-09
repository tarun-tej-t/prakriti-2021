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
              poster="https://github.com/mridulaburagohain/wendev/blob/main/Crack-The-Egg-Challenge-Poster.png?raw=True"
              name="Crack The Egg Challenge"
              tagline="Think out of the box and design an innovative food product"
              prizemoney="90,000"
              description="PRAKRITI-2022 brings to you Crack The Egg Challenge, one of the biggest food-product development events of the year in collaboration with AFST Haldia Chapter. In this event, Eggoz Nutrition shares the major challenges and constraints of the Indian egg industry. Participants are required to address them and come up with an innovative, end-to-end egg-based product that meets the specifications mentioned in the problem statement.
"
              deadline="15th July 2022"
              ps="https://www.prkrt.co.in/crack-the-egg-ps"
              submit="https://bit.ly/CracktheeggSubmission"

            />
      <button onClick={handleClose}>Close</button>
      </section>
     </div>
 )
}

export default Modal;