import React, { useState } from "react";
import "../styles/TaskForm.css"

const TaskForm = ({ addTask }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTask(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a new task"
                required
            />
            <button type="submit" className="add-task-btn">Add Task</button>

        </form>
    );
};

export default TaskForm;
