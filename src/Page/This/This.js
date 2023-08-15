import React from 'react';
import img1 from '../../img/img11.png'
import book from '../../img/book.svg'
import book1 from '../../img/img33.svg'
import book4 from '../../img/img44.svg'
import img2 from '../../img/img22.svg'

import './index.scss'

const This = () => {
    return (
        <div id="this">
            <div className="container">
                <div className="this">
                    <div className="this--title">
                      <h1>This is why we are
                          best from others</h1>
                        <p>We provide full support at all stages of preparation, including assistance in filing documents and preparing for an interview. Contact us  and start your journey to higher education abroad!</p>
                        <img src={img1} alt=""/>
                    </div>

                    <div className="this--block">
                        <div className="this--block__power">
                            <div className="this--block__power--pow">
                                <div className="this--block__power--pow__pows">
                                    <img src={book} alt=""/>
                                    <h2>1000+ Partners</h2>
                                    <h3>over 1000+ partners worldwide
                                        enter the best universities in the world</h3>
                                </div>
                                <div className="this--block__power--pow__pows">
                                    <img src={img2} alt=""/>
                                    <h2>Experts</h2>
                                    <h3>We are experts in our field. help you reach new heights</h3>
                                </div>
                            </div>
                            <div className="this--block__power--pow">
                                <div className="this--block__power--pow__pows">
                                    <img src={book1} alt=""/>
                                    <h2>Time</h2>
                                    <h3>we will help you save your time and nerves when applying to the best university.</h3>
                                </div>
                                <div className="this--block__power--pow__pows">
                                    <img src={book4} alt=""/>
                                    <h2>AFFORDABLE PRICES</h2>
                                    <h3>reasonable prices will always please you. sign up for a consultation</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default This;