import React, {useState} from 'react';
import logo1 from '../../img/motionLogo.svg'
import {NavLink} from "react-router-dom";
import './index.scss'
import {BiSearch} from "react-icons/bi";



const Header = () => {
    const [dashed1, setDashed1] = useState(0)

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--title">
                        <img src={logo1} alt=""/>
                    </div>
                    <div style={{display: dashed1 === 1 ? 'block' : 'none'}} className="red"></div>
                    <div style={{display: dashed1 === 2 ? 'block' : 'none'}} className="red1"></div>
                    <div style={{display: dashed1 === 3 ? 'block' : 'none'}} className="red2"></div>
                    <div style={{display: dashed1 === 4 ? 'block' : 'none'}} className="red3"></div>
                    <div className="header--nav">
                        <div className="header--nav__navs">
                            <NavLink to="/">Home</NavLink></div>
                        <div className="header--nav__about">
                            <NavLink to="/aboutUs">AboutUs</NavLink></div>
                        <div className="header--nav__study">
                            <NavLink to="/studyAbroad">Study Abroad</NavLink>
                        </div>
                        <div className="header--nav__contact">
                            <NavLink to="/contacts">Contacts</NavLink></div>
                    </div>

                    <div className="header--input">
                        <BiSearch className="header--input__icon"/>
                        <NavLink to={"/country"}>
                            <input type="text" placeholder="Поиск..."/>
                        </NavLink>
                    </div>
                    <div className="header--language">
                        <select>
                            <option>EN</option>
                            <option>RU</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;