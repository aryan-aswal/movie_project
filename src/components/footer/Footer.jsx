import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer">
            <ContentWrapper>
                {/* <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div> */}
                <div className="main-footer-div">
                    <div className="logo-about-div">
                        <div className="logo-div">
                            <img src="/movix-logo.png" alt="" className="footer-icon"/>
                        </div>
                        <div className="about-div">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis fugiat incidunt tenetur veniam laborum possimus, dolore reprehenderit illum voluptatibus vero repellendus quo, id magni quasi odio quam vel blanditiis.</p>
                        </div>
                    </div>
                    <div className="links-div">
                        <div className="category-div">
                            <h3>LINKS</h3>
                            <span onClick={()=>{navigate('/')}}>HOME</span>
                            <span onClick={()=>{navigate('/explore/movie')}}>MOVIES</span>
                            <span onClick={()=>{navigate('/explore/tv')}}>TV SHOWS</span>
                        </div>
                        <div className="about-us-div">
                            <h3>ABOUT US</h3>
                            <span>OUR STORY</span>
                            <span>TEAMS</span>
                            <span>CAREERS</span>
                        </div>
                        <div className="connect-with-us-div">
                            <h3>CONTACT US</h3>
                            <div className="socialIcons">
                                <span className="icon">
                                    <FaFacebookF style={{height:"22px", width:"22px",marginRight:"9px"}}/>
                                </span>
                                <span className="icon">
                                    <FaInstagram style={{height:"22px", width:"22px",marginRight:"9px" }} />
                                </span>
                                <span className="icon">
                                    <FaTwitter style={{height:"22px", width:"22px",marginRight:"9px" }} />
                                </span>
                                <span className="icon">
                                    <FaLinkedin style={{height:"22px", width:"22px",marginRight:"9px"}} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="copyright-div">
                    <p className="copyright-para">© Copyright 2024, All Rights Reserved</p>
                </div>             
            </ContentWrapper>
        </footer>
    );
};

export default Footer;