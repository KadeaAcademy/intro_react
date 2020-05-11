import React from 'react';

const Button = (props) => {
  return <button onClick={props.afficheMessage}>{props.label}</button>;
};

export default Button;
