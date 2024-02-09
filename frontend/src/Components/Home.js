import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import star from "./stars.svg";
import zoom1 from "./zoom1.gif";
import zoom2 from "./zoom2.jpg";
import music from "./Music.svg";
import yoga from "./Yoga2.svg";
import meditate from "./Meditate.svg";
import Linkedin from "./Linkedin.svg";
import Navbar from "./navbar";
import Footer from "./Footer";
function Home()
{
    return(
        <div className="holder-home">
            <div className="main">
                
                <Navbar></Navbar>
                <header>
                    <div className="maintext-con">
                        <span className="peace">Internal Peace</span>
                    </div>
                    <div className="mainsubtext">
                        <div className="mainsubtext1">
                            <img src={star} className="star"/>
                            <img src={star} className="star"/>
                            <img src={star} className="star"/>
                            <span className="subtext">Dive into the world of peace and <br></br>improve your mental health along <br></br>with the best available resources. </span>
                        </div>
                        <div className="mainsubtext2">
                            <button>Get Started</button>
                        </div>
                    </div>
                </header>
                
                <div className="cardss">
                    <div className="card1">
                        <Link to="/" className="card1link">
                            <div className="cardinner">
                                <img src={music} className="music"/>
                                <h1>Music</h1>
                            </div>
                            <div className="cardinner2">
                            <span>Listen to the most peaceful music and get into the zone of realisation</span>
                            </div>
                        </Link>                   
                    </div>
                    <div className="card2"> 
                        <Link to="/" className="card1link">
                            <div className="cardinner">
                                <img src={meditate} className="meditate"/>
                                <h1>Meditate</h1>
                                </div>
                                <div className="cardinner2">
                                <span>Get yourself into the world full of peace and harmony with the best meditation practices</span>
                                </div> 
                        </Link>
                    </div>
                    <div className="card3">
                        <Link to="/" className="card1link">
                            <div className="cardinner">
                                    <img src={yoga} className="yoga"/>
                                    <h1>Yoga</h1>
                            </div>
                            <div className="cardinner2">
                            <span>Be physically fit along with your mental care through wide variety of useful yoga practices</span>
                            </div> 
                        </Link>
                    </div>
                </div> 
                <div className="subzoom">
                    <div className="insubzoom">
                        <img src={zoom1} />
                    </div>
                        
                    <div className="insubzoom">
                        <img src={zoom1} />                
                    </div>
                </div>
                
                <div className="ourteams">
                    <img src={star} className="star2"/>
                    <span className="small-header">Our Team</span>
                    <img src={star} className="star2"/>
                </div>
                <div className="professional">
                    <div className="prof-img1">
                        <img className="profimage1" src="https://s3-alpha-sig.figma.com/img/0409/a0f8/b381f104674cac2d612569bfa39aff0d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3wj1l5ZRmR0RzDE9eHOC6t1LYmID3bFsZJwajYAM3M2dLn0x7Ji8zqmmCxdcxTzRx7fnM4NIKi8LP2ZcWtyNLKCzJa5EaUBVxKj3pbmwFezBjOKO~kjQxv7GRFtiMnINyTOsC7OUYkr8Kc7xScQb-Lsumhj0O0k~gw7rGu~8slu8pH05~ys-2CPcy4upLa94b0~VUeYgFJLqHapXRGyNKtnImKfGRyLEntUOd50JEQNA63aLNZ4ULxFMICkHhURt8UXt1Y2WaxF-sUEYJYNhjOoF0iKJPuBF-rJadkhbP30iJW7JBZiT6uil2bkqm9354FkGtul4dzmf6-nw8KTUA__" />
                    </div>
                    <div className="professional2">
                        <span className="professional-text">Get the <br></br>
                            Best professionals <br></br>
                            For Your needs</span>
                            <button className="explore">Explore</button>
                    </div>
                    <div className="prof-img2">
                        <img className="profimage2" src="https://s3-alpha-sig.figma.com/img/d6f4/37f1/a66407054b29b22129cefee017c2df14?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QYqI6Mr3iZ5KzLUaIob2NSm82p6CAM9yu2U81jHaxkn--yH8CGGsD1U0lqCWNX1UqNLJQYk9S29KcHkeRePP-kdkZjga-itMTNe5~EFIiQkavGeOsRdVivu-e8UdpduHQcwEUkEQUtSoYnM~v6dtr65vNs8kZLK9TJfo5-VfIr1qk~NWWQNrhRgBkRGL5OvdlJ1hohARKpKAr9IxGkbwQJwfZqR3BD9SZGvDR47wKHwVblQ5cZMHYFGxDNOqlyx8iMqB~ZC2N18314PFaBvpzzcIzupk8eDiHXnNm-g1Q49aEQuyS52pOLOiIsbTnL8130wRGYOJHmYnRJB4hZZ2nA__" />
                    </div>

                </div>
                {/* /*<div className="professional">
                        <span className="professional-text">Get the <br></br>
                            Best professionals <br></br>
                            For Your needs</span>
                            <button className="explore">Explore</button>
                </div>*/}
                {/* <marquee className="marq">
                    <div>
                        <div className="imageno1">
                            <img src="https://s3-alpha-sig.figma.com/img/d5b2/6e3d/178f1e51359592e84d8baf36ea212d74?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMa6z1eZsY6BeHTU2WaMt8F~FjEekEP7n3fiiH3SmtqbhB4p7vEx69MUpcOgO9uo4Q7hAMLRCx7~Xw~bC6OS73KttwZKuHEqZ6~BhO88ohj62EcDVqEsbg3A-VDYwirXdJ5X3ozxJzfmysxxnBdGInjwjkCg6Obpi24dmd56vrnpj8xZ40EJ6J3EreYv-5-zcLFaLj1EaXSU~IirnVGBt-o8MugSdOvTiSBKoEUk421F9uMQa9ftmhvdbFXgc0jSh7uGBViYOWyxBFJBWT9vZ4IIOasWmslT1hN~lrv1ixepb7CAn9nIsnzKJCdQ29NTVDJGtmtTD5DUx2cGJrGlhg__" />
                            <button>Open</button>
                        </div>
                    </div>
                </marquee> */}
                <div className="slide">
                    <div className="slides">
                        <img src="https://s3-alpha-sig.figma.com/img/d5b2/6e3d/178f1e51359592e84d8baf36ea212d74?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMa6z1eZsY6BeHTU2WaMt8F~FjEekEP7n3fiiH3SmtqbhB4p7vEx69MUpcOgO9uo4Q7hAMLRCx7~Xw~bC6OS73KttwZKuHEqZ6~BhO88ohj62EcDVqEsbg3A-VDYwirXdJ5X3ozxJzfmysxxnBdGInjwjkCg6Obpi24dmd56vrnpj8xZ40EJ6J3EreYv-5-zcLFaLj1EaXSU~IirnVGBt-o8MugSdOvTiSBKoEUk421F9uMQa9ftmhvdbFXgc0jSh7uGBViYOWyxBFJBWT9vZ4IIOasWmslT1hN~lrv1ixepb7CAn9nIsnzKJCdQ29NTVDJGtmtTD5DUx2cGJrGlhg__" />
                        <img src="https://s3-alpha-sig.figma.com/img/6061/45f3/3c447bf947b371b496d6d1c35d49ddf0?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fw-GAsL~8vhWdlT9LgmU~1Xy1WhZzO7~zLoCpjJashZneczRAuPWZ4Yq93hqzU22fRy-ql3cb4oUEhE2MaCIdeI82eIWgbtg3InL49R2dBxfkckzNeDSnHF0iat6-DojTtLoHZsWZT8p5DGOIh~K-W7ii0eRKlY9FeDRvp5BHjXgq0Fpk6ObSYoZCP9TrN6Dg3Libzc2FEa1RttJhDx32GYXaNAMz9C-DvZCsYoNOznuYN3K-tAYhKcnWdu9Ppyz-3zL4w6ug-aQ7fHwwJCbgZVpq3YX4CE0UlAm6Ubc-fv-~-Maam27~syq~m8wnenKLAYscF2T44pCi639w0Pb7g__" />
                        <img src="https://s3-alpha-sig.figma.com/img/03b0/428f/22989cf3d28a9512743f9cbe2715e884?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j3vJec5gdH8HagANwdB~wKcNdt72ev1mxgn1gc~NxwuViFtLkM0RIEa2ogabjB-K3YpEfP1FC-bOoIweXjqD9utF5FESmlhkW~3Sc4wQX84cI2nOdZOMYmaGWb9NSd8VF58fPhBprY0n0Yw2cyQNm39yA7v8r99QxRwt6qjfE1s8L4hzqnlHUbL-qU3X-5AqnCh49xBu~r-OOpr7nDfl6XtvQYlOV9vo4tTsRlUPCsGIrzftTjlHwq~wRQUSdSdfwcyYyZee9UxmEXH-o3ajBlEtpKC5LcMYIpqZlyCduJXqm8jKtgbzWrPnWy6~77AO5yZQf996XxT9GIA6tAretQ__" />
                        <img src="https://s3-alpha-sig.figma.com/img/f1c1/9b61/60b43f2423264a003c7ecb44ee0f8455?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kwfrG-ZjPw9KLvcBANikJr12wDGSgvh-DGGrDTC2XGEqvFAIiq4Y2epvVKzrUsnXS650U2E2bsEl1I0ZLX-V3Iq6SBmSM2IDO0biY5uPM4TnM9KlW-lKWWJPaD7AEERrLXliLfQGaYNm2q-2HOklZfxZu5FjBXLPgJK~C0lU6PgwUg6K~Dan7FlQVNEGRI10WehgHdkHnL2kbSjBqATC5l0UhSLdSFss87dyevQmqR3UaI-pCrjwYhbgmk44e52DT7nhcrMn97QETshK4GKmSkHeNEqPmY69GBeakgcko3~-J0-4feMmC6VDkd9MiU9oJHHXXAwa5XPC-A6Ql6dK8Q__" />
                    </div>
                    <div className="slides">
                        <img src="https://s3-alpha-sig.figma.com/img/d5b2/6e3d/178f1e51359592e84d8baf36ea212d74?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMa6z1eZsY6BeHTU2WaMt8F~FjEekEP7n3fiiH3SmtqbhB4p7vEx69MUpcOgO9uo4Q7hAMLRCx7~Xw~bC6OS73KttwZKuHEqZ6~BhO88ohj62EcDVqEsbg3A-VDYwirXdJ5X3ozxJzfmysxxnBdGInjwjkCg6Obpi24dmd56vrnpj8xZ40EJ6J3EreYv-5-zcLFaLj1EaXSU~IirnVGBt-o8MugSdOvTiSBKoEUk421F9uMQa9ftmhvdbFXgc0jSh7uGBViYOWyxBFJBWT9vZ4IIOasWmslT1hN~lrv1ixepb7CAn9nIsnzKJCdQ29NTVDJGtmtTD5DUx2cGJrGlhg__" />
                        <img src="https://s3-alpha-sig.figma.com/img/6061/45f3/3c447bf947b371b496d6d1c35d49ddf0?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fw-GAsL~8vhWdlT9LgmU~1Xy1WhZzO7~zLoCpjJashZneczRAuPWZ4Yq93hqzU22fRy-ql3cb4oUEhE2MaCIdeI82eIWgbtg3InL49R2dBxfkckzNeDSnHF0iat6-DojTtLoHZsWZT8p5DGOIh~K-W7ii0eRKlY9FeDRvp5BHjXgq0Fpk6ObSYoZCP9TrN6Dg3Libzc2FEa1RttJhDx32GYXaNAMz9C-DvZCsYoNOznuYN3K-tAYhKcnWdu9Ppyz-3zL4w6ug-aQ7fHwwJCbgZVpq3YX4CE0UlAm6Ubc-fv-~-Maam27~syq~m8wnenKLAYscF2T44pCi639w0Pb7g__" />
                        <img src="https://s3-alpha-sig.figma.com/img/03b0/428f/22989cf3d28a9512743f9cbe2715e884?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j3vJec5gdH8HagANwdB~wKcNdt72ev1mxgn1gc~NxwuViFtLkM0RIEa2ogabjB-K3YpEfP1FC-bOoIweXjqD9utF5FESmlhkW~3Sc4wQX84cI2nOdZOMYmaGWb9NSd8VF58fPhBprY0n0Yw2cyQNm39yA7v8r99QxRwt6qjfE1s8L4hzqnlHUbL-qU3X-5AqnCh49xBu~r-OOpr7nDfl6XtvQYlOV9vo4tTsRlUPCsGIrzftTjlHwq~wRQUSdSdfwcyYyZee9UxmEXH-o3ajBlEtpKC5LcMYIpqZlyCduJXqm8jKtgbzWrPnWy6~77AO5yZQf996XxT9GIA6tAretQ__" />
                        <img src="https://s3-alpha-sig.figma.com/img/f1c1/9b61/60b43f2423264a003c7ecb44ee0f8455?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kwfrG-ZjPw9KLvcBANikJr12wDGSgvh-DGGrDTC2XGEqvFAIiq4Y2epvVKzrUsnXS650U2E2bsEl1I0ZLX-V3Iq6SBmSM2IDO0biY5uPM4TnM9KlW-lKWWJPaD7AEERrLXliLfQGaYNm2q-2HOklZfxZu5FjBXLPgJK~C0lU6PgwUg6K~Dan7FlQVNEGRI10WehgHdkHnL2kbSjBqATC5l0UhSLdSFss87dyevQmqR3UaI-pCrjwYhbgmk44e52DT7nhcrMn97QETshK4GKmSkHeNEqPmY69GBeakgcko3~-J0-4feMmC6VDkd9MiU9oJHHXXAwa5XPC-A6Ql6dK8Q__" />
                    </div>
                </div>
                <Footer />
                {/* <footer>
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
                            <span className="links-footer">Therapy</span> <br></br>
                        </div>
                        <div className="inner-footer">
                        <br></br>
                            <br></br>
                            <span className="header-footer">Resources</span> <br></br><br></br><br></br><br></br>
                            <span className="links-footer">Guides</span> <br></br>
                            <span className="links-footer">Music</span> <br></br>
                            <span className="links-footer">Podcasts</span> <br></br>
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
                </footer> */}
                
            </div>
        </div>
    );
}
export default Home;