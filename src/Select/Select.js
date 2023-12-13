import React, { useState } from 'react';
import './Select.scss';

export const SelectItem = ({ value, children, onClick, isSelected, disabled }) => (
  <li
    className={`Option ${isSelected && 'Option_selected'} ${disabled && 'Option_disabled'}`}
    onClick={onClick}
  >
    {children}
  </li>
);

export const Select = ({ children, selectedOptionIndex, label }) => {
  const [selectedOption, setSelectedOption] = useState(
    selectedOptionIndex !== undefined && children
      ? children[selectedOptionIndex - 1].props.value
      : null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="SelectWrapper">
      <p onClick={handleToggle} className={'SelectLabel'}>{label}</p>
      <div className={`Select ${isOpen ? 'Select__active' : ''}`}>
        <div className={`SelectHeader ${isOpen ? 'SelectHeader__active' : ''}`} onClick={handleToggle}>
          <input type="hidden" value={selectedOption || ''} />
          <p className={'SelectHeaderOption'}> {selectedOption ? children.find(option => option.props.value === selectedOption).props.children : 'Выберите опцию'}</p>
          <div className={`SelectButton ${isOpen ? 'SelectButton_active' : ''}`}>
            <div className="Arrow"></div>
          </div>
        </div>
        {isOpen && (
          <ul className="SelectOptionList">
            {React.Children.map(children, (child) => (
              React.cloneElement(child, {
                onClick: () => handleOptionSelect(child.props.value),
                isSelected: child.props.value === selectedOption,
              })
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
