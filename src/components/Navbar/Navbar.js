import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'
import './Navbar.css'
import logo from '../../images/logo1.png'
function Navbar() {
    const [click, setclick] = useState(false);
    const handleClick = ()=> setclick(!click);
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <div className="logo">
                        <Link to='/' className="navbar-logo">
                        <img src={logo} alt="logo" width="89"/>
                        </Link>
                    </div>
                </div>
                
                <div className="menu-icons" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <div className={click ? 'nav-lists active' : 'nav-lists'}>
                    <ul className="nav-menu">
                        <li className="nav-items">  
                            <Link to='/' className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-items">  
                            <Link to='/About' className="nav-links">
                                About
                            </Link>
                        </li>
                        <li className="nav-items submenu">  
                            <Link to='/Courses' className="nav-links">
                                Courses
                            </Link>
                            <ul className="dropdown">
                                <li>
                                <Link to='/Courses/Phonix' className="nav-links">
                                    Phonix
                                </Link>
                                </li>
                                <li>
                                <Link to='/Courses/Beginner' className="nav-links">
                                    Beginner
                                </Link>
                                </li>
                                <li>
                                <Link to='/Courses/Advanced' className="nav-links">
                                    Advanced
                                </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-items">  
                            <Link to='/Contact' className="nav-links">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="sign-up">
                        <Link to='/Register' className="Register">Register</Link>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Navbar
