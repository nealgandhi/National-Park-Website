import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { MenuItems } from './MenuItems'
import './Navbar.css'


export class Navbar extends Component {
    state = {clicked: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            // Creating a Navigation Bar to handle routing through links that are coded into MenuItems.js
            <nav className="Navbar">
                <div className="title-logo">
                    <h1 className="navbar-logo">National Parks<i className="fab fa-react"> </i></h1>
                </div>
                <div className="menuIcon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}> </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        ); 
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
