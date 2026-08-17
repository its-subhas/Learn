// Core Modules
const express = require("express");


// External Modules
// const bodyParser = require("body-parser");
const cors = require("cors");
const {MongooseConnect} = require("./Util/dbMongoose");
const { notFound } = require("./Controllers/notFound");
const todoItemsRouter = require("./Routes/todoItemsRouter");




const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());



app.use("/api/items", todoItemsRouter);

app.use(notFound);


const port = 3000;

MongooseConnect((instance) => {

  app.listen(port, () => {
    console.log(`Server running: http://localhost:${port}`);
  });

});


