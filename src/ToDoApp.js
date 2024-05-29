import React, { useState } from 'react';

const ToDoApp = ({ name }) => {

    const [weather] = useState({
        currentCity: "Cleveland",
        description: "Sunny",
        temperature: 76
    });
    const [todoList] = useState([
        "learn React",
        "eat",
        "sleep",
        "practice React",
        "watch React Pluralsight videos",
        "practice JavaScript"
    ]
    );
  

    return (
        <div>
            <h1>Welcome to {name}'s To-Do List</h1>
            <h2>The Weather in {weather.currentCity} is {weather.description} with a temperature of {weather.temperature} degrees fahrenheit.</h2>
            <ul>
                {todoList.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div >
    );
};

export default ToDoApp;
