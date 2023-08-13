import React from 'react';
import './Study.scss'
import map from '../../img/map.svg'

const Study = () => {
    return (
        <div id='study'>
            <div className="container">
                <div className='study'>
                    <h2>Study Abroad</h2>
                    <div className='study--line'></div>
                    <div className='study--block'>
                        <div className='study--block--motion'>
                            <img src={map} alt=""/>
                        </div>
                        <div className='study--block--motion__about'>
                            <p><span>Motion study</span> for International Education offers its clients <br/>
                                various study abroad opportunities – language courses, <br/>
                                secondary, professional and higher education, <br/>
                                professional development programmes for teachers <br/>
                                and specialists of companies and organizations.</p>
                            <p>
                               <span> Our partners include:</span> <br/>
                                -	Universities and higher education establishments. <br/>
                                -	Private schools and colleges. <br/>
                                -	State schools and colleges. <br/>
                                -	World known language schools for adults. <br/>
                                -	International language schools for 7-18 y.o. schoolchildren. <br/>
                                -	Business schools <br/>
                                -	Executive centres <br/>
                                -	Summer camps <br/>
                                -	Guardianship companies <br/>
                                <button>Explore</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;