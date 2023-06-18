import dynamic from "next/dynamic";
import Script from "next/script";
import pdfjs from "../../pdf";

const PDFViewer = dynamic(() => import("../../components/pdf-reader"), {
  ssr: false,
});

function PDF() {
  return (
    <>
      <div>123123</div>
      <Script
        src={pdfjs}
        onReady={() => {
          debugger;
        }}
      ></Script>
      <PDFViewer pdfUrl="/sample.pdf" />
    </>
  );
}

export default PDF;
