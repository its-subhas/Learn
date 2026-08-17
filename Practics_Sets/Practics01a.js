const { result } = require("./result");

const requestListener = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1> Welcome To Node JS Server</h1>");
    res.write('<a href="/calculator" >Calculator</a>');
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      
      <!doctype html>
<html>
  <head>
    <title>Practics Sets</title>
  </head>
  <body>
    <form action="/result" method="POST">
      <h1>Welcome To Calculator</h1>
      <input type="text" name="First" placeholder="Enter Number First">
      <input type="text" name="Second" placeholder="Enter Number Second">
      <input type="submit" value="Sum">
    </form>
  </body>
</html>
`);
    return res.end();
  } else if (req.url === "/result" && req.method === "POST") {
    return result(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>404 Page Not Found !</h1>");
  res.write('<a href="/" >Home</a>');
  return res.end();
};

exports.requestListener = requestListener;
