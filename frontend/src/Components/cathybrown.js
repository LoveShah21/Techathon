import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./cathybrown.css";
function cathybrown()
{
    return(
        <div className="cathyholder">
            <Navbar/>
            <div className="therapist-profile">
                <div className="c1">
                    <img src="https://s3-alpha-sig.figma.com/img/7fba/26ce/6b98aa74f39064fb4545b960abade7be?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CWgWCfTZLJJuTpZVoJfRzaD7sbQz3btroU-7TCHrX4rPXmTgA1IQIksZKXurl6Mj7sDKQDGgESiW0s75bYd-ABB9SE2Z20soJqt42Uuz~f3Rqasr6zeWOMl5uzHSBaSvd3KD1ncgcouLwDUzszGdzihnfKNO9NWUTvg3M3EGWs~8D589g2nm5EvEqEEL233wuQJynqIgrQ06UMSjlJpUYpvyxEyvEdIfKp~707jvZ8lfWDUV2PI8n-RmpzrAIgO1ahniDoMeZe7Q0WjeYJO2rIevPbsKcCcSMK9J4KaiZuV5Dymmgs2mK1kbrDvB8F7aIQwRr0C3llpI5O-UOTvrmg__" />
                </div>
                <div className="c2">
                    <span>
                        <h1>Cathy brown</h1><br></br><br></br><br></br>
                        <h2>Specialty:- Mental Health specialist</h2><br></br><br></br>
                        <p>Lorem ipsum dolor sit amet consectetur. Vestibulum lacus a sem posuere posuere duis porttitor. Id turpis ipsum aliquam bibendum aliquam aliquam leo. Risus nibh in cursus penatibus urna. Sem risus ante mauris feugiat felis magna vehicula. Volutpat diam ornare leo consequat. Sit a tincidunt nam ut tortor laoreet ac. Eget quisque a velit accumsan eu platea.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet consectetur. Vestibulum lacus a sem posuere posuere duis porttitor. Id turpis </p>
                    </span>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <div className="c-button">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSefBsP8z6EaPsqCS5IYB4hwkfq42yEz4TVTPo0cSGJhZ6bv8w/viewform?usp=sf_link">
                <button>Book an Video appointment</button>
                </Link>
            </div>
            <Footer/>
        </div>
    );
}
export default cathybrown;