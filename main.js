const app = require('./src/app');
const http = require('http');

http.createServer(app).listen(process.env.PORT, () => console.log(`Server lintening on http://localhost:${process.env.PORT}`));
