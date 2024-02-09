import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Peacebliss from "./img/PeaceBliss.jpg";
// import { useHistory } from 'react-router-dom';
function Navbar()
{
    // const history=useHistory();
    // const handleButtonClick = () =>
    // {
    //     history.push('./contact');
    // }
    const redirectToExternalSite = () => {
        window.location.href = 'http://localhost:3000/home';
      };
    return(
        <nav className="nav-bar">
            <div className="innernav">
                
                <Link to="http://localhost:3000/contact" className="btn-get"><button>Contact</button></Link>
                <Link to="http://localhost:3000/music" className="links"><p>Music</p></Link>
                <Link to="http://localhost:3000/therapist" className="links"><p>Therapists</p></Link>
                {/* <Link to="/" className="links"><p>Forums</p></Link> */}
                <Link to="http://localhost:3000/guide" className="links"><p>Guides</p></Link>
                <div className="logo-blank" onClick={redirectToExternalSite}>Peace Bliss</div>
            </div>
        </nav>
    );
}
export default Navbar;