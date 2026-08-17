const express = require("express");
const hostRouter = express.Router();
const { Form } = require("../Controllers/Form");
const { Registered } = require("../Controllers/Registered");
const { edit } = require("../Controllers/edit");
const { editSubmited } = require("../Controllers/editSubmited");
const { del } = require("../Controllers/del");
const { details } = require("../Controllers/details");



hostRouter.post("/submited", Form);
hostRouter.post("/edit/submited/:homeId", editSubmited);
hostRouter.get("/showHome", Registered);
hostRouter.get("/showHome/:homeId", details);
hostRouter.get("/edit/:homeId", edit);
hostRouter.post("/delete/:homeId", del);



exports.hostRouter = hostRouter;
 