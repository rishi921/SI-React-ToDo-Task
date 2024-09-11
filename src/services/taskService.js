export const loadTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
};

export const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
