import React from 'react';

import './MyButton.scss'

/**
 * @param {Object} props - Пропсы компонента MyButton.
 * @param {string} [props.className] - Класс для кнопки.
 * @param {React.ReactNode} [props.children='Кнопка'] - Содержимое кнопки.
 * @param {string} [props.variant='primary'] - Вариант кнопки ('primary' или 'secondary').
 * @param {("small"|"medium"|"large")} [props.size="medium"] - Размер кнопки.
 * @param {boolean} [props.disabled=false] - Флаг, указывающий на то, отключена ли кнопка.
 * @param {Object} [props.styles] - Инлайн стили для кнопки.
 * @param {Function} [props.onClick] - Обработчик клика на кнопку.
 * @param {Function} [props.onChange] - Обработчик изменения кнопки.
 */

export const MyButton = ({className, children = 'Кнопка', variant= 'primary', size = 'medium', disabled = false, styles, onClick, onChange}) => {
  const mode = variant === 'primary' ? 'Btn__primary' : 'Btn__secondary';
  const sizeClass = `Btn__${size}`;
  const disabledClass = disabled ? 'BtnDisabled' : ''

  const buttonStyles = { ...styles };

  return (
    <button className={['Btn', mode, className, sizeClass, disabledClass].join(' ')}  disabled={disabled} style={buttonStyles} onClick = {() => onClick} onChange = {() => onChange}>
      {children}
    </button>
  );
};
