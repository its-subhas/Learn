const path = require("path");
const rootDir = require("./Utils/path");

const express = require("express");
const userRouter = require("./Routes/userRouter");
const hostRouter = require("./Routes/hostRouter");

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
res.status(404).sendFile(path.join(rootDir,'Views', 'notFound.html'));
});

const Port = 3000;
app.listen(Port, () => {
  console.log(`Server is running: http://localhost:${Port}`);
});
