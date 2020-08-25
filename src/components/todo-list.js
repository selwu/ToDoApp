import React from 'react';
import ListItem from './list-item';


export default ({dataArr}) => {
  const add = dataArr.map((item) => {
    console.log(item);
    return (
      <li>
        <ListItem {...item}/>
      </li>
    );
  });


  return (
    <ul className="list">
      {add}
    </ul>
  );
};