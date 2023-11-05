import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component{
    state  = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavbarItem'>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        {
                        return(
                            <li key={index} className={item.cName}>
                                <NavLink to={item.url} className={item.cName}>
                                    {item.title}
                                </NavLink>
                            </li>
                        );
                        }
                    })}
                </ul>
            </nav>
        )
    }
} 

export default Navbar