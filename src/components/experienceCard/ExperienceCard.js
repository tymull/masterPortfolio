import React, { Component } from 'react';
import './ExperienceCard.css';
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    return (
      <div className="experience-list-item" style={{ marginTop: (index === 0 ? 30 : 50) }}>
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assests/images/${experience["logo_path"]}`)}
              alt=""
            />
          </div>
        </Fade>
        <div className="experience-card-stepper">
          <div style={{ width: 20, height: 20, backgroundColor: `${theme.headerColor}`, borderRadius: 50, zIndex: 100 }} />
          {
            // if first card and not last card
            index !== (totalCards - 1) && index === 0
              ? <div className="stepper-line-bottom-half" style={{ backgroundColor: `${theme.headerColor}`}}/>
              //if not first or last card
              : index !== (totalCards - 1) && index !== 0
                ? (
                  <>
                    <div className="stepper-line-top-half" style={{ backgroundColor: `${theme.headerColor}`}}/>
                    <div className="stepper-line-bottom-half" style={{ backgroundColor: `${theme.headerColor}`}}/>
                  </>
                )
                // <div className="stepper-line-full"/>
                //if last card and not first card
                : index === (totalCards - 1) && index !== 0
                  ? <div className="stepper-line-top-half" style={{ backgroundColor: `${theme.headerColor}`}}/>
                  //if only card
                  : null
          }
        </div>
        <Fade right duration={2000} distance="40px">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="arrow-left" style={{ borderRight: `10px solid ${theme.body}` }}></div>
            <div className="experience-card" style={{ background: `${theme.body}` }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                  <h3 className="experience-card-title" style={{ color: theme.text }}>{experience["title"]}</h3>
                  <p className="experience-card-company" style={{ color: theme.text }}>
                    <a href={experience["company_url"]} target="_blank" rel="noopener noreferrer">
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p className="experience-card-duration" style={{ color: theme.secondaryText }}>{experience["duration"]}</p>
                    <p className="experience-card-location" style={{ color: theme.secondaryText }}>{experience["location"]}</p>
                  </div>

                </div>
              </div>
              {/* added padding-bottom */}
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 20, paddingBottom: 7, }}>
                <div
                  className="repo-description"
                />
                {experience["description"]}
              </div>

            </div>

          </div>
        </Fade>
      </div>

    );
  }
}

export default ExperienceCard;
