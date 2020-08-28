import React, {Component} from 'react';
import './filter.css';

export default class Filter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-info">All</button>
        <button className="btn btn-outline-secondary">Active</button>
        <button className="btn btn-outline-secondary">Done</button>
      </div>
    );
  }
}