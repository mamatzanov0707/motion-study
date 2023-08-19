import React from 'react';
import This from "../../Page/This/This";
import Exams from "../Exams/Exams";
import Slider from "../Slider/Slider";
import Message from "../submit/submit";





const HeroPage = () => {
    return (
        <div>

            <This/>
            <Exams/>
            <Slider/>
            <Message/>
        </div>
    );
};

export default HeroPage;