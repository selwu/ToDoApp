import React, { Component } from 'react';
import Header from '../header';
import Input from '../input';
import List from '../list';
import Filter from '../filter';
import AddItem from '../add-item';
import './app.css';

export default class App extends Component {
  id = 100;
  state = {
    dataArr: [
      this.createItem('Hello'),
      this.createItem('My'),
      this.createItem('Name'),
      this.createItem('Is'),
      this.createItem('some'),
    ],
  };

  createItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.id++,
    };
  }

  deleteId = (id) => {
    this.setState(({ dataArr }) => {
      const idNum = dataArr.findIndex((item) => item.id === id);
      const result = [...dataArr.slice(0, idNum), ...dataArr.slice(idNum + 1)];
      return {
        dataArr: result,
      };
    });
  };

  addId = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.id++,
    };

    this.setState(({ dataArr }) => {
      const result = [...dataArr, newItem];
      return {
        dataArr: result,
      };
    });
  };

  togglePattern(arr, id, propName) {
    const idNum = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idNum];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    const newArr = [...arr.slice(0, idNum), newItem, ...arr.slice(idNum + 1)];

    return {
      dataArr: newArr,
    };
  }

  toggleDone = (id) => {
    this.setState(({ dataArr }) => {
      return this.togglePattern(dataArr, id, 'done');
    });
  };

  toggleImportant = (id) => {
    this.setState(({ dataArr }) => {
      return this.togglePattern(dataArr, id, 'important');
    });
  };

  render() {
    const { dataArr } = this.state;
    const countDone = dataArr.filter((item) => item.done).length;
    const countMore = dataArr.length - countDone;
    return (
      <div className="todo-app">
        <Header done={countDone} todo={countMore} />
        <div className="todo-info d-flex">
          <Input />
          <Filter />
        </div>
        <List
          dataArr={dataArr}
          onDeleted={this.deleteId}
          toggleDone={this.toggleDone}
          toggleImportant={this.toggleImportant}
        />
        <AddItem addId={this.addId} />
      </div>
    );
  }
}
