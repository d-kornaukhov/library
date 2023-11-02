import React from 'react';

import './MyButton.scss'

export const MyButton = ({className, children = 'Кнопка', color, variant= 'primary', size = 'medium', disabled = false}) => {
  const mode = variant === 'primary' ? 'Btn__primary' : 'Btn__secondary';
  const sizeClass = `Btn__${size}`;
  const disabledClass = disabled ? 'BtnDisabled' : ''

  return (
    <button className={['Btn', mode, className, sizeClass, disabledClass].join(' ')}  disabled={disabled} style={{color}}>
      {children}
    </button>
  );
};
