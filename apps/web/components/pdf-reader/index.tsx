// import * as pdfjsLib from "pdfjs-dist";
import * as pdfjsViewer from "pdfjs-dist/web/pdf_viewer";
import React, { useEffect } from "react";
import * as pdfjsLib from "../../pdf";
import workerSrc from "../../pdf-worker";

// Some PDFs need external cmaps.
//
const CMAP_URL = "../../node_modules/pdfjs-dist/cmaps/";
const CMAP_PACKED = true;

const PAGE_TO_VIEW = 1;
const SCALE = 1.0;

const ENABLE_XFA = true;

export default function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
  const loadPdf = React.useCallback(async () => {
    // Loading document.
    const container = document.getElementById(
      "pageContainer"
    ) as HTMLDivElement;
    if (!container) {
      return;
    }
    const loadingTask = pdfjsLib.getDocument({
      url: pdfUrl,
      cMapUrl: CMAP_URL,
      cMapPacked: CMAP_PACKED,
      enableXfa: ENABLE_XFA,
    });
    const pdfDocument = await loadingTask.promise;
    // Document loaded, retrieving the page.
    const pdfPage = await pdfDocument.getPage(PAGE_TO_VIEW);
    const eventBus = new pdfjsViewer.EventBus();
    // Creating the page view with default parameters.
    const pdfPageView = new pdfjsViewer.PDFPageView({
      container,
      id: PAGE_TO_VIEW,
      scale: SCALE,
      defaultViewport: pdfPage.getViewport({ scale: SCALE }),
      eventBus,
    });
    // Associate the actual page with the view, and draw it.
    pdfPageView.setPdfPage(pdfPage);
    return pdfPageView.draw();
  }, []);

  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
    loadPdf();
  }, []);

  return (
    <>
      <div id="pageContainer"></div>
    </>
  );
}
