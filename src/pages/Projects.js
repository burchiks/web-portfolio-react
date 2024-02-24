import React from 'react';
import {projects} from "../helpers/projectList"
import Project from "../components/project/Project";

function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((proj,i)=>{
                        return (
                            <Project key={i} title ={proj.title} img = {proj.img}
                            i={i}/>
                        )
                    })}

                </ul>
            </div>
        </main>

    );
}

export default Projects;