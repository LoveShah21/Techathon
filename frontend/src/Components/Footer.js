import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
function Footer()
{
    return(
        <footer>
            <div className="footer">
                <div className="inner-footer">
                    <br></br>
                    <br></br>
                    <span className="header-footer">Get to know us</span> <br></br><br></br><br></br><br></br>
                    <span className="links-footer">About us</span> <br></br>
                    <span className="links-footer">Our Services</span> <br></br>
                    <span className="links-footer">Privacy Policy</span> <br></br>
                </div>
                <div className="inner-footer">
                    <br></br>
                    <br></br>
                    <span className="header-footer">Help</span> <br></br><br></br><br></br><br></br>
                    <span className="links-footer">FAQs</span> <br></br>
                    <span className="links-footer">Forums</span> <br></br>
                    <span className="links-footer"><Link className="reslinks" to="http://localhost:3000/therapist" >Therapy</Link></span> <br></br>
                </div>
                <div className="inner-footer">
                <br></br>
                    <br></br>
                    <span className="header-footer">Resources</span> <br></br><br></br><br></br><br></br>
                    <span className="links-footer"><Link className="reslinks" to="http://localhost:3000/guide">Guides</Link></span> <br></br>
                    <span className="links-footer"><Link to="http://localhost:3000/music" className="reslinks">Music</Link></span> <br></br>
                    <span className="links-footer"><Link className="reslinks">Podcasts</Link></span> <br></br>
                </div>
                <div className="inner-footer">
                    <br></br>
                    <br></br>
                    <span className="header-footer">Socials</span> <br></br><br></br><br></br><br></br>
                    <div className="circle-holder">
                        <div className="circle">
                            <img src="https://th.bing.com/th/id/R.10c630532a95cf4ac1e1c765cbd679da?rik=5fJL9ri2Lbpuug&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2011%2f12%2fround-linkedin-icon_155493.png&ehk=6EvFWemC3BbtapGV2LfNfpNWZ%2b3decBdMJpkygmRdg0%3d&risl=&pid=ImgRaw&r=0" />
                        </div>
                        <div className="circle">
                            <img src="https://th.bing.com/th/id/R.639b3dafb544d6f061fcddd2d6686ddb?rik=uTgiI8dR3qSZ7w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2finstagram-logo-eps-png-instagram-icon-white-on-black-circle-1600.png&ehk=ca0MkI%2fDPQNBkGsx%2fcf6uR%2fbAKLLR%2bH2a%2fTRKBnLcU4%3d&risl=&pid=ImgRaw&r=0" />
                        </div>
                        <div className="circle">
                            <img src="https://icon-library.com/images/twitter-logo-icon-png/twitter-logo-icon-png-3.jpg" />
                        </div>
                        <div className="circle">
                            <img src="https://logospng.org/download/spotify/logo-spotify-icon-4096.png" />
                        </div>
                        <div className="circle">
                            <img src="https://icon-library.com/images/facebook-icon-transparent-png/facebook-icon-transparent-png-2.jpg" />
                        </div>
                    </div>
                </div>
        </div>
    </footer>
    );
}
export default Footer;