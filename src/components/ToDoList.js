import React, { useContext } from "react";
import Todo from "./ToDo";
import { TodoContext } from "../data/ToDoContext";

export default function Todos() {
  const { tasks, removeTask, setTasks } = useContext(TodoContext);

  const toggleClick = (clickedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === clickedTask.id ? { ...task, clicked: !task.clicked } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            remove={removeTask}
            toggleClick={toggleClick}
          />
        ))}
      </ul>
    </div>
  );
}
