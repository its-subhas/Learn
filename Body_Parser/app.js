const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("/", (req, res, next) => {
  console.log("Middleware First", req.url, req.method);
  next();
});

app.get("/form", (req, res, next) => {
  console.log("Middleware Second", req.url, req.method);
  res.send(`
    <h1>Welcome to the Form</h1>
    <form action="/submited" method="POST">
     <input type="text" name="name" placeholder="Enter Your Name">
     <input type="text" name="email" placeholder="Enter Your email">
     <input type="submit">
     </form>
    `);
});

app.post("/submited", (req, res, next) => {
  console.log("Middleware Third", req.url, req.method);
  next();
});

app.use(bodyParser.urlencoded());

app.post("/submited", (req, res, next) => {
  console.log("Middleware Third", req.url, req.method, req.body);
  res.send("<h1>Form Submited Successfully !</h1>");
});

const Port = 3000;

app.listen(Port, () => {
  console.log(`Server running: http://localhost:${Port}`);
});
