import React, { useEffect, useState } from 'react';

import './Button.css';

const Button = props => {
  
  
  return (
    <button className={`button ${!props.validation?'invalid':''}`} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
