import React from 'react';
import './Footer.css';
import logo from "../Assets/logo1.jpeg";

const Footer = () => {
    return (
        <div className="Footer_container">
            <div className="footer_elems">
                <div className="companyicon">
                    <img src={logo} alt=""/>
                </div>
                <div className="middleSection">
                    <h2>About Us</h2>
                    <p>Infoidol is a one stop platform to
                        create, store, showcase one’s
                        specialty, talent,skills, quality,
                        wisdom, learnings and also redirect
                        their content to their target audience
                        on locally and globally both levels</p>
                </div>
                <div className="sideSection">
                    <h2>Contact Us</h2>

                    <p>Infoidol PVT LTD.
                    Saranya Samuriddhi, flat no 007,
                    Green Garden Layout, Munekolala,
                    Marathahalli, Bangalore, 560037</p>

                    <h3>Email – Ask@infoidol.com</h3>

                    <h3>Mobile – +91 90080 65257</h3>
                </div>
                
            </div>
            <div className="HomeSection">
                <h3>Home</h3>
                <h3>About Us</h3>
                <h3>Talent Forum</h3>
                <h3>FAQs</h3>
                <h3>Contact Us</h3>
            </div>
        </div>
    )
}

export default Footer
