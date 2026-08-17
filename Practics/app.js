const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("Third Middleware", req.url, req.method);
//   res.send("<P>Welcome To Express JS</p>")
// });

app.get("/", (req, res, next) => {
  console.log("Handling for (/) get Request", req.url, req.method);
  res.send("<h1>Welcome To Express JS / Handling</h1>");
});

app.get("/contact", (req, res, next) => {
  console.log("Handling for (/contact) get Request", req.url, req.method);
  res.send(`<h1>Welcome To Express JS /contact Handling</h1>
     <form action="/contact" method="POST">
     <input type="text" name="name" placeholder="Enter Your Name">
     <input type="text" name="email" placeholder="Enter Your email">
     <input type="submit">
     </form>
    `);
});

app.post("/contact", (req, res, next) => {
  console.log("Handling for (/contact) post Request", req.url, req.method);
  res.send("<h1>We will connect you soon.");
});

const Port = 3000;
app.listen(Port, () => {
  console.log(`Server Is Running: http://localhost:${Port}`);
});
