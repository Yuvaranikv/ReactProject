import React, { useState } from 'react'
import './Counter.css'
import { useEffect } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("yuva");

    useEffect(() => {
        const storedCount = localStorage.getItem('count');
        if (storedCount != null)
          
        
        setCount(Number(storedCount));
        console.log(count);

        // Cleanup function (optional)
        return () => {
            console.log('Cleanup on unmount or before next effect');
        };
    }, []);

    function handleIncrement() {
        setCount((prevCount) => {
            const newCount = prevCount + 1;
            localStorage.setItem('count', newCount);
            return newCount;
        });



    }
    function handleDecrement() {
        setCount((prevCount) => {
            const newCount = prevCount - 1;
            localStorage.setItem('count', newCount);
            return newCount;
        });
    }
    const buttonClass = count > 10 ? "btn btn-above-10" : "btn";
    return (
        <div className="container">
            <button className={buttonClass} onClick={handleIncrement} disabled={count >= 20}  >+  </button>
            <span >{count}</span>

            <button className={buttonClass} onClick={handleDecrement} disabled={count <= 0}> - </button>

        </div>
    )
}

export default Counter