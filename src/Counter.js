import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0);
    const [name,setName]=useState("yuva");

    function handleIncrement() {
        setCount(count + 1);
       


    }
    function handleDecrement() {
        setCount(count - 1);

    }
    const buttonClass = count > 10 ? "btn btn-above-10" : "btn";
    return (
        <div className="container">
            <button className={buttonClass}  onClick={handleIncrement}  disabled={count>=20}  >+  </button>
            <span >{count}</span>
            
            <button className={buttonClass} onClick={handleDecrement} disabled={count <=0}> - </button>
            
        </div>
    )
}

export default Counter