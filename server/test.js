var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Keep Pixploring');
}).listen(2222, "173.255.247.105");

console.log('Server running...');

