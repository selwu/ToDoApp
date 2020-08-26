import React from 'react';
import Title from '../header';
import Input from '../input';
import List from '../list';
import Filter from '../filter';
import './app.css';

const dataArr = [
  {label: 'Hello!', important: true, id: 1},
  {label: 'My!', important: false, id: 2},
  {label: 'Name!', important: true, id: 3},
  {label: 'Is!', important: false, id: 4},
  {label: 'some!', important: true, id: 5},
];

const App = () => {
  return (
    <div className="todo-app">
      <Title/>
      <div className="todo-info d-flex">
        <Input/>
        <Filter/>
      </div>
      <List dataArr={dataArr}/>
    </div>
  );
};

export default App;