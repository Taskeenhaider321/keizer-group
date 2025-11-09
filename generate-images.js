// generate-images.js
const { pdfToPng } = require('pdf-to-png-converter');

(async () => {
  const pages = await pdfToPng('public/pdf/communication.pdf', {
    outputFolder: 'public/pdf-images/contract',
    outputFileName: 'page-{page}.png',
  });
  console.log('Done:', pages.length, 'pages');
})();