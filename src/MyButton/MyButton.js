import React from 'react';

import './MyButton.scss'

/**
 // * @param {Object} props - Пропсы компонента MyButton.
 * @param {string} [className] - Класс для кнопки.
 * @param {(JSX.Element|undefined)} children - Содержимое кнопки.
 * @param {string} [variant='primary'] - Вариант кнопки ('primary' или 'secondary').
 * @param {("small"|"medium"|"large")} [size="medium"] - Размер кнопки.
 * @param {boolean} [disabled=false] - Флаг, указывающий на то, отключена ли кнопка.
 * @param {(CSSProperties|undefined)} [styles] - Инлайн стили для кнопки.
 * @param {Function} [onClick] - Обработчик клика на кнопку.
 * @param {Function} [onChange] - Обработчик изменения кнопки.
 */

export const MyButton = ({className, children = 'Кнопкааа', variant= 'primary', size = 'medium', disabled = false, styles, onClick, onChange}) => {
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
