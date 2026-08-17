import TodoItems from "./TodoItems";
import TodoItemsDate from "./TodoItemsDate";
import TodoItemsDelete from "./TodoItemsDelete";

function Tasks({ task, del}) {
  return (
    <>
      
        <TodoItems mytask={task.task} />
        <TodoItemsDate mydate={task.date} />
        <TodoItemsDelete del={del}/>
    
    </>
  );
}
export default Tasks;
