import React from 'react';

const MyButton = ({children, color, disabled}) => {
  return (
    <button disabled={disabled} style={{color}}>
      {children}
    </button>
  );
};

export default MyButton;