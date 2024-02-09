import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "./Therapist.css";
import star from "./stars.svg";
import arrow from "./arrow.svg";
import Footer from "./Footer";
function Therapist()
{
    const tredirectToExternalSite2 = () => {
        window.location.href = 'http://localhost:3000/cathy_brown';
      };
    return(

        <div className="tholder">
            <Navbar />
            <div className="tspanholder">
                <img src={star} className="staro"/> 
                <span className="tspan">Why Peace Bliss?</span>
                <img src={star} className="star"/>
            </div>
            <div className="tmaincontent">
                <span>Peace Bliss is dedicated to providing comprehensive mental health support<br></br>through a network of highly qualified therapists and doctors. <br></br>
                      Our team comprises licensed therapists with expertise in various modalities such as <br></br>cognitive-behavioral therapy (CBT),<br></br>
                      dialectical behavior therapy (DBT), <br></br>psychodynamic therapy, and more.<br></br>
                      Additionally, we collaborate with experienced psychiatrists who <br></br>specialize in medication management for a wide range of mental health conditions.
                </span>
            </div>
            <div className="tspanholder">
                <img src={star} className="staro"/> 
                <span className="tspan">Meet your Therapists</span>
                <img src={star} className="star"/>
            </div>  
            <div className="ttherapist-holder">
                <div className="tcard">
                    <div className="tcardi">
                        <img src="https://s3-alpha-sig.figma.com/img/7fba/26ce/6b98aa74f39064fb4545b960abade7be?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CWgWCfTZLJJuTpZVoJfRzaD7sbQz3btroU-7TCHrX4rPXmTgA1IQIksZKXurl6Mj7sDKQDGgESiW0s75bYd-ABB9SE2Z20soJqt42Uuz~f3Rqasr6zeWOMl5uzHSBaSvd3KD1ncgcouLwDUzszGdzihnfKNO9NWUTvg3M3EGWs~8D589g2nm5EvEqEEL233wuQJynqIgrQ06UMSjlJpUYpvyxEyvEdIfKp~707jvZ8lfWDUV2PI8n-RmpzrAIgO1ahniDoMeZe7Q0WjeYJO2rIevPbsKcCcSMK9J4KaiZuV5Dymmgs2mK1kbrDvB8F7aIQwRr0C3llpI5O-UOTvrmg__" height="200px"/>
                    </div>
                    
                    <div className="tcontent">
                        <h1 onClick={tredirectToExternalSite2} className="tcontentm">Cathy brown</h1>
                        <h3 className="tcontentm">Mental Health Specialist</h3>
                        <span>Lorem ipsum dolor sit amet consectetur. Turpis congue lectus tellus sed leo quam vitae sit magna. Vel gravida lectus velit massa velit venenatis ornare morbi. Egestas sit morbi eu arcu aliquet mauris nibh augue. Bibendum sagittis elementum vel diam id leo amet sit.</span>
                    </div>
                    <img src={arrow} className="tarrows"  onClick={tredirectToExternalSite2} />
                </div>
                <div className="tcard">
                    <div className="tcardi">
                        <img src="https://s3-alpha-sig.figma.com/img/7fba/26ce/6b98aa74f39064fb4545b960abade7be?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CWgWCfTZLJJuTpZVoJfRzaD7sbQz3btroU-7TCHrX4rPXmTgA1IQIksZKXurl6Mj7sDKQDGgESiW0s75bYd-ABB9SE2Z20soJqt42Uuz~f3Rqasr6zeWOMl5uzHSBaSvd3KD1ncgcouLwDUzszGdzihnfKNO9NWUTvg3M3EGWs~8D589g2nm5EvEqEEL233wuQJynqIgrQ06UMSjlJpUYpvyxEyvEdIfKp~707jvZ8lfWDUV2PI8n-RmpzrAIgO1ahniDoMeZe7Q0WjeYJO2rIevPbsKcCcSMK9J4KaiZuV5Dymmgs2mK1kbrDvB8F7aIQwRr0C3llpI5O-UOTvrmg__" height="200px"/>
                    </div>
                    
                    <div className="tcontent">
                        <h1 onClick={tredirectToExternalSite2} className="tcontentm">Cathy brown</h1>
                        <h3 className="tcontentm">Mental Health Specialist</h3>
                        <span>Lorem ipsum dolor sit amet consectetur. Turpis congue lectus tellus sed leo quam vitae sit magna. Vel gravida lectus velit massa velit venenatis ornare morbi. Egestas sit morbi eu arcu aliquet mauris nibh augue. Bibendum sagittis elementum vel diam id leo amet sit.</span>
                    </div>
                    <img src={arrow} className="tarrows"  onClick={tredirectToExternalSite2} />
                </div>
                <div className="tcard">
                    <div className="tcardi">
                        <img src="https://s3-alpha-sig.figma.com/img/7fba/26ce/6b98aa74f39064fb4545b960abade7be?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CWgWCfTZLJJuTpZVoJfRzaD7sbQz3btroU-7TCHrX4rPXmTgA1IQIksZKXurl6Mj7sDKQDGgESiW0s75bYd-ABB9SE2Z20soJqt42Uuz~f3Rqasr6zeWOMl5uzHSBaSvd3KD1ncgcouLwDUzszGdzihnfKNO9NWUTvg3M3EGWs~8D589g2nm5EvEqEEL233wuQJynqIgrQ06UMSjlJpUYpvyxEyvEdIfKp~707jvZ8lfWDUV2PI8n-RmpzrAIgO1ahniDoMeZe7Q0WjeYJO2rIevPbsKcCcSMK9J4KaiZuV5Dymmgs2mK1kbrDvB8F7aIQwRr0C3llpI5O-UOTvrmg__" height="200px"/>
                    </div>
                    
                    <div className="tcontent">
                        <h1 onClick={tredirectToExternalSite2} className="tcontentm">Cathy brown</h1>
                        <h3 className="tcontentm">Mental Health Specialist</h3>
                        <span>Lorem ipsum dolor sit amet consectetur. Turpis congue lectus tellus sed leo quam vitae sit magna. Vel gravida lectus velit massa velit venenatis ornare morbi. Egestas sit morbi eu arcu aliquet mauris nibh augue. Bibendum sagittis elementum vel diam id leo amet sit.</span>
                    </div>
                    <img src={arrow} className="tarrows"  onClick={tredirectToExternalSite2} />
                </div>
                <div className="tcard">
                    <div className="tcardi">
                        <img src="https://s3-alpha-sig.figma.com/img/7fba/26ce/6b98aa74f39064fb4545b960abade7be?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CWgWCfTZLJJuTpZVoJfRzaD7sbQz3btroU-7TCHrX4rPXmTgA1IQIksZKXurl6Mj7sDKQDGgESiW0s75bYd-ABB9SE2Z20soJqt42Uuz~f3Rqasr6zeWOMl5uzHSBaSvd3KD1ncgcouLwDUzszGdzihnfKNO9NWUTvg3M3EGWs~8D589g2nm5EvEqEEL233wuQJynqIgrQ06UMSjlJpUYpvyxEyvEdIfKp~707jvZ8lfWDUV2PI8n-RmpzrAIgO1ahniDoMeZe7Q0WjeYJO2rIevPbsKcCcSMK9J4KaiZuV5Dymmgs2mK1kbrDvB8F7aIQwRr0C3llpI5O-UOTvrmg__" height="200px"/>
                    </div>
                    
                    <div className="tcontent">
                        <h1 onClick={tredirectToExternalSite2} className="tcontentm">Cathy brown</h1>
                        <h3 className="tcontentm">Mental Health Specialist</h3>
                        <span>Lorem ipsum dolor sit amet consectetur. Turpis congue lectus tellus sed leo quam vitae sit magna. Vel gravida lectus velit massa velit venenatis ornare morbi. Egestas sit morbi eu arcu aliquet mauris nibh augue. Bibendum sagittis elementum vel diam id leo amet sit.</span>
                    </div>
                    <img src={arrow} className="tarrows"  onClick={tredirectToExternalSite2} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Therapist;
