import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [des, setDes] = useState("");

  const storeInLocal = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    const updatedTodo = [...todo, { task, des }];
    setTodo(updatedTodo);
    localStorage.setItem("tasklist", JSON.stringify(updatedTodo));
    setDes("");
    setTask("");
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("tasklist"));
    if (storedTodos) {
      setTodo(JSON.parse(localStorage.getItem("tasklist")));
    }
  }, []);


 const onDelete = (idToDelete) => {
  // preventDefault()
  console.log(idToDelete)
  const updatedTodos = todo.filter((item, index) => index != idToDelete);
  setTodo(updatedTodos);
  localStorage.setItem("tasklist", JSON.stringify(todo));
};

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="Enter task "
          value={task}
          // required
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          // required
          placeholder="Enter Description"
          value={des}
          onChange={(e) => setDes(e.target.value)}
        />
        <button onClick={storeInLocal}>Add Task</button>
        <hr />
      </form>
      {todo.map((item, index) => (
          <div className="taskCard" key={index}>
            <div>
              <strong>{item.task}</strong>: {item.des}
              </div>
          <button onClick={()=>onDelete(index)}>Delete</button>
          </div>
      ))}

    </main >
  );
};

export default Todo;
