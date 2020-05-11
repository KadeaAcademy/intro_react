import React from 'react';

const Input = (props) => {
  return (
    <input
      onChange={props.auClick}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
