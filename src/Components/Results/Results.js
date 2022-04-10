import React from "react";
import './Results.css';

//Importing Individual Event Cards
import ResultAgrivation from "./Events/Agrivation";
import ResultKrishManthan from "./Events/KrishiManthan";
import ResultPosterPresentation from "./Events/PosterPresentation";
import ResultQuizella from "./Events/Quizella";
import ResultSelfieWithNature from "./Events/SeflieWithNature";
import ResultTresureHunt from "./Events/TreasureHunt";

function Result() {
  return (
    <div className="Result">
      <h1 className="Result__PageTitle">Results</h1>
      <ResultAgrivation/>
      <ResultKrishManthan/>
      <ResultPosterPresentation/>
      <ResultQuizella/>
      <ResultSelfieWithNature/>
      <ResultTresureHunt/>
    </div>
  );
}

export default Result;