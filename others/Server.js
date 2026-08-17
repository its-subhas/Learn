const http = require("http");
const requestListener = require("./parsing_request");

const server = http.createServer(requestListener);
const port = 3000;

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
