const http = require('http');
const {requestListener} = require('./Practics01a')

const server = http.createServer(requestListener);
const PORT = 3000;

server.listen(PORT, ()=>{
 console.log(`Server running on http://localhost:${PORT}`);
});