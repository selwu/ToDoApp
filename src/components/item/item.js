import React, {Component} from 'react';
import './item.css';

export default class Item extends Component {

  render() {
    const {label, onDeleted, toggleDone, toggleImportant, done, important} = this.props;
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
          onClick={toggleDone}>
          {label}
        </span>
        <button
          className="btn btn-sm float-right"
          onClick={toggleImportant}>
          <i className="material-icons todo-icon-priority">priority_high</i>
        </button>
        <button
          className="btn btn-sm float-right"
          onClick={onDeleted}>
          <i className="material-icons todo-icon-delete">delete_forever</i>
        </button>
      </div>
    );
  }
}
