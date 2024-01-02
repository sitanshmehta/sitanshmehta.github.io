import React from "react";
import "./ProjectIcon.css"

const ProjectIcon = ({ title, image, date, display_date, url, skills, type }) => {
    return (
        <div className="project-icon">
            <div className="text-overlay">
                <h1 className="project-title">{title}</h1>
                <h5 className="project-date">{display_date}</h5>
            </div>
            <img src={image} alt={title} className="project-image" />
        </div>
    )
}

export default ProjectIcon;