const app = require('./src/app');
const http = require('http');

http.createServer(app).listen(3000, () => console.log('Server lintening on http://localhost:3000'));
