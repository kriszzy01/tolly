import React, { useState } from "react";

export const Accordion = ({ initialState, title, children, id }) => {
  const [isExpanded, setIsExpanded] = useState(initialState || false);

  const handleClick = () => {
    children && setIsExpanded((isExpanded) => !isExpanded); //prevent accordions without children from being expandable
  };

  return (
    <div className="accordion">
      <button
        aria-expanded={isExpanded}
        aria-controls={`${title}_region`}
        id={id}
        onClick={handleClick}
      >
        {title}
        <span aria-hidden="true">{isExpanded ? "▲" : "▼"}</span>
      </button>

      <div
        id={`${title}_region`}
        className="accordion_region"
        role="region"
        aria-labelledby={id}
        data-expanded={isExpanded}
      >
        {children}
      </div>
    </div>
  );
};
