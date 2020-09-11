import React, { Component } from 'react';
import './add-item.css';

class AddItem extends Component {
  state = {
    label: '',
  };

  addInput = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addId(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className="d-flex item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.addInput}
          placeholder="add work"
          value={this.state.label}
        />
        <button className="btn btn-secondary button-add">Add</button>
      </form>
    );
  }
}

export default AddItem;
