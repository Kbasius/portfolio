import React from "react";
import '../Project.css';

const ProjectLinks = () => {
    const projects = [
        {
            title: "Read.ME Generator",
            description: "A simple ReadME generator made using node.js to create ReadME's quickly",
            link: "https://github.com/Kbasius/ReadM_Generator",
        },
        {
            title: "Car Thingy",
            description: "A command line application using typescript to store an array of user input vehicles.",
            link: "https://github.com/Kbasius/Car_Thingy",
        },
        {
            title: "Employee Tracker",
            description: "Typescript command line app that allows you to add employees to an SQL database",
            link: "https://github.com/Kbasius/Employee-Tracker",
        },
    ];
   
    return (
        <div className="project-links">
            {projects.map((project,index) => (
                <div className="project" key={index}>
                    <h2>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                    </h2>
                    <p>{project.description}</p>
                </div>    
            ))}
        </div>
    );
};

export default ProjectLinks;