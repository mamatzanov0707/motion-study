import React from "react";
import Rectangle from "../../img/girle.png";
import Frame from "../../img/boy.svg";
import "./index.scss";

import {NavLink} from "react-router-dom";

function Exams() {
    return (
        <div id="exams">
            <div className="container">
                <div className="exams">
                    <h1>Exams</h1>
                    <p>
                        Exams are tests that assess a person's knowledge, skills, aptitude,
                        or other qualifications in a specific subject or area of study. They
                        are used to evaluate academic performance.
                    </p>
                    <div className="exams--big">
                        <div className="exams--big__one">
                            <img src={Rectangle} alt="img"/>
                            <div className="exams--big__one--text">
                                <h2>cambrige English exams</h2>
                                <h3>Your path to learning English, step by step.</h3>
                                <h5>
                                    Cambridge English Qualifications are in-depth exams that make
                                    learning English enjoyable, effective and rewarding. Our
                                    qualifications are based on research into effective teaching
                                    and learning.
                                </h5>
                                <NavLink to="/english">
                                    <h4>Discover more</h4>
                                </NavLink>
                            </div>
                        </div>
                        <div className="exams--big__two">
                            <div className="exams--big__two--block">
                                <NavLink to={"/artis"}>
                                    <img src={Frame} alt="img"/>
                                </NavLink>
                                <div className="exams--big__two--block__text">
                                    <div className="exams--big__two--block__text--mini">
                                        <h5>Aptis</h5>
                                    </div>
                                    <h3>
                                        Choose Aptis for your assessment needs
                                    </h3>
                                    <h2>
                                        Aptis is a computer basedtest which provides fast <br/>{" "}
                                        results reliably marked by our exsaminest.
                                    </h2>
                                </div>
                            </div>
                            <div className="exams--big__two--block">
                                <NavLink to={"/ielts"}>
                                    <img src={Frame} alt="img"/>

                                </NavLink>
                                <div className="exams--big__two--block__text">
                                    <div className="exams--big__two--block__text--mini">
                                        <h5>Aptis</h5>
                                    </div>
                                    <h3>
                                        Choose Aptis for your assessment needs
                                    </h3>
                                    <h2>
                                        Aptis is a computer basedtest which provides fast <br/>{" "}
                                        results reliably marked by our exsaminest.
                                    </h2>
                                </div>
                            </div>
                            <div className="exams--big__two--block">
                                <NavLink to={"/other"}>
                                    <img src={Frame} alt="img"/>
                                </NavLink>
                                <div className="exams--big__two--block__text">
                                    <div className="exams--big__two--block__text--mini">
                                        <h5>Aptis</h5>
                                    </div>
                                    <h3>
                                        Choose Aptis for your assessment needs
                                    </h3>
                                    <h2>
                                        Aptis is a computer basedtest which provides fast <br/>{" "}
                                        results reliably marked by our exsaminest.
                                    </h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exams;