import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/todolist">ToDo List</Link></li>
        <li><Link to="/WithoutMemo">WithoutMemo</Link></li>
        <li><Link to="/WithMemo">WithMemo</Link></li>
        <li><Link to="/Jeopardy">Jeopardy</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
