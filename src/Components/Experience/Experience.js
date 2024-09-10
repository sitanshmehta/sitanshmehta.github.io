import React, { Component, useEffect } from 'react';
import './Experience.css'
import ExperienceIcon from './ExperienceIcon';
import ExperienceList from './ExperienceList';

const Experience = () => {
    useEffect(() => {
        document.title = "Experience - Sitansh Mehta";
    }, []);
    return (
        <div className="exp-page">
            {
                ExperienceList.map((experience) => (
                    <ExperienceIcon
                        id={experience.id}
                        organisation={experience.organisation}
                        logo={experience.logo}
                        skills={experience.skills}
                        description={experience.description}
                        start_date={experience.start_date}
                        end_date={experience.end_date}
                        position={experience.position}
                        path={experience.url}
                        highlight={experience.highlight}
                    />
                ))
            }
        </div>
    )
}

export default Experience;