import React from "react";
import { Link } from "react-router-dom";
import "./music.css";
import Navbar from "./navbar";
import Footer from "./Footer";
import Star from "./stars.svg";
import feel from "./img/feel_your_feelings.jpg";
import depression from "./img/DepressiontheRelief.png";
import what from "./img/What_the_Health.png";
import playlist5 from "./img/playlist2.png";
import playlist6 from "./img/playlist6.png";
import playlist7 from "./img/playlist7.png";
import playlist8 from "./img/playlist8.png";
import playlist9 from "./img/playlist9.png";
function Music()
{
    const redirectToExternalSite = () => {
        window.location.href = 'https://open.spotify.com/episode/025afeHNArq7pRdXOhU3ZF?si=667FzwxwQ3CCGWoTnJjhWA';
      };
      const redirectToExternalSite2 = () => {
        window.location.href = 'https://open.spotify.com/track/5FPBe3dFcUZFsFSPeoUyBW?si=007fc0b8677f4400';
      };
      const redirectToExternalSite3 = () => {
        window.location.href = 'https://open.spotify.com/show/3v2UftCPOdbAmDxYvnwfGB?si=9089ec96de2f4e20';
      };
      const redirectToExternalSite4 = () => {
        window.location.href = 'https://open.spotify.com/playlist/4U8LbJW7egF3rNoTB8oKoO';
      };
      const redirectToExternalSite5 = () => {
        window.location.href = 'https://open.spotify.com/playlist/5rEXZUOFGKmEuhBVUB6x8W';
      };
      const redirectToExternalSite6 = () => {
        window.location.href = 'https://open.spotify.com/playlist/0uEbKIl0YiBCCHmTcFQ2t4';
      };
      const redirectToExternalSite7 = () => {
        window.location.href = 'https://open.spotify.com/playlist/5rEXZUOFGKmEuhBVUB6x8W';
      };
      const redirectToExternalSite8 = () => {
        window.location.href = 'https://open.spotify.com/playlist/2pf4W9bfzSnbxqjaXEQUQy';
      };
    return(
        
    <div>
        <Navbar />
        <div className="ourteams">
            <img src={Star} className="star2"/>
            <span className="small-header">Who are we?</span>
            <img src={Star} className="star2"/>
        </div>
        <div className="music-holder">
            <div className="mcontainer">
                <img src={playlist9} />
                <br></br><span>Mental Health 1</span><br></br>
                <button onClick={redirectToExternalSite8}>Listen</button><br></br>
            </div>
            <div className="mcontainer">
                <img src={feel} />
                <br></br><span>Feel your feelings<br></br> with Ethan Jewell</span><br></br>
                <button onClick={redirectToExternalSite}>Listen</button><br></br>
            </div>
            <div className="mcontainer">
                <img src={depression} />
                <br></br><span>&emsp;&emsp;Depression the Relief &emsp;&emsp;Sapien Medicine</span><br></br>
                <button  onClick={redirectToExternalSite2}>Listen</button><br></br>
            </div>
            <div className="mcontainer">
                <img src={what} />
                <br></br><span>What the Health! <br></br>Podcast Saloni Anand <br></br>(Taya, Co-Founder)</span><br></br>
                <button onClick={redirectToExternalSite3}>Listen</button><br></br>
            </div>            
        </div>
        <div className="music-holder">
            <div className="mcontainer">
                <img src={playlist5} />
                <br></br><span>Mental Health Playlist</span><br></br>
                <button onClick={redirectToExternalSite4}>Listen</button><br></br>
            </div>
            <div className="mcontainer">
                <img src={playlist6} />
                <br></br><span>Positive Mental Health</span><br></br>
                <button onClick={redirectToExternalSite5}>Listen</button><br></br>
            </div>
            <div className="mcontainer">
                <img src={playlist7} />
                <br></br><span> &emsp;&emsp;MENTAL HEALTH <br></br>&emsp;&emsp;AWARENESS</span><br></br>
                <button  onClick={redirectToExternalSite6}>Listen</button><br></br>
            </div>
            <div className="mcontainer">
                <img src={playlist8} />
                <br></br><span>mental health cover</span><br></br>
                <button onClick={redirectToExternalSite7}>Listen</button><br></br>
            </div>            
        </div>
        <Footer />
    </div>
    );
}
export default Music;
