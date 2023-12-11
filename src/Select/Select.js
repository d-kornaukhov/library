import React, { useState } from 'react';
import './Select.scss';

export const Select = ({ options: propsOptions, selectedOptionIndex }) => {
  const [selectedOption, setSelectedOption] = useState(
    selectedOptionIndex !== undefined && propsOptions
      ? propsOptions[selectedOptionIndex - 1]
      : null
  );
  const [isOpen, setIsOpen] = useState(false);

  const options = propsOptions || [
    {
      value: 1,
      label: 'Опция 1',
    },
    {
      value: 2,
      label: 'Опция 2',
    },
    {
      value: 3,
      label: 'Опция 3',
    },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="CustomSelectWrapper">
      <div className={`CustomSelect ${isOpen ? 'CustomSelect__active' : ''}`}>
        <div className={`SelectHeader ${isOpen ? 'SelectHeader__active' : ''}`} onClick={handleToggle}>
          <input type="hidden" value={selectedOption ? selectedOption.value : ''} />
          <p> {selectedOption ? selectedOption.label : 'Выберите опцию'}</p>
          <div className={`SelectButton ${isOpen ? 'SelectButton_active' : ''}`}>
            <div className="Arrow"></div>
          </div>
        </div>
        {isOpen && (
          <ul className="OptionList">
            {options.map((option) => (
              <li
                key={option.value}
                className={`Option ${selectedOption === option ? 'Option_selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
