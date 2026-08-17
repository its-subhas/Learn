// External Modules
const express = require("express");
const todoItemsRouter = express.Router();

// Local Modules
const todoItemsController = require("../Controllers/todoItemsController");

todoItemsRouter.get("/show", todoItemsController.showTodoItems);
todoItemsRouter.post("/save", todoItemsController.createTodoItem);
todoItemsRouter.post("/delete/:id", todoItemsController.deleteTodoItem);
todoItemsRouter.post("/update/:id", todoItemsController.updateTodoItem);

module.exports = todoItemsRouter;
