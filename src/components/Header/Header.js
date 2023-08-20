import React, {useEffect, useState} from 'react';
import logo1 from '../../img/motionLogo.svg'
import {Link, NavLink} from "react-router-dom";
import './index.scss'
import {BiSearch} from "react-icons/bi";
import {RiMenu3Fill} from "react-icons/ri";
import {GrFormClose} from "react-icons/gr"
import {FaTelegramPlane} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {BsTelephoneXFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"




const Header = () => {
    const [dashed1, setDashed1] = useState(0)
    const [isBurgerOpen, setIsBurgerOpen] = useState(false); // Состояние для бургер-меню
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
    const [activeBurgerMenuItem, setActiveBurgerMenuItem] = useState(null);

    // Обработчик изменения размера окна
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth > 768) {
            setIsBurgerOpen(false);
        }
    };

    // Добавляем обработчик изменения размера окна после монтирования компонента
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
   
    
    
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
                    
                    {windowWidth <= 768 ? ( // Если ширина окна <= 768, показываем бургер-меню
                    <div className="header--burger" onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                        {isBurgerOpen ? <GrFormClose style={{zIndex:"100"}}/> : <RiMenu3Fill style={{zIndex:"100"}}/>}
                    </div>
                ) : (
                    <div className="header--nav" >
                        <div className="header--nav__navs">
                            <NavLink to="/">Home</NavLink></div>
                        <div className="header--nav__about">
                            <NavLink to="/aboutUs">AboutUs</NavLink></div>
                        <div className="header--nav__study">
                            <NavLink to="/studyAbroad">Study Abroad</NavLink>
                        </div>
                        <div className="header--nav__contact">
                            <NavLink to="/contacts">Contacts</NavLink>
                        </div>
                    </div>
                )}
                <div style={{
                    display:isBurgerOpen ? "block":"none"
                }} className="header--blur"></div>
                   {
                    isBurgerOpen &&(
                        
                        <div className="header--nav1" style={{ display: isBurgerOpen ? 'block' : 'none' }}>
                        <div className={`header--nav1__navs1 ${activeBurgerMenuItem === "Home"? "active" : ""}`}
                        onClick={()=>{
                            setIsBurgerOpen(false)
                            setActiveBurgerMenuItem("Home")
                        }}>
                            <NavLink to="/">Home</NavLink></div>
                        <div className="header--nav1__about " onClick={()=> setIsBurgerOpen(false)}>
                            <NavLink to="/aboutUs">AboutUs</NavLink>
                            </div>
                        <div className="header--nav1__study"  onClick={()=> setIsBurgerOpen(false)}>
                            <NavLink to="/studyAbroad">Study Abroad</NavLink>
                        </div>
                        <div className="header--nav1__contact"  onClick={()=> setIsBurgerOpen(false)}>
                            <a  onClick={() => window.scroll(0 , 3100)} >Contacts</a>
                            
                            <NavLink to="/contacts">Contacts</NavLink>
                            </div>
                            <div className="header--nav1__language1">
                                <h3>EN</h3>
                                <h3>RU</h3>
                                <h3>KG</h3>
                            </div>
                        
                       <div className="header--nav1__icon">
                        <h3><FaTelegramPlane/></h3>
                        <h3><AiFillInstagram/></h3>
                        <h3><BsTelephoneXFill/></h3>
                        <h3><MdEmail/></h3>
                       </div>
                    </div>
                    )
                   }

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