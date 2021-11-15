import React, { Component } from 'react'
import './Navbar.css'
import { MenuItems } from './MenuItems'
import './Navbar.css'


export class Navbar extends Component {
    state = {clicked: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    /* add back in before "national parks"
    <img src="/nps.png" className="navbar-image"/>
    */

    render() {
        return (
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
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        ); 
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
