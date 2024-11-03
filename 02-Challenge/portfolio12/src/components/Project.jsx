import React from "react";
import Navigation from './Navigation';

const Project = ({ title, description }) => {
    return (
        <div className="project">
            <Navigation /> 
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Project;