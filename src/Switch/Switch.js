import React, { useState } from 'react';
import './Switch.scss';

export const Switch = ({ checked, disabled, onChange, label }) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className={`SwitchWrapper`} onClick={handleClick}>
      <div className={`Switch ${checked ? 'SwitchChecked' : ''} ${disabled ? 'SwitchDisabled' : ''}`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {}}
          disabled={disabled}
        />
        <span className={`SwitchSlider ${checked ? 'SwitchSliderChecked' : ''}`}></span>
      </div>
      <p className={'SwitchLabel'}>{label}</p>
    </div>
  );
};
