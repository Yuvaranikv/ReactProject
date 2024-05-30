import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';

const ToDoList = () => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState(() => {
        // Retrieve the tasks from localStorage or initialize with an empty array
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const handleAdd = () => {
        if (!input) return;
        setTasks([...tasks, { taskName: input, completed: false }]);
        setInput('');
    };

    const handleRemove = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleToggle = (index) => {
        const newTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div>
            <input value={input} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {tasks.map((task, index) => (
                    <ToDo 
                        key={index}
                        index={index}
                        task={task}
                        handleToggle={handleToggle}
                        handleRemove={handleRemove}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
