import React from "react";
import "../styles/TaskItem.css";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            {/* Checkbox to toggle task completion */}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <span
                onClick={() => toggleComplete(task.id)}
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
                {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>

        </div>
    );
};

export default TaskItem;
