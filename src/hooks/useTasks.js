import { useState, useEffect } from "react";
import { loadTasks, saveTasks } from "../services/taskService";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = loadTasks();
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleComplete = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return { tasks, addTask, toggleComplete, deleteTask };
};
