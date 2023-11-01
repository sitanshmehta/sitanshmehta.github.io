import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'

class Navbar extends Component{
    state  = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavbarItem'>
                {/* <h1 className='navbar-logo'>Home<i className="fas fa-house"></i></h1> */}
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        if (item.dropdown){
                            return(
                                <li key={index} className={item.cName}>
                                    <a href={item.url} className={item.cName}>
                                        {item.title} 
                                    </a>
                                </li>
                            );
                        } else {
                            return(
                                <li key={index} className={item.cName}>
                                    <a href={item.url} className={item.cName}>
                                        {item.title}
                                    </a>
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