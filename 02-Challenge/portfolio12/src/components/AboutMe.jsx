import React from "react";
import '../AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me-container about-me">
            <div className="about-me-content">
                <h1 className="header1">About Me</h1>  
                <p>Not much is happening here, this is my cat and here is a decent roasted chicken recipe. Gather all ingredients. Preheat the oven to 350 degrees F.</p>
                <p>Place chicken in a roasting pan; season generously inside and out with onion powder, salt, and pepper. Place 3 tablespoons of butter in chicken.</p>
                <p>Arrange dollops of remaining butter on the outside of chicken.</p> 
                <p>Cut celery into 3 or 4 pieces; place in the chicken cavity.</p>
                <p>Bake chicken uncovered in the preheated oven until no longer pink at the bone and the juices run clear, about 1 hour and 15 minutes.</p>
                <p>An instant-read thermometer inserted into the thickest part of the thigh, near the bone, should read 165 degrees F.</p>
                <img src="../assets/images/BeepandI.jpg" alt="My cat and I" className="about-me-image" />
            </div>    
        </div>
    );
};

export default AboutMe;
