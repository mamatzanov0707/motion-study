import React from 'react';
import Hero from "../../Page/Hero/Hero";
import This from "../../Page/This/This";
import Exams from "../Exams/Exams";
import Slider from "../Slider/Slider";
import Submit from "../submit/submit";

const HeroPage = () => {
    return (
        <div>
            <Hero/>
            <This/>
            <Exams/>
            <Slider/>
            <Submit/>
        </div>
    );
};

export default HeroPage;