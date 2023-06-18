import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../../components/pdf-reader"), {
  ssr: false,
});

function PDF() {
  return (
    <>
      <div>123123</div>

      <PDFViewer pdfUrl="/sample.pdf" />
    </>
  );
}

export default PDF;
