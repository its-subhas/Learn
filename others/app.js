const http = require("http");
const fs = require("fs");

function requestListner(req, res) {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>BISWAS</title></head>");
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submited" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter Your Name"><br>',
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="Male"><br>');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="Female"><br>',
    );
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/guddu") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>BISWAS</title></head>");
    res.write("<body><h1>Guddu Biswas This Side!</h1></body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/submited" && req.method === "POST") {

    const body = [];

    req.on('data', chunk =>{
      console.log(chunk);
      body.push(chunk);
    });


    req.on('end', ()=>{
     const fullBody = Buffer.concat(body).toString();
     console.log(fullBody);

    //  const bodyObject = {};
     const params = new URLSearchParams(fullBody);
    //  for (const [key, val] of params.entries()) {
    //      bodyObject[key] = val;
    //  }

    const bodyObject = Object.fromEntries(params);
     console.log(bodyObject);
     fs.writeFileSync("user.txt", JSON.stringify(bodyObject));

    });

    
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>BISWAS</title></head>");
  res.write("<body><h1>404 - Page Not Found</h1></body>");
  res.write("</html>");
  res.end();
}

const server = http.createServer(requestListner);
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
