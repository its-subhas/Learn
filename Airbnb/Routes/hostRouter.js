const path = require("path");
const rootDir = require("../Utils/path");
const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "Views", "form.html"));
});

hostRouter.post("/submited", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "Views", "submited.html"));
});

module.exports = hostRouter;
