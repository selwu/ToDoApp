import React from 'react';
import './item.css';

export default ({label}) => {
  const style = {
    color: 'black',
  };
  return (
    <div className="todo-item-container">
      <span className="todo-list-item" style={style}>{label}</span>
      <button className="btn btn-sm float-right">
        <i className="material-icons todo-icon-priority">priority_high</i>
      </button>
      <button className="btn btn-sm float-right">
        <i className="material-icons todo-icon-delete">delete_forever</i>
      </button>
    </div>
  );
};
