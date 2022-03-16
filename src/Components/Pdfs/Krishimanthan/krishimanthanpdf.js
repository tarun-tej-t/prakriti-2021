import React from "react";

import SinglePagePDFViewer from "../SinglePagePDFViewer";
import AllPagesPDFViewer from "../AllPagesPDFViewer";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import KrishiManthanPDF from "./Krishi Manthan PS.pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import "../styles.css";

export default function KrishiManthanpdf() {
  return (
    <div className="App"><br/><br/><br/><br/>
          <p style={{textAlign:"center"}}><br/>To download the Krishi Manthan problem statement <a href="https://drive.google.com/file/d/1Fv5CZFHu7c_bjP5nADFbcd7Z4HYzZ3kq/view" target="_blank" style={{color:"red"}}>Click here</a></p>

      {/* <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={FoodquestPDF} />

      <hr />

      <h4>All Pages</h4> */}
      
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={KrishiManthanPDF} />
      </div>

       </div>
  );
}