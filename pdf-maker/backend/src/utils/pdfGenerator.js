// import puppeteer from "puppeteer";
// import path from "path";

// async function generatePDF() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // project root directory
//   const rootDir = process.cwd();

//   // relative path → absolute path
//   const htmlPath = path.join(rootDir, "template", "index.html");
//   const uploadPath = path.join(rootDir, "uploads", `invoice-${Date.now()}.pdf`);
//   // load local HTML file
//   await page.goto(`file://${htmlPath}`, {
//     waitUntil: "networkidle0",
//   });

//   // generate PDF
//   await page.pdf({
//     path: uploadPath,
//     format: "A4",
//     printBackground: true,
//   });

//   await browser.close();
//   console.log("PDF generated successfully");
// }

// generatePDF();
