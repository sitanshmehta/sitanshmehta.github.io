import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => (
                        <li key={index} className='nav-item'>
                            <NavLink
                                to={item.url}
                                className='nav-links'
                                activeClassName='active'
                                onClick={() => setClicked(false)}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
