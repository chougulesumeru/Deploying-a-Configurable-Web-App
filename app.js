const http = require('http');
const fs = require('fs');

// Read config from files (injected by ConfigMap)
const config = {
  message: fs.readFileSync('/etc/config/message.txt', 'utf8').trim(),
  version: fs.readFileSync('/etc/config/version.txt', 'utf8').trim(),
  port: parseInt(fs.readFileSync('/etc/config/port.txt', 'utf8').trim()) || 3000
};

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`${config.message} Version: ${config.version}`);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});