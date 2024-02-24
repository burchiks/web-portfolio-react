import React from 'react';
import {projects} from "../helpers/projectList"
import img from "./../img/projects/02-big.jpg"
import BtnGit from "../components/btnGitHup/BtnGit";
import {useParams} from "react-router-dom"

const ProjectBig = () => {
    const {id} = useParams();
    const project = projects[id];
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt="Project Cover" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    {project.gitHubLink &&
                        (<BtnGit link="https://github.com/"/>)}


                </div>
            </div>
        </main>
    );
};

export default ProjectBig;
