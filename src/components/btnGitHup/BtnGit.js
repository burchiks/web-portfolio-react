import "./style.css"
import React from 'react';
import img from "../../img/projects/02-big.jpg";
import gitIco from "../../img/icons/gitHub-black.svg";

const BtnGit = (link) => {
    return (
        <a href={link} target={"_blank"} rel="noreferrer" className="btn-outline">
            <img src={gitIco} alt="GitHub Logo"/>
            GitHub Repo
        </a>
    );
};

export default BtnGit;