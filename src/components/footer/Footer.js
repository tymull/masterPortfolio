import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import FactFinder from "../factFinder/FactFinder.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <div className="footer-text" style={{ color: props.theme.secondaryText }}>
          <FactFinder
            theme={props.theme}
          />
        </div>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
