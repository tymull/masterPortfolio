import React from "react";
import { useState } from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab, theme, iconClass, onClick }) {
  // added state so that the icon coloring wouldn't get messed up when hovering over the button
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const buttonStyle = isHovered
    ? { color: theme.text, backgroundColor: theme.body }
    : { color: theme.body, backgroundColor: theme.text };

  const handleClick = (event) => {
    if (!href) {
      event.preventDefault(); // Prevent default if it's not a link
    }
    if (onClick) {
      onClick(event); // Call the onClick handler if provided
    }
  };

  return (
    <div className={className}>
      {href ? (
        <a
          className="main-button"
          href={href}
          target={newTab ? "_blank" : "_self"}
          style={{ ...buttonStyle, border: `solid 1px ${theme.text}` }}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {iconClass && <i className={iconClass}></i>}
          {text}
        </a>
      ) : (
        <button
          className="main-button fact-button"
          style={{ ...buttonStyle, border: `solid 1px ${theme.text}` }}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {iconClass && <i className={iconClass}></i>}
          {text}
        </button>
      )}
    </div>
  );
}
