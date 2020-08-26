import React from 'react';
import Item from '../item/item';
import './list.css';

const List = ({dataArr}) => {
  const add = dataArr.map((item) => {
    const {id, ...otherItems} = item;
    return (
      <li className="list-group-item" key={id}>
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

export default List;