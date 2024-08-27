import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume-container">
            <h1 className="resume-page-title">View and Download My Resume</h1>

            <div className="resume-viewer">
                <iframe
                    src="/Sitansh_Mehta_Resume.pdf"
                    type="application/pdf"
                    width="100%"
                    height="700px"
                    style={{ border: "none" }}
                    title="Resume"
                />
            </div>

            <div className="resume-download">
                <a href="/Sitansh_Mehta_Resume.pdf" download>
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Resume;
