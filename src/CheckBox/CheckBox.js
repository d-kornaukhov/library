import React, { useState, useEffect } from 'react';

import './CheckBox.scss'

export const CheckBox = ({ type = 'checkbox', name = '', disabled = false, checked = false, ariaLabel = '', style = null }) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const handleChange = () => {
        if (!disabled) {
            setIsChecked((prev) => !prev);
        }
    };

    const mode = type === 'radio' ? 'Radio' : 'CheckBox';

    return (
        <div className={mode}>
            <input
                className={disabled ? 'Disabled' : null}
                type={type}
                name={name}
                checked={isChecked}
                onChange={handleChange}
                disabled={disabled}
                aria-label={ariaLabel}
                style={style}
            />
        </div>
    );
};
