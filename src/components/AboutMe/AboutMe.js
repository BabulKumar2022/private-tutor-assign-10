import React from 'react';
import './AboutMe.css'
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className='about-container'>
            <div className="row col-4  mx-auto">
                <h1 className='about-header text-center'>About me</h1>
                <div className="about-img ">
                     <img src="./images/tutor (2).jpg" alt="" />
                </div>
                <div className="about-description mt-3 ">
                    <h4>Name: Babul Kumar Biswas </h4> 
                    <h5> Bss(Hons), MSS in Economics</h5>
                    <p>I am a professional private tutor. I help all students about Math,Science, Computer and more....</p>
                    
                </div>
                <Link to="/home" className="btn btn-primary">Go home</Link>
            </div>
            
           

        </div>
    );
};

export default AboutMe;