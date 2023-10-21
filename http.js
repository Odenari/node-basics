const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our Home page');
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
	<h2>Ooops</h2>
	<p>We cant seem to find the page you are looking for</p>
	<a href="/">Back to home</a>
	`);
});

server.listen(5000);
