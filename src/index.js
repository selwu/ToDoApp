import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/header';
import Input from './components/input';
import List from './components/list';
import Filter from './components/filter';
import './index.css';


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

ReactDOM.render(<App/>, document.querySelector('#root'));