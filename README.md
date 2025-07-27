# 📄 Website to PDF Generator using Node.js & Puppeteer

This is a simple Node.js project that uses [Puppeteer](https://pptr.dev/) to convert a live website (like Wikipedia) into a PDF file and automatically downloads it when you send a GET request.

## 🧰 Features

- Convert any public webpage URL into a PDF
- Automatically download the PDF to the user's system
- Can be tested via Postman or integrated into a frontend app
- Deletes PDF from the server after sending to keep things clean

---

## 🚀 Getting Started

### 📦 Dependencies

- [Node.js](https://nodejs.org/)
- [Express](https://www.npmjs.com/package/express)
- [Puppeteer](https://www.npmjs.com/package/puppeteer)



## 🔧 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/website-to-pdf-generator.git
   cd website-to-pdf-generator

   Install Required Packages

npm install express puppeteer

Run the Server
node URLtoPDF.js.js

Server will start at:
📍 http://localhost:3000/download-pdf

 Modify URL

To convert a different webpage, edit the following line in index.js:

const url = 'https://www.wikipedia.org';
