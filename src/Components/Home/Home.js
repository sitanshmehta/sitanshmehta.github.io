import React, { Component } from 'react';
import './Home.css'
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "Home - Sitansh Mehta";
    }, []);
    return (
        <div className='home-page'>
            <div className='intro'>
                <h1 className='intro-greeting'>Hey, I'm <span className='name'>Sitansh Mehta</span></h1>
                <p className='intro-content'>
                    I'm a Mechatronics Engineering undergraduate at the University of Waterloo and I'm
                    interested in:
                </p>
                <ul className='interest-list'>
                    <li>Web and Desktop Development</li>
                    <li>Machine Learning</li>
                    <li>Computer Vision</li>
                    <li>System Programming</li>
                    <li>Low Level Hardware Programming</li>
                    <li>Control Systems</li>
                </ul>
                <p className='intro-content'>
                    I’m excited to be returning to Skygauge Robotics as a Software Engineer Co-op for Fall 2024, and I’m actively seeking my next opportunity for Summer 2025 (April - August). Check out my experiences!
                </p>
                <p className='intro-note'>
                    <div className='intro-item'>
                        s65mehta@uwaterloo.ca
                    </div>
                    <a href='https://github.com/sitanshmehta'>
                        <div className='intro-item'>
                            Github
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/sitanshmehta/'>
                        <div className='intro-item'>
                            Linkedin
                        </div>
                    </a>

                </p>
            </div>
            <div className='profile-image-container'>
                <img src="/images/profile.png" alt='Sitansh Mehta' className='profile-image' />
            </div>
        </div>
    );
};

export default Home;
