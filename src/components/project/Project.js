import React from 'react';

import "./style.css"
import {NavLink} from "react-router-dom";

function Project({title, img, i}) {
    return (
        <NavLink to={`/projectBig/${i}`}>
            <li className="project">
                    <img src={img} alt={title} className="project__img"/>

                    <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    );
}

export default Project;