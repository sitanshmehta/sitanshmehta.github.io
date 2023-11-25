import React, { Component } from 'react';
import './Projects.css'
import Icon from './Icon.js';
import profile from './Project_List/images/profile.png'

const Projects = () => {
    return (
        <div className="projects-page">
            <header>
                <h1>Projects Page</h1>
                <Icon
                    title={'Project 1'}
                    image={profile}
                />
            </header>
        </div>
    )
}

export default Projects;