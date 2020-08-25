import React from 'react';
import ReactDOM from 'react-dom';
import TodoTitle from './components/todo-title';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';

const dataArr = [
  {label: 'Hello!', important: true},
  {label: 'My!', important: false},
  {label: 'Name!', important: true},
  {label: 'Is!', important: false},
  {label: 'some!', important: true},
];

const App = () => {
  return (
    <div className="container">
      <TodoTitle/>
      <TodoInput/>
      <TodoList dataArr={dataArr}/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));