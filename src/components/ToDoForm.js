import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { TodoContext } from "../data/ToDoContext";

export default function TaskForm() {
  const { tasks, addTask, updateTask, editing, setTasks } = useContext(
    TodoContext
  );

  const initialData =
    editing !== "new"
      ? tasks.find((task) => task.id === editing)
      : { title: "" };

  const [task, setTask] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing === "new") {
      const newTask = {
        ...task,
        id: nanoid(),
        complete: false,
        startTime: new Date().toLocaleTimeString(),
      };

      addTask(newTask);
    } else {
      updateTask(task);
    }

    setTask({ title: "" });
  };

  const handleTitleChange = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const toggleComplete = (clickedTask) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === clickedTask.id) {
        t.complete = !t.complete;
        t.completionTime = t.complete
          ? new Date().toLocaleTimeString()
          : null;
      }
      return t;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="text"
              onChange={handleTitleChange}
              value={task.title}
              className="task-input"
              placeholder="Add new task..."
            />
          </label>
        </div>
        <div className="form-btns">
          <button className="add-btn" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
