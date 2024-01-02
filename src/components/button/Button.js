import React from "react";
import { useState } from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab, theme, iconClass }) {
  // added state so that the icon coloring wouldn't get messed up when hovering over the button
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const buttonStyle = isHovered
    ? { color: theme.text, backgroundColor: theme.body }
    : { color: theme.body, backgroundColor: theme.text };

  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : "_self"}
        style={{ ...buttonStyle, border: `solid 1px ${theme.text}` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {iconClass && <i className={iconClass}></i>}
        {text}
      </a>
    </div>
  );
}
