import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function PdfPreview({ isOpen, handleClose, pdfUrl }) {
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
        <iframe
          src={`${pdfUrl}#view=fitH`}
          title="Book Title"
          height="100%"
          width="100%"
        />
      </DialogContent>
    </Dialog>
  );
}
