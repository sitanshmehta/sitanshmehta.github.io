import React, { Component } from 'react';
import './Home.css'
import profile from './profile.png';


const Home = () => {
    return(
        <div className='home-page'>
            <div className='intro'>
                <span> Hey I'm <h1 className='name'> Sitansh Mehta</h1> </span>
            </div>
            <div>
                <img src={profile} alt='Whoops!'/>
            </div>
        </div>
    )
}

export default Home;