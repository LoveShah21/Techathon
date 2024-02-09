import React from "react";
import { Link } from "react-router-dom";
import "./guide.css";
import Navbar from "./navbar";
import Footer from "./Footer";
import Star from "./stars.svg";
import guidek from "./img/guide3.png";
import book2 from "./img/book3.png";
function Guide()
{
    const gredirectToExternalSite = () => {
        window.location.href = 'https://pdf.ac/2cxxF2';
      };
      const gredirectToExternalSite2 = () => {
        window.location.href = 'https://pdf.ac/C3fQe';
      };
      const gredirectToExternalSite3 = () => {
        window.location.href = 'https://pdf.ac/3zBhlT';
      };
    return(
        <div className="gholder">
            <Navbar />
            <div>
                <br></br>
                <div className="ourteams">
                    <img src={Star} className="star2"/>
                    <span className="small-header">Into the art of Mindfulness</span>
                    <img src={Star} className="star2"/>
                </div>
                <br></br>
                <br></br>
                <div className="gcontainer">
                    <div className="gcard1">
                        <div className="gcard1img">
                            <img onClick={gredirectToExternalSite} src="https://s3-alpha-sig.figma.com/img/702e/9112/d5df27bf8a8043b83aaff772a3f6d85e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnuYjSvPCNxBuJgyxryfPodKbpdfX4jntqim34Z5a39QS7bp361JZrv~UVaesD67fka-q16w1dtYnZblirnEg0WopcpFakbwlgP8fXH-GoVPUKdYrPMI1iP0wbk1Xj0xzJopsFS2qdoLXfbfH6p~329Km-7EG9KgosvHmluK5QWhZigOCQkg9iZ50GF47OehNn5GZDiCu2OxQQ0ynDQTuWWthyEpS0emPJmPRx9X453SWJndcwjEPdiXRh9iHgJoyYsB~EM37NxReiGHbnpVqtFkdKmAxzvAlrEv-8cSOEsQnSRx~46-LTX26Ry1p3ZBTLaz1XrOi1frELHcF06M1w__" />
                        </div>
                        <div className="gcard1content">
                            
                            <h1 onClick={gredirectToExternalSite}>Yoga: The Spirit and Practice of Moving Through 
                                <br></br>Stillness by Erich Schiffmann</h1>
                            <p>"Yoga: The Spirit and Practice of Moving Through Stillness" by Erich Schiffmann is a guide that emphasizes mindfulness, movement, breath, and meditation in yoga. Schiffmann offers practical techniques for cultivating inner stillness and self-awareness, making it suitable for both beginners and experienced practitioners seeking holistic well-being through yoga.</p>
                        </div>
                    </div>
                    <div className="gcard1">
                        <div className="gcard1img">
                            <img src={book2} onClick={gredirectToExternalSite3}/>
                        </div>
                        <div className="gcard1content">
                            <h1 onClick={gredirectToExternalSite3}>Building Positive Mental Health in Nine Simple Steps</h1>
                            <p>Discover a transformative journey with 'Building Positive Mental Health in Nine Simple Steps,' a guide that empowers individuals to cultivate resilience, emotional well-being, and lasting happiness. nlock the secrets to a healthier mind, one step at a time.</p>
                        </div>
                    </div>
                    <div className="gcard1">
                        <div className="gcard1img">
                            {/* <img src="https://s3-alpha-sig.figma.com/img/702e/9112/d5df27bf8a8043b83aaff772a3f6d85e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnuYjSvPCNxBuJgyxryfPodKbpdfX4jntqim34Z5a39QS7bp361JZrv~UVaesD67fka-q16w1dtYnZblirnEg0WopcpFakbwlgP8fXH-GoVPUKdYrPMI1iP0wbk1Xj0xzJopsFS2qdoLXfbfH6p~329Km-7EG9KgosvHmluK5QWhZigOCQkg9iZ50GF47OehNn5GZDiCu2OxQQ0ynDQTuWWthyEpS0emPJmPRx9X453SWJndcwjEPdiXRh9iHgJoyYsB~EM37NxReiGHbnpVqtFkdKmAxzvAlrEv-8cSOEsQnSRx~46-LTX26Ry1p3ZBTLaz1XrOi1frELHcF06M1w__" /> */}
                            <img src={guidek} onClick={gredirectToExternalSite2}/>
                        </div>
                        <div className="gcard1content">
                            
                            <h1 onClick={gredirectToExternalSite2}>Mental Health Improvement:Evidence and Practice </h1>
                            <p>Guide 5: Selecting scales to assess mental wellbeing in adults is based upon a review commissioned and funded by Health Scotland. This work was developed by Dr Jane Speight and Dr Carolyn McMillan (AHP Research Ltd), with Dr Mark Barrington (St Bartholomew's Hospital, London) and Professor Christina Victor (University of Reading).</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Guide;