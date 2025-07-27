// server.js
const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Enable CORS for frontend testing

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/download-pdf', async (req, res) => {
  try {
    const url = 'https://www.wikipedia.org';
    const pdfPath = path.join(__dirname, 'output.pdf');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
    });
    await browser.close();

    res.download(pdfPath, 'Wikipedia.pdf', (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Failed to send file');
      } else {
        fs.unlink(pdfPath, () => {}); // Optional: clean up
      }
    });

  } catch (error) {
    console.error('❌ PDF generation error:', error);
    res.status(500).send('Error generating PDF');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/download-pdf`);
});
