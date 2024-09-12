import { useState, useEffect, useRef } from "react";
import { loadTasks, saveTasks } from "../services/taskService";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const storedTasks = loadTasks();
        if (storedTasks) {
            console.log("Loaded tasks from localStorage:", storedTasks);
            setTasks(storedTasks);
        }
    }, []);


    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
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
