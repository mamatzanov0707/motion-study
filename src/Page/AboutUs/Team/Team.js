import React from 'react';
import './Team.scss'
import logo from '../../../img/Rect12.svg'
import rect from '../../../img/Rect-11.svg'
import car from '../../../img/Rect13.svg'
import too from '../../../img/Rect14.svg'
import tool from '../../../img/Rect15.svg'
import study from '../../../img/Rect16.svg'
const Team = () => {
    return (
        <div id='team'>
            <div className="container">
                <div className="team">
                    <h3>Our Team</h3>
                    <div className='team--title'>
                        <div className='team--title__block'>
                            <img src={rect} alt=""/>
                            <h3>Miss.Anushin oont </h3>
                            <span>CEO & co-Founder</span>
                        </div>
                        <div className='team--title__block'>
                            <img src={logo} alt=""/>
                            <h3>mr.Vishmas s.   </h3>
                            <span>CEO & co-Founder</span>
                        </div>
                        <div className='team--title__block'>
                            <img src={car} alt=""/>
                            <h3>Miss.Tanisha kaduu </h3>
                            <span>VP Of Technology</span>
                        </div>
                        <div className='team--title__block'>
                            <img src={too} alt=""/>
                            <h3>Mr.KL Rahul  </h3>
                            <span>Head of design</span>
                        </div>
                        <div className='team--title__block'>
                            <img src={tool} alt=""/>
                            <h3>Miss.Anushin oont </h3>
                            <span>vP Of Finance</span>
                        </div>
                        <div className='team--title__block'>
                            <img src={study} alt=""/>
                            <h3>Mr.Aryan Singh  </h3>
                            <span>Head of Marketing</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
