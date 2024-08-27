import React from 'react';
import './SkygaugeIndex.css';

const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const index = [
    {
        title: '1. Executive Summary',
        id: 'summary',
    },
    {
        title: '2. Company Overview',
        id: 'overview',
    },
    {
        title: '3. Architecture and Design',
        id: 'design',
        subpages: [
            {
                title: '3.1 Improve Database Query Time',
                id: 'query',
            },
            {
                title: '3.2 Integrate ERP with Logging Script',
                id: 'logging',
            },
            {
                title: '3.3 Backend Design in Golang',
                id: 'backend',
            },
            {
                title: '3.4 Database Modelling of Company Operations',
                id: 'models',
            },
        ]
    },
    {
        title: '4. Key Features (Organised by Workflow)',
        id: 'features',
        subpages: [
            {
                title: '4.1 Master Material Management',
                id: 'mm'
            },
            {
                title: '4.2 Bill of Materials (BOM) Management',
                id: 'bom'
            },
            {
                title: '4.3 Purchase Order Management',
                id: 'po'
            },
            {
                title: '4.4 Goods Receipt',
                id: 'gr'
            },
            {
                title: '4.5 Transfers and Inventory Movements',
                id: 'transfers'
            },
            {
                title: '4.6 Backflush',
                id: 'bf'
            },
            {
                title: '4.7 Batch Transfers (Subsystem Builder)',
                id: 'batch'
            },
            {
                title: '4.8 Procurement Planner',
                id: 'procurement'
            },
        ]
    },
    {
        title: '5. Ensuring Data Integrity',
        id: 'data',
        subpages: [
            {
                title: '5.1 Form Validation',
                id: 'form'
            },
            {
                title: '5.2 ACID Principles and Transactions',
                id: 'acid'
            },
        ]
    },
    {
        title: '6. ERP System Adoption Within Skygauge',
        id: 'adoption'
    },
    {
        title: '7. Documentation ',
        id: "docs"
    },
    {
        title: '8. Waterloo Co-op of The Year Nomination Letter',
        id: 'skygauge_recommendation'
    },
    {
        title: '9. Acknowledgement',
        id: 'acknowledgement'
    },
    {
        title: '10. Glossary',
        id: 'glossary'
    },

]


function SkygaugeIndex() {
    return (
        <div className="sky-index">
            <ul>
                {index.map((section, index) => (
                    <li className="index-link" key={index} onClick={() => scrollTo(section.id)}>
                        {section.title}
                        {section.subpages && (
                            <ul>
                                {section.subpages.map((subpage, subIndex) => (
                                    <li
                                        className="index-link"
                                        key={subIndex}
                                        onClick={(e) => {
                                            e.stopPropagation();  // Stop the event from propagating to the parent
                                            scrollTo(subpage.id);
                                        }}
                                    >
                                        {subpage.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default SkygaugeIndex;
