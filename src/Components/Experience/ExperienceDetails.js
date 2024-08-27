import React from "react";
import "./ExperienceDetails.css";

const ExperienceDetail = ({ summary, problemStatement, workDescription, challenges, extraEfforts, diagrams }) => {
    return (
        <div className="experience-detail">
            {/* Summary Section */}
            <section className="experience-summary">
                <h2>Summary</h2>
                <p>{summary}</p>
            </section>

            {/* Problem Statement Section */}
            <section className="experience-problem">
                <h2>Problem Statement</h2>
                <p>{problemStatement}</p>
            </section>

            {/* Work Description Section */}
            <section className="experience-work">
                <h2>Work Description</h2>
                <p>{workDescription}</p>

                {/* Diagrams/Images */}
                {/* <div className="experience-diagrams">
                    {diagrams.map((diagram, index) => (
                        <div key={index} className="diagram">
                            <img src={diagram.src} alt={diagram.alt} />
                            <p>{diagram.caption}</p>
                        </div>
                    ))}
                </div> */}
            </section>

            {/* Extra Efforts Section */}
            <section className="experience-extra-efforts">
                <h2>Going Above and Beyond</h2>
                <p>{extraEfforts}</p>
            </section>
        </div>
    );
};

export default ExperienceDetail;
