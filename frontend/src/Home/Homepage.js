import React, { useState } from "react";
import './style.css';
import { Link } from "react-router-dom";
import mic from './mic.svg'
import dial from './dial.svg'
import video from './video.svg'
import speaker from './speaker.svg'
import settings from './settings.svg'
function Homepage()
{
    return(
        <div>
            <div className="navbar">
                <div className="logo">BisMarket</div>
                <Link to="http://localhost:3000/become-mentor" className="navlinks"><p>Become Mentor</p></Link>
                <Link to="http://localhost:3000/createacc" className="navlinks"><p>Create Account</p></Link>
                <button className="navlink btn sign-up">Sign Up</button>
            </div>
            <div className="main-section">
                <div className="left">
                    <div className="main-txt">
                        <p className="main-text">
                            <span class="text">Elevate Your </span>
                            <span class="spaan">Business</span>
                            <span class="text"> Journey Now</span>
                        </p>
                        <p class="subtext">
                            <span class="text2">Empower your business journey with expert guidance online. Unlock growth and thrive with</span>
                            <span class="text4"> personalized mentorship</span>
                            <span class="text3">.</span>
                        </p>
                    </div>
                    <div class="buttons">
                        <div class="search-bar">
                            <div class="holder">
                                <div class="get">
                                    <div class="inner-holder">
                                        <img class="search-icon" src="img/search-icon.svg" />
                                        <input class="main-section-text-2 input"  placeholder="Get Started"/>
                                    </div>
                                    <img class="line" src="img/line-1-2.svg" />
                                </div>
                                <div class="holder">
                                    <div class="main-section-text-3">Expertise</div>
                                    <select className="input">
                                        <option>Design</option>
                                        <option>AI & ML</option>
                                        <option>Marketing</option>
                                        <option>Sales</option>
                                        <option>Social Media Marketing</option>
                                        <option>IT</option>
                                    </select>
                                    {/* <img class="img" src="img/frame.svg" /> */}
                                </div>
                                <img class="line-2" src="img/line-1.svg" />
                                <div class="holder">
                                    <div class="hero-section-text-3">Country</div>
                                    <select className="input">
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>New Zealand</option>
                                        <option>Switzerland</option>
                                        <option>Australia</option>
                                    </select>
                                    {/* <img class="img" src="img/frame-4.svg" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                        <div class="div-3">
                            <div class="image">
                                <div class="tiles">
                                    <div class="inner-right">
                                        <div class="group">
                                            <div class="overlap-group"><div class="ellipse"></div>
                                        </div>
                                    </div>
                                    <div class="text5">Recording</div>
                                </div>
                            </div>
                        </div>
                        <div class="updialbar"></div>
                    </div>
                    <div class="dialbar">
                        <div class="inner-dial">
                            <div class="agent-cards"><img class="holder-emoticon" src={mic} /></div>
                            <div class="frame-wrapper"><img class="holder-emoticon" src={video} /></div>
                            <img class="dialbar-2" src={dial} />
                            <div class="agent-cards"><img class="holder-emoticon" src={speaker} /></div>
                            <div class="agent-cards"><img class="holder-emoticon" src={settings} /></div>
                        </div>
                    </div>
                </div>
            </div> 
               
        </div>
    );
}
export default Homepage;