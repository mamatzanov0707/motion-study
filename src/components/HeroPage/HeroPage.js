import React from 'react';
import Hero from "../../Page/Hero/Hero";
import This from "../../Page/This/This";
import Exams from "../Exams/Exams";
import Slider from "../Slider/Slider";

const HeroPage = () => {
    return (
        <div>
            <Hero/>
            <This/>
            <Exams/>
            <Slider/>
        </div>
    );
};

export default HeroPage;