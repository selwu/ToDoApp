import React from 'react';


export default ({label, important = false}) => {
  const style = {
    color: important ? 'tomato' : 'black'
  };
  return <span style={style}>{label}</span>;
};
