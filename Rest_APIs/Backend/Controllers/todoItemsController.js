//Local Modules
const TodoItems = require("../Models/TodoItems");

exports.showTodoItems = async (req, res) => {
  try {
    const todoItems = await TodoItems.find();
    res.status(200).json(todoItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTodoItem = async (req, res) => {
  try {
    const { tasks, date } = req.body;
    const todoItem = new TodoItems({ tasks, date });
    await todoItem.save();
    res.status(201).json(todoItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



exports.deleteTodoItem = async (req, res) => {
  try {
    const { id } = req.params;
    const todoItem = await TodoItems.findByIdAndDelete(id);
    if (!todoItem) {
      return res.status(404).json({ message: "Todo item not found" });
    }
    res.status(200).json({ message: "Todo item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.updateTodoItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { tasks, date } = req.body;
    const todoItem = await TodoItems.findByIdAndUpdate(id, { tasks, date }, { new: true } );
    if (!todoItem) {
      return res.status(404).json({ message: "Todo item not found" });
    }
    res.status(200).json({ message: "Todo item updated  successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
