const http = require('http');
 
const hostname = 'local host';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.end('Hello World');
});
 
server.listen(port);
 