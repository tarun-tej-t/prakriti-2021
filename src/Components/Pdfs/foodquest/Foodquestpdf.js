import React from "react";

import SinglePagePDFViewer from "../SinglePagePDFViewer";
import AllPagesPDFViewer from "../AllPagesPDFViewer";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import FoodquestPDF from "./foodquestps.pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import "./styles.css";

export default function FoodQuestpdf() {
  return (
    <div className="App"><br/><br/><br/><br/>
      {/* <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={FoodquestPDF} />

      <hr />

      <h4>All Pages</h4> */}
      
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={FoodquestPDF} />
      </div>

       </div>
  );
}