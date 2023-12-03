import React, { useContext } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { TodoContext } from "../data/ToDoContext";

export default function Todo(props) {
  const { setEditing, updateTask } = useContext(TodoContext);
  const { id, title, startTime, complete } = props.task;

  const handleDelete = () => {
    props.remove(props.task);
  };

  const handleEdit = () => {
    setEditing(id);
  };

  const handleStatusChange = () => {
    const updatedTask = {
      ...props.task,
      complete: !complete,
      completionTime: complete ? null : new Date().toLocaleTimeString(),
    };

    updateTask(updatedTask);
  };

  return (
    <div className="singleTask">
      <div className="todoDetails">
        <input
          type="checkbox"
          onChange={handleStatusChange}
          value={complete}
          checked={complete}
        />
        <label className={complete ? "completed" : ""}>{title}</label>
        {startTime && <p>Started at {startTime}</p>}
        {complete && <p>Completed at {props.task.completionTime}</p>}
      </div>
      <div className="buttons">
        <button onClick={handleEdit} className="edit-btn">
          <SvgIcon viewBox="0 0 24 24" fontSize="small">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </SvgIcon>
        </button>
        <button onClick={handleDelete} className="delete-btn">
          <SvgIcon viewBox="0 0 24 24" fontSize="small">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
          </SvgIcon>
        </button>
      </div>
    </div>
  );
}
