import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} style={{maxWidth:"95vw"}} />
      ))}
    </Document>
  );
}