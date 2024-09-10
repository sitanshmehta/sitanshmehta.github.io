import React from "react";
import "./ExperienceIcon.css"
import { useNavigate } from "react-router-dom";

const ExperienceIcon = ({ position, start_date, end_date, organisation, logo, skills, path, description, highlight }) => {
    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate(`/experience/${path}`);
    };

    return (
        <div className="experience-icon" onClick={navigateToDetails}>
            <img src={logo} alt={organisation} className="experience-image" />
            <div className="experience-text">
                <div className="experience-title">
                    <h1 className="experience-position">{position}</h1>
                    <h1 className="experience-organisation">Company: {organisation}</h1>
                    <h1 className="experience-date">{start_date} - {end_date}</h1>
                    <h1 className="experience-description"> {description}</h1>
                    <h1 className="experience-highlight"> {highlight}</h1>
                    <h1 className="experience-skills-text"> {skills}</h1>
                </div>
            </div>
        </div>
    )
}

export default ExperienceIcon;