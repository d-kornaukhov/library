import React from 'react';



export const MyButton = ({children, color, disabled, variant='primary'}) => {
  const mode = variant === 'primary' ? 'Btn__primary' : 'Btn__secondary';


  return (
    <button className={mode}  disabled={disabled} style={{color}}>
      {/*{children}*/}
      {mode}
    </button>
  );
};
