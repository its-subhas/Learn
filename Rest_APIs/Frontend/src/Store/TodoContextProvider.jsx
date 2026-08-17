import TodoContext from "./TodoContext";
import { useEffect, useReducer, useRef, useState } from "react";
import {
  addItemToServer,
  deleteItemFromServer,
  updateItemOnServer,
  showItemsFromServer,
} from "../services/itemService";

const TodoContextProvider = ({ children }) => {
  const actionFunction = (currentValue, action) => {
    let todoTasks = currentValue;

    if (action.type === "LOAD_TASKS") {
      todoTasks = action.payload.map((item) => ({
        _id: item._id,
        task: item.tasks,
        date: item.date,
      }));
    } else if (action.type === "ADD_TASK") {
      todoTasks = [action.payload, ...currentValue];
    } else if (action.type === "DEL_TASK") {
      todoTasks = currentValue.filter((item) => item._id !== action.payload);
    } else if (action.type === "EDIT_TASK") {
      return currentValue.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            task: action.payload.task,
            date: action.payload.date,
          };
        }

        return item;
      });
    }

    return todoTasks;
  };

  const inputTask = useRef();
  const inputDate = useRef();

  const [editValue, editMethod] = useState(null);

  const [todoValue, todoMethod] = useReducer(actionFunction, []);

  // LOAD DATA FROM MONGODB
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await showItemsFromServer();

        todoMethod({
          type: "LOAD_TASKS",
          payload: data,
        });
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    loadTodos();
  }, []);

  // ADD TODO
  const addHandle = async (event) => {
    event.preventDefault();

    const task = inputTask.current.value;
    const date = inputDate.current.value;

    try {
      const data = await addItemToServer(task, date);

      todoMethod({
        type: "ADD_TASK",
        payload: {
          _id: data._id,
          task: data.tasks,
          date: data.date,
        },
      });

      inputTask.current.value = "";
      inputDate.current.value = "";
    } catch (error) {
      console.error("Add failed:", error);
    }
  };

  // DELETE TODO
  const delHandle = async (_id) => {
    try {
      await deleteItemFromServer(_id);
      todoMethod({
        type: "DEL_TASK",
        payload: _id,
      });
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // EDIT TODO
  const editHandle = (task) => {
    inputTask.current.value = task.task;

    inputDate.current.value = task.date.includes("T")
      ? task.date.split("T")[0]
      : task.date;

    editMethod(task);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      inputTask.current.focus();

      inputTask.current.setSelectionRange(
        inputTask.current.value.length,
        inputTask.current.value.length,
      );
    }, 300);
  };

  // UPDATE TODO
  const editUpdateHandle = async (event) => {
    event.preventDefault();

    if (!editValue) {
      return;
    }

    const task = inputTask.current.value;
    const date = inputDate.current.value;

    try {
      // 1. Update MongoDB
      await updateItemOnServer(editValue._id, task, date);

      // 2. Update React state
      todoMethod({
        type: "EDIT_TASK",
        payload: {
          _id: editValue._id,
          task: task,
          date: date,
        },
      });

      // 3. Exit edit mode
      editMethod(null);

      // 4. Clear inputs
      inputTask.current.value = "";
      inputDate.current.value = "";
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        inputTask,
        inputDate,
        todoItems: todoValue,
        addHandle,
        delHandle,
        editHandle,
        editValue,
        editUpdateHandle,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
