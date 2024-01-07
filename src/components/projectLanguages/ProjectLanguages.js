import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjectLanguages extends Component {
  logos = this.props.logos || []; // Default to empty array if logos is undefined
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {this.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.name}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.name}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline-languages"
                    name={logo.skillName}
                  >
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClass}
                      data-inline="false"
                    ></span>
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
