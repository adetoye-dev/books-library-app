import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { extractPreview } from "../util/extractPreview";
import { useState, useEffect, useCallback } from "react";
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function PdfPreview({ isOpen, handleClose, pdfUrl }) {
  const [data, setData] = useState(null);

  const fetchPreview = useCallback(async () => {
    try {
      const data = await extractPreview(pdfUrl);

      const reader = new FileReader();

      reader.onloadend = function (e) {
        setData(e.target.result);
      };

      reader.readAsDataURL(data);
    } catch (error) {
      console.error(error);
    }
  }, [pdfUrl]);

  useEffect(() => {
    if (isOpen) {
      fetchPreview();
    }
  }, [isOpen, fetchPreview]);

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Button autoFocus onClick={handleClose}>
          Close Preview
        </Button>
      </DialogTitle>
      <DialogContent>
        {data ? (
          // <iframe src={data} width="100%" height="100%" />
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={data} />;
          </Worker>
        ) : (
          <p>Loading Book Preview...</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
