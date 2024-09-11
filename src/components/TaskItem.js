import React from "react";
import "../styles/TaskItem.css"

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <span onClick={() => toggleComplete(task.id)}>
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
