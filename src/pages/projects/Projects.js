import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  personalHeader,
  personalProjects,
  schoolHeader,
  schoolProjects,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Personal Project Cards  */}
        {personalProjects.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="project-cards-heading-div">
                <div className="project-cards-heading-text-div">
                  <h1
                    className="project-cards-heading-text"
                    style={{ color: theme.text }}
                  >
                    {personalHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {personalHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {personalProjects.data.map((project) => {
            return <ProjectCard project={project} theme={theme} />;
          })}
        </div>

        {/* School Project Cards  */}
        {schoolProjects.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="project-cards-heading-div">
                <div className="project-cards-heading-text-div">
                  <h1
                    className="project-cards-heading-text"
                    style={{ color: theme.text }}
                  >
                    {schoolHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {schoolHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {schoolProjects.data.map((project) => {
            return <ProjectCard project={project} theme={theme} />;
          })}
        </div>
        <Button
          text={"All Github Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
