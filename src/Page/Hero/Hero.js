import React, {useState} from "react";
import one from "../../img/one1.png";
import two from "../../img/two2.png";
import three from "../../img/three3.png";
import four from "../../img/four4.png";
import block1 from "../../img/hblock.png";
import block2 from "../../img/hblock1.png";
import "./Hero.scss";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myVideo from "../../img/video.webm";


const Hero = () => {

        useEffect(() => {
            AOS.init();
            AOS.init({
                duration: 1000,
                once: true,
            });
        }, []);


        return (
            <div id="hero">
                <div className="container">
                    <div className="hero">
                        <div
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className="hero--title">
                            <h4>eXPLORE tHE wORLD</h4>
                            <h1>Study abroad with our help</h1>
                            <p>
                                Study at the world's top universities and expand your horizons.
                                Get the highest quality education and achieve success abroad.
                            </p>
                        </div>
                        <div className="hero--image">
                            <div>
                                <img data-aos="zoom-in" src={one} alt="" className="one"/>
                                <img data-aos="zoom-in" src={two} alt="" className="two"/>
                            </div>
                            <div>
                                <img data-aos="zoom-in" src={three} alt="" className="three"/>
                                <img data-aos="zoom-in" src={four} alt="" className="four"/>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" className="hero--block">
                            <img src={block1} alt=""/>
                            <div className="hero--block__input">
                                <span>NAME</span>
                                <input placeholder="|Enter your name" type="text"/>
                            </div>
                            <img src={block2} alt=""/>
                            <div className="hero--block__input">
                                <span>NAME</span>
                                <input placeholder="|Enter your phone" type="text"/>
                            </div>
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
;

export default Hero;
