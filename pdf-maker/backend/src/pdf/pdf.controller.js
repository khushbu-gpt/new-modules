export const generatePdfController = async (req, res) => {
  const pdfBuffer = await PdfService.generateInvoice(req.body);
  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=invoice.pdf",
     "Content-Length": pdfBuffer.length,
  });
  res.send(pdfBuffer);
};
