import React from 'react';
import './header.css';

const Header = ({todo, done}) => {
  return (
    <header className="todo-header">
      <h1 className="title">My ToDo List</h1>
      <p className="todo-text">{todo} more todo, {done} done</p>
    </header>
  );
};

export default Header;