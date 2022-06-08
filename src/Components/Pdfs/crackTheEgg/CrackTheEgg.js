import React from "react";

import SinglePagePDFViewer from "../SinglePagePDFViewer";
import AllPagesPDFViewer from "../AllPagesPDFViewer";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import CrackTheEgg from "./CrackTheEggps.pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import "../styles.css";

export default function CrackTheEggpdf() {
  return (
    <div className="App"><br/><br/><br/><br/>
          <p style={{textAlign:"center"}}><br/>To download the Crack The Egg Challenge problem statement <a href="https://drive.google.com/file/d/1VCC6y9ubG3RQqotHPfDk80kfs9kVP4iC/view?usp=sharing" target="_blank" style={{color:"red"}}>Click here</a></p>

      {/* <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={CrackTheEgg} />

      <hr />

      <h4>All Pages</h4> */}
      
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={CrackTheEgg} />
      </div>

       </div>
  );
}