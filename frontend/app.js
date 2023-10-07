const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Make a GET request to the backend API
    http.get('http://backend.mms.com:8000/api/data', (apiRes) => {
      let data = '';

      apiRes.on('data', (chunk) => {
        data += chunk;
      });

      apiRes.on('end', () => {
        // Display the fetched data on the webpage
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <html>
            <head>
              <title>Simple Frontend</title>
            </head>
            <body>
              <h1>Data from Python Backend:</h1>
              <pre>${JSON.stringify(JSON.parse(data), null, 2)}</pre>
            </body>
          </html>
        `);
      });
    });
  } else {
    // Handle other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Frontend server is running on port 3000');
});

