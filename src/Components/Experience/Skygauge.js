import React, { Component, useEffect } from 'react';
import './Skygauge.css';
import ExperienceDetail from './ExperienceDetails';
import CollapsibleSection from '../Helpers/Collaplsable';
import ImageSlider from '../Helpers/ImageSlider';
import SkygaugeIndex from '../Helpers/SkygaugeIndex';


const Skygauge = () => {
    useEffect(() => {
        document.title = "Skygauge - Sitansh Mehta";
    }, []);


    const scrollTo = (id) => {
        const glossarySection = document.getElementById(id);
        if (glossarySection) {
            glossarySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const mm_images = [
        { src: '/images/MM/Multiple_Master_Materials.png', title: 'Create Master Material Form' },
        { src: '/images/MM/MM_Example.png', title: 'Master Material Table After Submission' }
    ]

    const bom_images = [
        { src: '/images/BOM/BOM_New.png', title: 'BOM New Parent Form' },
        { src: '/images/BOM/BOM_New_Table.png', title: 'Result of Form Submission from Previous Image' },
        { src: '/images/BOM/BOM_Variant.png', title: 'BOM Variant Form' },
        { src: '/images/BOM/BOM_Var_Table.png', title: 'Result of BOM Variant Form Submission' },
        { src: '/images/BOM/BOM_DB.png', title: 'Join of Part Numers and BOM Table in Postgres' },
    ];


    const auto_image = [
        { src: '/images/Slow_DB.png', title: 'Automigrate usage in backend' }
    ]

    const po_image = [
        { src: '/images/PO/PO_form.png', title: 'PO Form' },
        { src: '/images/PO/PO_JS.png', title: 'Excel Upload Component Used in PO Form Code' },
        { src: '/images/PO/PO_Excel.png', title: 'Excel Upload Component' }
    ]

    const integration_images = [
        { src: '/images/Integration/High_Level_Architecture.jpeg', title: 'High Level Architecture' },
        { src: '/images/Integration/Serial_DB.jpeg', title: 'Serialisation Database Implementation' },
        { src: '/images/Integration/GORM_1.png', title: 'GORM Models' },
        { src: '/images/Integration/GORM_2.png', title: 'GORM Models' },
    ]

    const operation_images = [
        { src: '/images/Operations/Operations_General.png', title: 'Visualising Database Model: General Plant' },
        { src: '/images/Operations/Operations_Example.png', title: 'Example of Database Model with Two Plants and 1 Client Plant' },
        { src: '/images/Operations/Models.png', title: 'GORM Models' },
    ]

    const poster = [
        { src: '/images/Poster.png', title: 'Posters around Office' },
    ]

    const letter = [
        { src: '/images/Co-op_of_the_year.png', title: 'Waterloo Co-op of The Year Nomination Letter' },
    ]
    const gr_images = [
        { src: '/images/PO_And_GR/CreatePO.png', title: '1. Creating a Purchase Order' },
        { src: '/images/PO_And_GR/PO_Created.png', title: '2. PO Created' },
        { src: '/images/PO_And_GR/Completing_GR.png', title: '3. Creating Goods Receipt after Parts Arrive' },
        { src: '/images/PO_And_GR/PO_After_GR.png', title: '4. PO After Completing GR' },
        { src: '/images/PO_And_GR/GR_Movement_Tracker.png', title: '5. GR Inventory Tracker' },
    ]

    const transfer_images = [
        { src: '/images/Transfer/Transfer_Create.png', title: '1. Transferring a Part from  an Area in Production to a Bin in the Warehouse' },
        { src: '/images/Transfer/Inventory_Tracker.png', title: '2. Result of Transfer from previous image in Inventory Transfer table' },
    ]

    const backflush = [
        { src: '/images/Backflush/BF.png', title: '1. Completing Backflush For a Subsystem' },
        { src: '/images/Backflush/Inventory_Tracker_BF.png', title: '2. Inventory Tracker after completing Backflush' },
    ]

    const builder = [
        { src: '/images/Builder.png', title: 'Subsystem Builder (Red rows indicate the part is in insufficient quantity)' },
    ]

    const handle_submit = [
        { src: '/images/Submit/MM1.png', title: 'Master Materials Error Catching' },
        { src: '/images/Submit/MM2.png', title: 'Master Materials Error Catching' },
        { src: '/images/Submit/MM3.png', title: 'Master Materials Error Catching' },
        { src: '/images/Submit/MM4.png', title: 'Master Materials Error Catching' },
        { src: '/images/Submit/Transfers.png', title: '1. Transfer Form Handle Submit Calls validForm function' },
        { src: '/images/Submit/Transfers2.png', title: '2. validForm function calls checkRowsForSubmit' },
        { src: '/images/Submit/Transfers3.png', title: '3. checkRowsForSubmit function' },
    ]

    const transaction = [
        { src: '/images/Transaction/Transaction1.png', title: '1. Backend of Transfer Form: Receiving the data from the frontend' },
        { src: '/images/Transaction/Transaction2.png', title: '2. Backend of Transfer Form: Transaction with multiple operations within it' },
    ]

    const documentation = [
        { src: '/images/Documentation/Notion3.png', title: 'List of Documents Left in Notion' },
        { src: '/images/Documentation/Notion2.png', title: 'Transfer Form Documentation' },
        { src: '/images/Documentation/Notion1.png', title: 'Transfer Form Documentation' },
        { src: '/images/Documentation/Flow.png', title: 'Flow of Data in the Transfer Parts Operation' },

    ]
    return (
        <div className='main-content'>
            <div className='index'>
                <SkygaugeIndex />
            </div>
            <div className="experience-detail">
                <section className="experience-summary">
                    <h1> <a href="https://www.skygauge.co/" target="_blank" rel="noopener noreferrer"> Fullstack Developer Co-op at Skygauge Robotics</a></h1>
                    <h6
                        onClick={() => scrollTo('skygauge_recommendation')}
                        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                    >
                        Nomination for Waterloo Co-op of the Year
                    </h6>
                    <h6
                        onClick={() => scrollTo('glossary')}
                        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                    >
                        Glossary: Definitions for Reference
                    </h6>
                </section>

                {/* Summary Section */}
                <section id="summary" className="experience-summary">

                    <h2>1. Executive Summary</h2>
                    <p>Skygauge Robotics is an innovative Toronto-based startup making significant strides in the<span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => scrollTo('NDT')}> non-destructive testing (NDT) </span> and industrial inspection market with their advanced drone technology. To support their rapid growth and meet the increasing demands of the market, they needed a dependable and intuitive ERP system. </p>
                    <p>
                        As a <strong>Full Stack Software Engineer Co-op</strong> at Skygauge, I was entrusted with rebuilding an existing internal ERP system that needed richer functionality.
                    </p>
                    <p>
                        This role required me to go beyond traditional development duties. I immersed myself in the company’s supply chain operations, gathered comprehensive stakeholder requirements, transformed these into a robust, user-friendly ERP system, and ensured the adoption of the system across the company.
                    </p>
                    <p>
                        Over the course of four months, I:
                    </p>
                    <ul className="experience-summary-list">
                        <li>Redesigned and redeveloped the system’s frontend and backend using <strong>React, Golang,</strong> and <strong>PostgreSQL</strong>.</li>
                        <li>Automated Inventory Tracking, BOM Management, Purchase Order Management, Serialisation of Electronics, and more, improving accuracy, and usability, driving widespread adoption across the company.</li>
                        <li>Streamlined operations, saving the operations team over <strong>50 hours per week</strong> and the company <strong>100,000 CAD annually</strong>.</li>
                    </ul>
                </section>

                <section>
                    <h2 id="overview">2. Company Overview</h2>
                    <p>
                        Skygauge Robotics, like many hardware startups, operates with a dynamic production line that builds, tests, certifies, and repairs drones to meet demand.
                        The company has a research and development (R&D) department that explores new features, electronics, and mechanical systems based on client requests or internal innovations.
                        Successful R&D features are pushed to the production line, while certified drones from production are deployed on client jobs or to client bases.
                        Each of these three key locations—Production, R&D, and Deployment—maintains its own internal inventory of frequently needed parts.
                    </p>
                </section>
                {/* Problem Statement Section */}
                <section className="experience-problem">
                    <h2 id="design">3. Architecture and Design </h2>

                    <h3 id="query">3.1 Improve Database Query Time</h3>
                    <p>
                        When I joined the project, I noticed an opportunity to enhance the software's performance, as database queries were taking 5-6 seconds to complete. I identified that the AutoMigrate function, which checks and updates the database schema, was being called with every query, adding unnecessary overhead.

                        To optimize the system, I moved AutoMigrate to the application's initialization phase, ensuring it only runs once at startup. Additionally, I improved database connection handling by implementing connection pooling. These enhancements reduced query times to a fraction of a second, significantly boosting the software's speed and responsiveness.
                        <ImageSlider images={auto_image} />
                    </p>

                    <h3 id="logging">3.2 Integrate ERP with Logging Script</h3>
                    <p>
                        Parts at Skygauge were tracked through both batch numbers (e.g., screws) and serial numbers (e.g., motors, electronics), with serialized parts being high-value components requiring detailed tracking throughout their lifecycle.
                        This granular tracking included their movement and hierarchical history within the operation.
                    </p>
                    <p>
                        To achieve this, I integrated the ERP system with the existing MySQL database, which logged critical data such as drone health, serialized subsystems, and sensor data.
                        By modifying an open-source script, I enabled real-time synchronization of this data into the ERP system's PostgreSQL (PSQL) database, ensuring the ERP could access all necessary information without directly interacting with MySQL.
                    </p>
                    <p>
                        Central to this integration was the implementation of serialization on the inventory side, allowing the system to correlate inventory data with operational logs. Upon procurement, parts were serialized during the Goods Receipt process, while subsystems were serialized during production via backflushing.
                    </p>
                    <p>
                        The system I developed included a comprehensive tracking mechanism, allowing detailed oversight of each serialized part’s lifecycle.
                    </p>
                    <p>
                        To link the subsystem data with inventory data, I created a foreign key relationship between the mission_summaries table (from MySQL) and the serial_numbers table (in PSQL). The mission_summaries table contained entries for each drone flight, which were linked to the drones' serial numbers. Since the serial_numbers table was linked to the part_numbers table (the core of the PSQL database), this connection allowed us to unify data from both databases.
                    </p>
                    <p>
                        Example: Two drones backflushed in production are given serial number D00067 and D00068. If both drones have motors from different vendors, we can quantify the quality of the vendor supply based on weather, flight time, geography, power consumption and more.
                    </p>
                    <ImageSlider images={integration_images} />

                    <h3 id="backend">3.3 Backend Design in Golang</h3>
                    <p>
                        When I joined, the backend architecture featured an API layer, a handler layer, and GORM-based database models. While functional, there was potential to improve scalability and maintainability. To address this, I implemented the repository design pattern, restructuring the backend into three layers: Request Receiving (Handler Layer), Business Logic (Service Layer), and Data Retrieval (Repository Layer).
                    </p>
                    <p>
                        This approach was modular, and the separated responsibilities of the different backend layers, making the codebase more scalable, testable, and easier to extend, while also streamlining the implementation of complex business logic in the database models.
                    </p>

                    <h3 id="models">3.4 Database Modelling of Company Operations</h3>
                    <p>
                        The original ERP system at Skygauge featured a straightforward database model that met the company's initial needs.
                        As operations grew more complex, I saw an opportunity to enhance the system to better reflect the layered workflows.
                        Subsystems often transition through stages like Production, Testing, or Repairs, and I aimed to capture more detailed data on these movements, such as repair frequencies and mean time between failures.
                    </p>
                    <p>
                        To achieve this, I redesigned the database to provide a more comprehensive and flexible structure. I introduced a framework that models Skygauge's offices as "plants" (e.g., Toronto, Texas), divided into "locations" (e.g., Production, R&D, Warehouse), and further into "Operational Areas" or "Areas" (e.g., Production Line, Maintenance). Storage capabilities are managed within "Bins," allowing for a dynamic inventory system.
                    </p>
                    <p>
                        This new model better mirrors Skygauge's operations, improving part movement tracking and enabling flexible storage management based on operational needs.
                    </p>
                    <ImageSlider images={operation_images} />
                </section>
                <section className="experience-problem">
                    <h2 id='features'>4. Key Features: (Organised by WorkFlow) </h2>
                    <h3 id='mm'>4.1 Master Material Management: </h3>
                    <p>
                        Skygauge frequently procured multiple parts from the same vendor, so I developed a form that allowed users to register several new parts for a single vendor simultaneously.
                        To streamline the process, I included an option for users to upload an Excel file, significantly speeding up the workflow.
                        This feature was particularly beneficial for the R&D team, which often uploaded around 50 parts at a time through Excel.
                    </p>
                    <ImageSlider images={mm_images} />

                    <h3 id='bom'>4.2 Bill of Materials (BOM) Management</h3>
                    <p>
                        Managing BOMs is crucial for accurate documentation, production planning, cost management, and inventory control.
                    </p>
                    <p>
                        I developed forms to efficiently create and manage BOMs, including variants, for drones. For example, just as the iPhone 8 and iPhone SE 2 share a core BOM with slight variations, our drones have multiple subsystems, each with its own BOM, often spanning several levels.
                    </p>
                    <p>
                        To streamline this process, I built a modular React component using Material-UI (MUI) that displays BOMs in a clear, navigable format. This component became the foundation for other tables and forms within the system, simplifying development and enhancing the user experience.
                    </p>
                    <ImageSlider images={bom_images} />

                    <h3 id='po'>4.3 Purchase Order Management </h3>
                    <p>
                        Creating purchase orders in the existing ERP system took 5-6 minutes of manual data entry from excel files.
                    </p>
                    <p>
                        To streamline this process, I developed a React component that processes the Excel file directly on the client side, automatically populating the form fields with the necessary data.
                        This reduced the time required for form submission to 30-45 seconds.
                    </p>
                    <p>
                        Building a modular component for uploading and processing Excel files also streamlined other forms that relied on Excel data, leading to significant time savings across multiple workflows.
                    </p>
                    <ImageSlider images={po_image} />

                    <h3 id='gr'>4.4 Goods Receipt</h3>
                    <p>
                        Vendors sometimes deliver quantities that are fewer than, more than, or exactly as ordered, and occasionally, a completely different part might arrive. To handle these variations, I developed a Goods Receipt form linked to purchase orders.
                        This form allows users to select a purchase order and input the actual quantity of goods received.
                        A purchase order is marked as complete (or closed) only when the received quantity matches the ordered quantity exactly.
                        All Goods Receipts and Purchase Orders are displayed in an easily accessible table for tracking and verification.
                    </p>
                    <p>
                        The Goods Receipt process serves as the entry point for parts into the system and represents the first inventory movement. Before I joined, the system used a unique identifier, known internally as a document number, to track each type of inventory movement—such as GR for Goods Receipt, TR for Transfer, BF for Backflush, AD for Adjustment, and others. For example, the first Goods Receipt recorded in the system would be assigned the document number GR0001, and the thirteenth would be GR0013. This structured numbering system helped maintain clear and consistent tracking of all inventory movements across the company.
                    </p>
                    <p>
                        Below is an example of creating a purchase order and completing goods receipt after procurement.
                    </p>
                    <ImageSlider images={gr_images} />

                    <h3 id='transfers'>4.5 Transfers and Inventory Movements</h3>
                    <p>
                        Parts were frequently moved between various locations within and outside Skygauge, such as from the warehouse to production or between areas in production. To streamline this process, I developed a "Transfer Form" that lets users select the source and destination plant, location, and area for parts, with built-in validation to prevent over-transfers.
                    </p>
                    <p>
                        When a transfer is initiated on the frontend, an array of data is sent to the backend, including:
                    </p>
                    <ul className='experience-summary-list'>
                        <li>Part Number</li>
                        <li>Source and Target Plant/Location/Area/Bin</li>
                        <li>Movement Type (e.g., Transfer, Goods Receipt, Backflush)</li>
                        <li>Quantity Transferred</li>
                        <li>A Boolean value indicating whether the transfer has a defined source plant/location/area/bin</li>
                    </ul>
                    <p>
                        In the backend, the following actions occur:
                    </p>
                    <ul className='experience-summary-list'>
                        <li>
                            The system checks the quantity of the part at the target location.
                            If the part does not exist at the target, it is created with the transferred quantity.
                            If it already exists, the transferred quantity is added to the existing quantity.
                            Concurrently, the transferred quantity is subtracted from the source location.</li>
                        <li>
                            An entry is made in the inventory movement table within the PostgreSQL database.
                            However, to meet my operations manager's preference, this single database entry is displayed as two entries on the frontend—one showing the deduction from the source and another showing the addition to the target.
                        </li>
                    </ul>

                    <p>
                        Initially, the Transfer Form didn't support transferring specific serialized parts, which I later added as a pop-up feature.
                    </p>
                    <p>
                        The backend logic for part transfers is modular, extending to other operations like Goods Receipt and Backflush, with conditional steps for their unique requirements.
                        For example, GR only has a target plant/location/area/bin to move the parts to (while a transfer has source and targets), which is why there is only one entry in the Inventory Movement Table.
                    </p>
                    <p>
                        Below is an example of transferring a part from WIP Area in Production to a Bin in the Warehouse Area of the Main Warehouse / Storage of the Headquarters.
                    </p>
                    <ImageSlider images={transfer_images} />

                    <h3 id='bf'>4.6 Backflush</h3>
                    <p>
                        In production, a subsystem is backflushed once it has been fully assembled. Subsystems are often used to construct other subsystems, continuing in this manner until the final product—the drone—is built and backflushed. The backflush process can only be completed in the Work-in-Progress (WIP) area of the production location. If there are insufficient parts available, the subsystem cannot be assembled or backflushed.
                    </p>
                    <p>
                        I developed a form that allows users to search for a subsystem to backflush. The form displays the quantities required according to the BOM (Bill of Materials) and the quantities currently available in the production line, ensuring that users can easily verify whether the backflush can be completed.

                        When a subsystem is backflushed, the parts used to build it should be deducted from the area and considered consumed. The subsystem itself should be added to or created in the area it was built in.
                    </p>
                    <p>
                        This can be observed in the example below.
                    </p>
                    <ImageSlider images={backflush} />

                    <h3 id='batch'>4.7 Batch Transfers (Subsystem Builder) </h3>
                    <p>
                        When production engineers needed to assemble subsystems with over 50 parts, completing the Transfer Form could take 2-3 hours. To streamline this process, I developed the Subsystem Builder, a tool that automatically retrieves all parts associated with a subsystem from inventory based on the BOM, displays their availability and location, and generates a "pull list" for easy retrieval. This reduced workflow time to just 15-20 minutes.
                    </p>
                    <ImageSlider images={builder} />

                    <h3 id='procurement'>4.8 Procurement Planner</h3>
                    <p>
                        The Subsystem Builder previously mentioned not only streamlined the assembly process but also laid the foundation for the procurement planner. Building on it, I created a new form with an additional feature that allows users to create a purchase order for any missing parts directly from the form.
                    </p>
                </section>
                <section className="experience-problem">
                    <h2 id='data'>5. Ensuring Data Integrity</h2>
                    <h3 id='form'>5.1 Form Validation</h3>
                    <p>
                        To ensure the integrity of the system, I implemented validation for every input field before allowing submission and sending data to the backend for processing. Error messages were sent through the window alert() function. My goal was to anticipate and handle every possible incorrect user input, minimizing errors. Below is an example of how I applied this validation approach in the Create Multiple Master Materials form, along with a code snippet from the Transfer Form that illustrates this process.
                    </p>
                    <ImageSlider images={handle_submit} />

                    <h3 id='acid'>5.2 ACID Principles and Transactions</h3>
                    <p>
                        I designed the system to ensure that the frontend performed minimal data processing, delegating the bulk of computation to the backend before any interaction with the database. This approach centralized the processing logic, allowing for more consistent and efficient data handling. To further safeguard data integrity, I encapsulated the backend logic for each set of operations within an atomic transaction. This means that if any operation within the set failed, the entire transaction would be rolled back, significantly reducing the risk of data corruption. This approach not only streamlined the frontend but also made the system more robust by ensuring that all database interactions were handled in a controlled, fail-safe manner. Below is an example of the backend logic for handling Transfers, illustrating how atomic transactions were implemented to maintain data consistency.
                    </p>
                    <ImageSlider images={transaction} />
                </section>

                <section className="experience-problem">
                    <h2 id='adoption'>6. ERP System Adoption Within Company</h2>
                    <p>
                        Throughout the development process, I actively facilitated the company-wide adoption of the ERP system by engaging with colleagues and guiding them through the transition from their existing processes to using the new system.
                    </p>
                    <p>
                        Initially, inventory tracking was done via Slack, which was convenient but offered room for optimization. To transition them to the new system, I started by manually tracking inventory usage with a notebook, then moved to a Google Sheet (I put posters with the QR code to the google sheet around the office), and finally introduced my system, which they found much easier and more enjoyable to use.
                    </p>
                    <p>
                        Previously, tasks like managing BOMs, Purchase Orders, and Goods Receipts were handled through Excel and Notion. I helped colleagues seamlessly transition these processes into the ERP system. I continuously delivered new features and incorporated feedback to ensure the system met the evolving needs of stakeholders.
                    </p>
                    <ImageSlider images={poster} />
                </section>

                <section id="docs" className="experience-problem">
                    <h2> 7. Documentation</h2>
                    <p>
                        As the primary developer of the ERP system, I handled debugging and maintenance, ensuring minimal downtime to avoid discrepancies between system data and real-world inventory. To mitigate risks, we used an Excel backup for real-time data capture. When issues arose, I manually reconstructed the database in Excel and documented the recovery process.
                    </p>
                    <p>
                        Towards the end of my term, I focused on comprehensive documentation for all critical components, provided maintenance and debugging instructions, and outlined potential features like work orders and flight scheduling for future system enhancements. Below are some of the documentation and future plans I created:
                    </p>
                    <ImageSlider images={documentation} />
                </section>

                <section id='skygauge_recommendation' className="experience-problem">
                    <h2>8. Co-op of the Year Recommendation from Skygauge</h2>
                    <div className="resume-viewer">
                        <iframe
                            src="Co-op_of_the_Year_Skygauge_Letter.pdf"
                            type="application/pdf"
                            width="100%"
                            height="700px"
                            style={{ border: "none" }}
                            title="Recommendation Letter"
                        />
                    </div>
                    {/* <ImageSlider images={letter} /> */}
                </section>

                <section className="experience-problem">
                    <h2 id='acknowledgement'>9. Acknowledgement</h2>
                    <p>
                        I want to express my deepest gratitude to the entire Skygauge Team for this incredible term.
                        A special thanks to Linar, Maks, and Nikita for creating this opportunity.
                        Sergeui, I am sincerely grateful for you entrusting me with such significant responsibilities.
                        Vandan, Vadym, and Shiejan -- thank you for your kindness, patience, and willingness to help whenever I needed it. Gino and Mathew, I could not have resolved my merge conflicts without you.
                        Working alongside such a talented and supportive team has been an invaluable experience, and I am truly thankful for the opportunity to contribute to Skygauge’s journey.
                    </p>

                </section>


                <section id="glossary" className="glossary-section">
                    <h2>10. Glossary: Definitions for Reference</h2>
                    <dl>
                        <dt>Supply Chain</dt>
                        <dd>The entire network of entities, resources, activities, and technologies involved in the creation and sale of a product, from the delivery of source materials to the manufacturer, all the way to its delivery to the end user.</dd>

                        <dt id='BOM'>Bill of Materials (BOM)</dt>
                        <dd>A comprehensive list of raw materials, components, and assemblies required to construct, manufacture, or repair a product. It includes part numbers, descriptions, quantities, and units of measure.</dd>

                        <dt>Bill of Material Variant</dt>
                        <dd>
                            An alternative version of a Bill of Materials representing different configurations or versions of a product, allowing customization while keeping the core structure intact.
                            <br /><strong>Example:</strong> The iPhone 8 and iPhone SE (2nd generation) share many components, but the iPhone SE (2nd generation) includes a newer chipset (A13 Bionic compared to A11 Bionic), making it a variant of the original BOM used for the iPhone 8.
                        </dd>


                        <dt>Goods Receipt</dt>
                        <dd>A process where purchased goods are received by a company from a vendor, recorded in the system, updating inventory and confirming the arrival of goods as per the purchase order.</dd>

                        <dt>Purchase Orders</dt>
                        <dd>A formal document issued by a buyer to a seller, indicating the type, quantity, and agreed price for products or services, used to control the purchasing process.</dd>

                        <dt>Backflush</dt>
                        <dd>
                            A manufacturing method where materials are automatically deducted from inventory based on the production of finished goods, simplifying inventory management.
                            <br /><strong>Example:</strong> In the production of a car, once the assembly is completed, the system backflushes to deduct the exact quantities of tires, engines, and other components used, rather than manually entering each part's usage during the assembly process.
                        </dd>

                        <dt>Dynamic Bin</dt>
                        <dd>A flexible storage location in a warehouse or production environment that does not have a fixed position, allowing efficient space utilization based on real-time inventory needs.</dd>

                        <dt>Inventory Transfer / Inventory Movements</dt>
                        <dd>The movement of inventory items from one location to another within a company’s premises, such as between warehouses, production areas, or retail locations.</dd>

                        <dt>Subsystem / Subassembly</dt>
                        <dd>A smaller, self-contained component of a larger system or assembly, often assembled separately and later incorporated into the final product.</dd>

                        <dt>Serialisation</dt>
                        <dd>The process of assigning a unique serial number to each individual unit or component of a product, allowing precise tracking through its lifecycle.</dd>

                        <dt id='NDT'>Non-Destructive Testing</dt>
                        <dd>Inspection methods used to evaluate the properties of a material, component, or system without causing damage, ensuring product integrity and safety.</dd>

                        <dt>Inspection Market</dt>
                        <dd>The industry sector providing services and technologies for the inspection, testing, and certification of products and processes, ensuring compliance with regulatory and safety standards.</dd>
                    </dl>
                </section>
            </div>
        </div>
    );
}

export default Skygauge;