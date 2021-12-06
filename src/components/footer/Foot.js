import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa'

// import { Link } from 'react-router-dom'
// import logo from '../../images/logo1.png'
import './footer.css'
function Foot() {
    let url="#"
    return (
        <>
        <div className="footer">
            <div className="footer-company">
                <h1 className="company-name">Smart Learn English Academy</h1>
                <p className="company-slogan">
                    <span className="f-letter">S</span>PEAK |  
                    <span className="f-letter"> E</span>XCEL |  
                    <span className="f-letter"> A</span>CHIEVE 
                </p>
            </div>
            <div className="footer-content">
                {/* <div className="footer-card card1">
                    <div className="logo-wrap">
                        <Link to='/' className="logo">
                            <img src={logo} alt="logo" width="89"/>
                        </Link>
                    </div>
                </div> */}
                <div className="footer-card card1">
                    <h4 className="head-name">COURSES</h4>
                    <div className="card-body">
                        <p><Link to='/Phonix' className="phonix">Phonix</Link></p>
                        <p><Link to='/Begginer' className="beginner">Beginner</Link></p>
                        <p><Link to='/Advanced' className="advanced">Advanced</Link></p>
                    </div>
                </div>
                <div className="footer-card card2">
                    <h4 className="head-name">CONTACT</h4>
                    <div className="card-body">
                        <p><a href="mailto:chandru6501@gmail.com" className="email">chandru6501@gmail.com</a></p>
                        <p><a href="tel:+916374520688" className="mobile">6374520688</a></p>
                    </div>
                </div>
                <div className="footer-card card3">
                    <h4 className="head-name">IMAGE CREDITS</h4>
                    <div className="card-body">
                        <p><a href="https://www.freepik.com/" rel="noreferrer" target="_blank">Freepik</a></p>
                    </div>
                </div>
            </div>
            <div className="footer-social">
                <h5 className="foot-social-head">Follow Us On</h5>
                <div className="social-links">
                    <a href={url} className="instagram social" rel="noreferrer" target="_blank"><FaInstagram /></a>
                    <a href={url} className="facebook social" rel="noreferrer" target="_blank"><FaFacebook /></a>
                    <a href={url} className="twitter social" rel="noreferrer" target="_blank"><FaTwitter /></a>
                    <a href={url} className="linkedin social" rel="noreferrer" target="_blank"><FaLinkedin /></a>
                </div>
            </div>
            <div className="footer-copyright">
                © 2021 SmartLearn English Academy | <a href="https://curatedsolutions.in/" rel="noreferrer" target="_blank" className="cs">CuratedSolutions</a>
            </div>
        </div>  
        </>
    )
}

export default Foot
