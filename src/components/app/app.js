import React, {Component} from 'react';
import Title from '../header';
import Input from '../input';
import List from '../list';
import Filter from '../filter';
import './app.css';


export default class App extends Component {
  state = {
    dataArr: [
      {label: 'Hello!', important: true, id: 1},
      {label: 'My!', important: false, id: 2},
      {label: 'Name!', important: true, id: 3},
      {label: 'Is!', important: false, id: 4},
      {label: 'some!', important: true, id: 5},
    ],
  };

  deleteId = (id) => {
    this.setState(({dataArr}) => {
      const idNum = dataArr.findIndex((item) => item.id === id);
      const result = [...dataArr.slice(0, idNum), ...dataArr.slice(idNum + 1)];
      return {
        dataArr: result,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <Title/>
        <div className="todo-info d-flex">
          <Input/>
          <Filter/>
        </div>
        <List
          dataArr={this.state.dataArr}
          onDeleted={this.deleteId}/>
      </div>
    );
  }

};

