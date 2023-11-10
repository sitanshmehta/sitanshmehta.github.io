import React, { Component } from 'react';
import './Home.css'
import profile from './profile.png';


const Home = () => {
    return(
        <div className='home-page'>
            <div className='intro'>
                <span className='intro-name'> Hey I'm <h1 className='name'> Sitansh Mehta</h1> </span>
                <div className='intro-content'>
                    <span className='intro-content-para'>
                        I'm a Mechatronics Engineering undergraduate at the University of Waterloo
                        passionate about Software, Firmware, and Robotics. 
                    </span>
                </div>
                <div className='intro-note'>
                    <spa>
                        I'm currently restructuring the site 🧹🛠👷🏽‍♂️-- bare with me!
                    </spa>
                </div>
            </div>
            <div className='profile-image-container'>
                <img src={profile} alt='Whoops!' className='profile-image'/>
            </div>
        </div>
    )
}

export default Home;