import React from 'react';
import logo1 from '../../img/motionLogo.svg'
import {Link} from "react-router-dom";
import './index.scss'
import {BiSearch} from "react-icons/bi";



const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--title">
                        <img src={logo1} alt=""/>
                    </div>

                    <div className="header--nav">
                        <Link to="/">Home</Link>
                        <Link to="/aboutUs">AboutUs</Link>
                        <Link to="/studyAbroad">Study Abroad</Link>
                        <Link to="/contacts">Contacts</Link>
                    </div>


                    <div className="header--input">
                        <BiSearch className="header--input__icon"/>
                        <input type="text" placeholder="Поиск..."/>
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