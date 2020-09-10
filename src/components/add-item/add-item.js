import React from 'react';
import './add-item.css';

const AddItem = ({addId}) => {

  return (
    <button className="btn btn-secondary button-add"
            onClick={() => {
              addId('Hello');
            }}
    >Add</button>
  );
};

export default AddItem;