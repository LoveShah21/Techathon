import React from "react";
import "./Login2.css";
import { Link } from "react-router-dom";
import loginimg from "./Loginimg.jpg";
import User from "./User.png";
import star from "./stars.svg";
import pass from "./Password.png";
function Login()
{
    return(
        // <div className="l">
        //     <div className="lholder">
        //         <div className="linner">
        //             <div className="lform">
        //                 <h1>Login</h1>
        //                 <p>Don't have an account yet? <span><Link>Sign-Up</Link></span></p><br></br><br></br>
        //                 <div><h3>Email Address</h3></div>
        //                 <input type="textbox" className="ltextbox"/>
        //                 <h3>Password </h3>
        //                 <input type="textbox" className="ltextbox"/>
        //                 <div><input type="checkbox" className="lcheckbox"/> <span>Remember me</span> <Link className="forgot">Forgot Password</Link></div>
        //                 <br></br>
        //                 <button className="lLogin">Login</button>
        //                 <button className="lRegister">Register</button>
        //             </div>
                    
        //         </div>
        //         <div className="linner2">
        //             <img src="https://img.freepik.com/free-vector/hand-drawing-illustration-freedom-concept_53876-28496.jpg?w=740&t=st=1706796541~exp=1706797141~hmac=5b65fc51c46a960318d6b0343b04d5e6399d51d76578f08eae8ae42163c65162" />
        //             {/* <img src="https://img.freepik.com/free-photo/portrait-person-practicing-yoga-outdoors-nature_23-2151046729.jpg?t=st=1706799933~exp=1706803533~hmac=31e6bae0869be8191a1b81f6c30693722b576eb83f378db7d9e17cc94e8f4a23&w=1060" /> */}
        //         </div>
        //     </div>
        // </div>
        <div className="login-holder">
            <div className="limage">
                <img src={loginimg} />
            </div>
            <div className="lform">
                <div className="text-contatiner" >
                    <img src={star} className="star"/>
                    <span>&emsp;Log In &emsp;</span>
                    <img src={star} className="star"/>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="text-box">
                    <div>
                        <img src={User} />
                    </div>
                    <div className="usename-hodler">
                        <input type="textbox" className="username"  placeholder="Enter Username"/>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="text-box">
                    <div>
                        <img src={pass} />
                    </div>
                    <div className="usename-hodler">
                        <input type="password" className="username" placeholder="Enter Password"/>
                    </div>
                </div>
                <br></br>
                <br></br>
                    <button className="text-box sign-in">Sign In</button>
                    <br></br>
                    <Link className="link-forget font-class" >Forget Password?</Link>
                    <br></br><br></br><br></br><br></br>
                    <h2 className="font-class">Create New account {/*} >*/}</h2>
            </div>
        </div>
    );
}
export default Login;