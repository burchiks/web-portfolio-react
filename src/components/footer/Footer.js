import React from 'react';
import linkedin from "../../img/icons/linkedIn.svg";
import gitHub from "../../img/icons/gitHub.svg";
import "./style.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className=" social__item"><a href="#!"><img src={linkedin} alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 frontend-dev </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;