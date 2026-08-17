const http = require("http");

function myntra(req, res) {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practice Sets</title>
</head>
<body>
  <nav>
    <a href="/Home">Home</a>
    <a href="/About">About</a>
    <a href="/Contact">Contact</a>
    <a href="/Products">Products</a>
    <a href="/Cart">Cart</a>
  </nav>
</body>
</html>
`);
    return res.end();
  } else if (req.url === "/Home") {
    res.write("<h1>Home Page</h1>");
    return res.end();
  } else if (req.url === "/About") {
    res.write("<h1>About Page</h1>");
    return res.end();
  } else if (req.url === "/Contact") {
    res.write("<h1>Contact Page</h1>");
    return res.end();
  } else if (req.url === "/Products") {
    res.write("<h1>Products Page</h1>");
    return res.end();
  } else if (req.url === "/Cart") {
    res.write("<h1>Cart Page</h1>");
    return res.end();
  } else {
    res.write("<h1>Page Not Found !</h1>");
    return res.end();
  }
}

const server = http.createServer(myntra);

const port = 3000;

server.listen(port, () => {
  console.log(`Server is Running on Port Number: ${port}`);
});
