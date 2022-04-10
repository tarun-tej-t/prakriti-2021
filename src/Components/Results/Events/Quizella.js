import React from "react";
import '../EventResult.css';
import '../Results.css';

function ResultQuizella() {
  return (
    <div>
      <div className="ResultCard">
        <div className="ResultCard__Cell ResultCard__Event--Quizella">
          <img
            src="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Events/Quizella.png"
            alt="Winner's Image"
            class="ResultCard__Image"
          />
          <div className="ResultCard__Detials">
            <h2 className="ResultCard__EventName"> Quizella - General Quiz </h2>
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
                  Sourabh Nand Tiwary
                </span>
                <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                  Birsa Agricultural University, Ranchi
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
                  Samiran Mukherjee
                </span>
                <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                  West Bengal University of Animal and Fishery Sciences
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
                  Jaydev Mahto
                </span>
                <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                  College of Agriculture Engineering Ranchi
                </span>
              </div>
            </h4>
          </div>
        </div>
      </div>
      <div className="ResultCard">
        <div className="ResultCard__Cell ResultCard__Event--Quizella">
          <img
            src="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Events/Quizella.png"
            alt="Winner's Image"
            class="ResultCard__Image"
          />
          <div className="ResultCard__Detials">
            <h2 className="ResultCard__EventName"> Quizella - Agro Quiz</h2>
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
                  Megha Kumari
                </span>
                <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                  College Of Agricultural Engineering, Ranchi
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
                  Samiran Mukherjee
                </span>
                <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                  West Bengal University of Animal and Fishery Sciences
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
                  Sourabh Nand Tiwary
                </span>
                <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                  Birsa Agricultural University, Ranchi
                </span>
              </div>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultQuizella;