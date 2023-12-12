import React, { useState, useEffect } from 'react';

import './Tabs.scss';

export const Tab = ({ label, value, active, onClick, disabled }) => (
  <div
    className={`Tab ${active && !disabled ? 'TabActive' : ''} ${disabled ? 'TabDisabled' : ''}`}
    onClick={() => onClick(value)}
  >
    {label}
  </div>
);

export const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue || children[0]?.props.value);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  useEffect(() => {
    setActiveTab(defaultValue || children[0]?.props.value);
  }, [defaultValue, children]);

  return (
    <div className="TabsContainer">
      <div className="Tabs">
        {React.Children.map(children, (child) => (
          React.cloneElement(child, {
            active: child.props.value === activeTab,
            onClick: handleTabClick,
          })
        ))}
      </div>
      <div className="TabContent">
        {React.Children.toArray(children).find(
          (child) => child.props.value === activeTab
        )?.props.children}
      </div>
    </div>
  );
};
