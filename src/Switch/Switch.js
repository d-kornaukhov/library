import React, { useState } from 'react';
import './Switch.scss';

export const Switch = ({ checked, disabled, onChange, label }) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={`SwitchWrapper`}>
      <div className={`Switch ${checked ? 'SwitchChecked' : ''} ${disabled ? 'SwitchDisabled' : ''}`} onClick={handleClick}>
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
