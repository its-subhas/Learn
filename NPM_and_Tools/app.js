const http = require('http');
const mySyntax = require('./syntax')

const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);
  mySyntax();
});

const Port = 3001;

server.listen(Port, ()=>{
  console.log(`Server Is Running: http://localhost:${Port}`)
})