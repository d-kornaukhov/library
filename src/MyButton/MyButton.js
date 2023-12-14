import React from 'react';

import './MyButton.scss'


export const MyButton = ({className = '', children = 'Кнопка', variant= 'primary', size = 'medium', disabled = false, styles = {}, onClick = {}, onChange = {}}) => {
  const mode = variant === 'primary' ? 'Btn__primary' : 'Btn__secondary';
  const sizeClass = `Btn__${size}`;
  const disabledClass = disabled ? 'BtnDisabled' : ''

  const buttonStyles = { ...styles };

  return (
      <button
          className={['Btn', mode, className, sizeClass, disabledClass].join(' ')}
          disabled={disabled}
          style={buttonStyles}
          onClick={onClick}
          onChange={onChange}
      >
        {children}
      </button>
  );
};
