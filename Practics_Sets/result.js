const result = (req, res) => {
  const body = [];

  req.on("data", (chunks) => {
    body.push(chunks);
  });

  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    const result = Number(bodyObject.First) + Number(bodyObject.Second);
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Sum Of Two Numbers: ${result}</h1>`);
    return res.end();
  });
};

exports.result = result;
