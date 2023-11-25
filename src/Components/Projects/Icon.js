import React from "react";
import "./Icon.css"
import Project_List from './Project_List/Project_List'

const Icon = ({ title, image, url }) => {
    return (
        <div className="project-icon">
            <img src={image} alt={title} className="project-image" />
            <h1 className="project-title">{title}</h1>
        </div>
    )
}

export default Icon;