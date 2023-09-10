// Tyler Tobin
// Server pushing HTML file


// Modules
const http = require('http');
const file_sys = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  // Reading the HTML file
  const filePath = path.join(__dirname, 'index.html');
  file_sys.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});


const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
