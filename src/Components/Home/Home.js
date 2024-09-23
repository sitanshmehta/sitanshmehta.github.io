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
                    Welcome to my website where I hope to show you more my projects, experiences, and ideas. Communicating complex engineering concepts is something I’m actively working on and this website this a part of that journey.
                </p>
                <p className='intro-content'>
                    I'm a Mechatronics Engineering undergraduate at the University of Waterloo. Most of my experiences are in:
                </p>
                <ul className='interest-list'>
                    <li>Web and Desktop Development</li>
                    <li>Machine Learning</li>
                    <li>Computer Vision</li>
                    <li>System Programming</li>
                    <li>Control Systems</li>
                </ul>
                <p className='intro-content'>
                    I’m returning to Skygauge Robotics as a Software Engineer Co-op this Fall, where I'm working on an Extended Kalman Filter (EKF), a Battery Management System, and various side projects.
                </p>
                <p className='intro-content'>
                    I’m also actively seeking opportunities for <strong>Summer 2025 (April - August)</strong>. I'm extremely interested in Robotics (especially in Brain-Computer Interfaces), Software, and Machine Learning. This term at Skygauge is super exciting because I'm working on all my core interests. Check out my experiences!
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
