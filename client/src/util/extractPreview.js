import { PDFDocument } from "pdf-lib";

async function extractPreview(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const pdfData = await response.arrayBuffer();
  const pdf = await PDFDocument.load(pdfData, { ignoreEncryption: true });
  const pages = pdf.getPages();

  const output = await PDFDocument.create();
  const pageCount = Math.min(3, pages.length);

  const pageIndexes = [];
  for (let i = 0; i < pageCount; i++) {
    pageIndexes.push(i);
  }

  const copiedPages = await output.copyPages(pdf, [...pageIndexes]);

  for (let i = 0; i < copiedPages.length; i++) {
    output.addPage(copiedPages[i]);
  }

  const outputData = await output.save();
  return new File([outputData], "pdfPreview.pdf", { type: "application/pdf" });
}

export { extractPreview };
