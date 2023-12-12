import React, { useState } from 'react';
import './Accordion.scss';

import Icon from '../assets/img/accordion-arrow.svg'

export const Accordion = ({ children }) => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="Accordion">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          expanded: child.props.id === expanded,
          onToggle: () => handleToggle(child.props.id),
        })
      )}
    </div>
  );
};

export const AccordionSummary = ({ children, expanded, onToggle, id, icon, disabled }) => (
  <div className={`AccordionSummary ${expanded && !disabled ? 'Expanded' : ''} ${disabled ? 'AccordionSummaryDisabled' : ''}`} onClick={onToggle} id={id}>
    {children}
    <img className={`AccordionSummaryArrow ${expanded ? 'Expanded' : ''}`} src={icon ? icon : Icon} alt={'accordion arrow'} />
  </div>
);

export const AccordionDetails = ({ children, expanded, id }) => (
  <div className={`AccordionDetails ${expanded ? 'Visible' : 'Hidden'}`} id={id}>
    {children}
  </div>
);
