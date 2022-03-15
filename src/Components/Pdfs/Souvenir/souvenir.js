import React from "react";

import SinglePagePDFViewer from "../SinglePagePDFViewer";
import AllPagesPDFViewer from "../AllPagesPDFViewer";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import FoodquestPDF from "./Souvenir.pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import "../styles.css";

export default function Souvenirpdf() {
  return (
    <div className="App"><br/><br/><br/><br/>
      <p style={{textAlign:"center"}}><br/>To download the Souvenir <a href="https://drive.google.com/file/d/1h04bdJLSlAazSNF-xQ6vD0pXJJcSD_rq/view?usp=sharing" target="_blank" style={{color:"red"}}>Click here</a></p>
      
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={FoodquestPDF} />
      </div>

       </div>
  );
}