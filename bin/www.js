const http = require('http');
const app = require('../app'); // express app.

const port = parseInt(process.env.PORT, 10) || 8088;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is running at the port: ', port)
});