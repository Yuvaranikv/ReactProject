import React, { useState, useEffect, useReducer } from 'react';
import ToDo from './ToDo';

const initialState = { todos: [] };
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { todos: [...state.todos, action.payload] };
        case 'REMOVE_TODO':
            return { todos: state.todos.filter((_, index) => index !== action.payload) };
        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case 'RESET_LIST':
            return initialState;
        default:
            return state;
    }
};

const ToDoList = () => {
    const [input, setInput] = useState(''); // Initialize input state with an empty string
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const { todos } = state;

    const handleAdd = () => {
        if (!input) return;
        dispatch({ type: 'ADD_TODO', payload: { taskName: input, completed: false } });
        setInput(''); // Clear input after adding todo
    };

    const handleRemove = (index) => {
        dispatch({ type: 'REMOVE_TODO', payload: index });
    };

    const handleToggle = (index) => {
        dispatch({ type: 'TOGGLE_TODO', payload: index });
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };
    const handleReset = () => {
      dispatch({ type: 'RESET_LIST' });
  };


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h1>To-do list Exercise</h1>
            <input value={input} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReset}>Reset List</button>

            <ul>
            
                {todos.map((todo, index) => (
                    <ToDo
                        key={index}
                        index={index}
                        task={todo} // Changed 'todo' to 'task' to match the prop name in ToDo component
                        handleToggle={handleToggle}
                        handleRemove={handleRemove}
                       
                    />
                   
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
