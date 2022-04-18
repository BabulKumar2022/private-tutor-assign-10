import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about-container'>
            <h1 className='about-header text-center'>About me</h1>
            <div className="about-img">
            <img src="./" alt="" />
            </div>
            <div className="about-description">
                <h4>Name: </h4> 
            </div>
           

        </div>
    );
};

export default AboutMe;