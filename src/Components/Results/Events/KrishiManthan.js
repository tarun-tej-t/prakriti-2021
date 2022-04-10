import React from "react";
import '../EventResult.css';
import '../Results.css';

function ResultKrishiManthan() {
  return (
    <div className="ResultCard">
      <div className="ResultCard__Cell ResultCard__Event--KrishiManthan">
        <img
          src="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Events/KrishiManthan.png"
          alt="Winner's Image"
          class="ResultCard__Image"
        />
        <div className="ResultCard__Detials">
          <h2 className="ResultCard__EventName"> Krishi Manthan </h2>
          <h4 className="ResultCard__Winner">
            <div className="ResultCard__Winner--section">
              <span className="ResultCard__Winner--position ResultCard__Winner--block">
                <img
                  src="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Medals/gold.png"
                  alt="gold"
                  className="ResultCard__Winner--medal"
                />
                &nbsp;
                <span>Winner</span>
              </span>
              <span className="ResultCard__Winner--main ResultCard__Winner--block">
              Millet India
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
              IIT Kharagpur 
              </span>
            </div>
            <div className="ResultCard__Winner--section">
              <span className="ResultCard__Winner--position ResultCard__Winner--block">
                <img
                  src="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Medals/silver.png"
                  alt="gold"
                  className="ResultCard__Winner--medal"
                />
                &nbsp;
                <span>Runner-up</span>
              </span>
              <span className="ResultCard__Winner--main ResultCard__Winner--block">
              The Enthusiasts 
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
              Sher-e-Kashmir University of Agricultural Sciences and Technology
              </span>
            </div>
            <div className="ResultCard__Winner--section">
              <span className="ResultCard__Winner--position ResultCard__Winner--block">
                <img
                  src="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Medals/bronze.png"
                  alt="gold"
                  className="ResultCard__Winner--medal"
                />
                &nbsp;
                <span>2nd Runner-up</span>
              </span>
              <span className="ResultCard__Winner--main ResultCard__Winner--block">
              Krishi Vriddhi UBKV
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
              Uttar Banga Krishi Vishwavidyalaya 
              </span>
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ResultKrishiManthan;