import React from 'react';
import Item from './item';
import './list.css';

export default ({dataArr}) => {
  const add = dataArr.map((item) => {
    const {id, ...otherItems} = item;
    return (
      <li className="list-group-item todo-list-item" key={id}>
        <Item {...otherItems}/>
      </li>
    );
  });


  return (
    <ul className="todo-list list-group">
      {add}
    </ul>
  );
};