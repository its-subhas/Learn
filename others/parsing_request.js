const fs = require("fs");

const requestListener = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Parsing Request</title>
</head>
<body>
<h1>Enter Your Details:</h1>
<form action="/submited" method="POST">
<input type="text" name="username" placeholder="Enter Your Name"><br>
<label for="male">Male</label>
<input type="radio" id="male" name="gender" value="Male"><br>
<label for="female">Female</label>
<input type="radio" id="female" name="gender" value="Female"><br>
<input type="submit" value="Submit">
</form>
</body>
</html>
`);
    return res.end();
  } else if (req.url === "/submited" && req.method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toLocaleString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));

      console.log(fullBody);
      console.log(bodyObject);
    });

    console.log("Submited Successfully !");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1> Page Not Found !</h1>");
    return res.end();
  }
};

module.exports = requestListener;
