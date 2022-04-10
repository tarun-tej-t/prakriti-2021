import React from "react";
import '../EventResult.css';
import '../Results.css';

function ResultSelfieWithNature() {
  return (
    <div className="ResultCard">
      <div className="ResultCard__Cell ResultCard__Event--SelfieWithNature">
        <img
          src="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Events/SelfiewithNature.png"
          alt="Winner's Image"
          class="ResultCard__Image"
        />
        <div className="ResultCard__Detials">
          <h2 className="ResultCard__EventName"> Selfie With Nature </h2>
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
                Ruhul Amin
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                West Bengal University Of Animal And Fishery Sciences
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
                Jahid Hasan
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                Uttarbanga Krishi Viswavidyalaya
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
                Maitree Dutta
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                West Bengal University of Animal and Fishery Sciences
              </span>
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ResultSelfieWithNature;