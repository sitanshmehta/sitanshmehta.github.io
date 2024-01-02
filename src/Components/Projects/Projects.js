import React, { Component } from 'react';
import './Projects.css'
import ProjectIcon from './ProjectIcon.js';
import ProjectList from './ProjectList.js';

const Projects = () => {
    return (
        <div className="projects-page">
            {
                ProjectList.map((project) => (
                    <ProjectIcon
                        id={project.id}
                        title={project.title}
                        date={project.date}
                        display_date={project.display_date}
                        url={project.url}
                        image={project.image}
                        skills={project.skills}
                        type={project.type}
                    />
                ))
            }
        </div>
    )
}

export default Projects;