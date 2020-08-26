import React, {Component} from 'react';
import './item.css';

export default class Item extends Component {

  constructor() {
    super();
  }

  state = {
    done: false,
    important: false,
  };

  importantHandler = () => {
    this.setState({
      important: true,
    });
  };

  doneHandler = () => {
    this.setState({
      done: true,
    });
  };

  render() {
    const {label} = this.props;
    const {done, important} = this.state;
    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' itemDone';
    }
    if (important) {
      classNames += ' itemImportant';
    }

    return (
      <div className="todo-item-container">
        <span
          className={classNames}
          onClick={this.doneHandler}>
          {label}
        </span>
        <button
          className="btn btn-sm float-right"
          onClick={this.importantHandler}>
          <i className="material-icons todo-icon-priority">priority_high</i>
        </button>
        <button className="btn btn-sm float-right">
          <i className="material-icons todo-icon-delete">delete_forever</i>
        </button>
      </div>
    );
  }
}