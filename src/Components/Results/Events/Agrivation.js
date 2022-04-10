import React from "react";
import '../EventResult.css';
import '../Results.css';

function ResultAgrivation() {
  return (
    <div className="ResultCard">
      <div className="ResultCard__Cell ResultCard__Event--Agrivation">
        <img
          src="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Events/Agrivation.png"
          alt="Winner's Image"
          class="ResultCard__Image"
        />
        <div className="ResultCard__Detials">
          <h2 className="ResultCard__EventName"> Agrivation </h2>
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
              Azeedo
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
              Graduate School of Management Studies
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
              ATHULYA
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
              Harcourt Butler Technical University
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
              Wormeal
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
              IIT Kharagpur
              </span>
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ResultAgrivation;