import React from "react";
import Navigation from './Navigation';

const Project = ({ title, description }) => {
    return (
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <Navigation/>
        </div>
    );
};

export default Project;