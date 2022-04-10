import React from "react";
import '../EventResult.css';
import '../Results.css';

function ResultPosterPresentation() {
  return (
    <div className="ResultCard">
      <div className="ResultCard__Cell ResultCard__Event--PosterPresentation">
        <img
          src="https://raw.githubusercontent.com/hariomvc/prakriti-images/main/Events/PosterPresentation.png"
          alt="Winner's Image"
          class="ResultCard__Image"
        />
        <div className="ResultCard__Detials">
          <h2 className="ResultCard__EventName"> Poster Presentation </h2>
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
                FOOD ASPIRANT
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                M.O.P. Vaishnav College for Women
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
                Aaradhya Mahi
              </span>
              <span className="ResultCard__Winner--sub ResultCard__Winner--block">
                College Of Agricultural Engineering, Birsa Agriculture
                University
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
                Team_1
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

export default ResultPosterPresentation;