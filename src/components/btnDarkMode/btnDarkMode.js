import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css"
import {useState,useEffect} from "react";

const BtnDarkMode = () =>{
    const[darkMode,setDarkMode]=useState('light');
    useEffect(() => {

    }, []);
    const toggleDarkMode = ()=>{
        setDarkMode((currentVal)=>{
            return currentVal === 'light'? 'dark':'light'
        })

    }
    return (
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button>

    );

}


export default BtnDarkMode;