import React, { useState } from 'react';
import './Collapsible.css';

const CollapsibleSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible">
            <button className="collapsible-header" onClick={toggleCollapsible}>
                <h2>{title}</h2>
                <span className="collapsible-arrow">
                    {isOpen ? '▲' : '▼'}
                </span>
            </button>
            {isOpen && (
                <div className="collapsible-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default CollapsibleSection;
