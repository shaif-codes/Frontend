import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import './headerStyle.css';

const Header = (props) => {

    
    const [isActive, setIsActive] = useState('bi-x');

    const handleClick = () => {
        isActive === "bi-x"? setIsActive("bi-list") : setIsActive("bi-x")
        const body = document.body
        if(body.className === ""){
            body.className = "mobile-nav-active"
        }
        else{
            body.className = ""
        }
    };

    

    return (
        <div>
            <i
                className={`bi mobile-nav-toggle d-xl-none ${isActive}`}
                onClick={handleClick}
            ></i>
            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        {/* Replace the image source with a dynamic import or a relative path */}
                        <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><Link to="/">{props.userDetails?.name}</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="/" className="github"><i className="bx bxl-github"></i></a>
                            <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                            {/* <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a> */}
                            <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            {/* <li><Link to="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
                            <li><Link to="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
                            <li><Link to="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
                            <li><Link to="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
                            <li><Link to="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></Link></li>
                            <li><Link to="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li> */}
                            
                                {props.links.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.to} className="nav-link scrollto">
                                            <i className={link.icon}></i>
                                            <span>{link.text}</span>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </nav>
                </div>
            </header>

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Inner Page</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Inner Page</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="inner-page">
                    <div className="container">
                        <p>Example inner page template</p>
                    </div>
                </section>
            </main>

            {/* <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>iPortfolio</span></strong>
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer> */}

            <a href="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    );
}

export default Header;
