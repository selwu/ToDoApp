import React, {Component} from 'react';
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
  };


  deleteId = (id) => {
    this.setState(({dataArr}) => {
      const idNum = dataArr.findIndex((item) => item.id === id);
      const result = [
        ...dataArr.slice(0, idNum),
        ...dataArr.slice(idNum + 1),
      ];
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

    this.setState(({dataArr}) => {
      const result = [...dataArr, newItem];
      return {
        dataArr: result,
      };
    });
  };

  toggleDone = (id) => {
    this.setState(({dataArr}) => {
      const idNum = dataArr.findIndex((item) => item.id === id);
      const oldItem = dataArr[idNum];
      const newItem = {...oldItem, done: !oldItem.done};
      const newArr = [...dataArr.slice(0, idNum), newItem, ...dataArr.slice(idNum + 1)];

      return {
        dataArr: newArr,
      };
    });
  };

  toggleImportant = (id) => {
    this.setState(({dataArr}) => {
      const idNum = dataArr.findIndex((item) => item.id === id);
      const oldItem = dataArr[idNum];
      const newItem = {...oldItem, important: !oldItem.important};
      const newArr = [...dataArr.slice(0, idNum), newItem, ...dataArr.slice(idNum + 1)];

      return {
        dataArr: newArr,
      };
    });
  };

  render() {
    const countDone = this.state.dataArr.filter((item) => item.done).length;
    const countMore = this.state.dataArr.length - countDone;
    return (
      <div className="todo-app">
        <Header done={countDone} todo={countMore}/>
        <div className="todo-info d-flex">
          <Input/>
          <Filter/>
        </div>
        <List
          dataArr={this.state.dataArr}
          onDeleted={this.deleteId}
          toggleDone={this.toggleDone}
          toggleImportant={this.toggleImportant}
        />
        <AddItem addId={this.addId}/>
      </div>
    );
  }

};

