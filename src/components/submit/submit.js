import React from 'react';
import './index_sub.scss'
import {BsFillTelephoneInboundFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import {AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import {BiLogoTelegram} from "react-icons/bi";

const Submit = () => {
    return (
        <div id={"submit"}>
            <div className="container ">
                <div className="submit flex justify-between mt-20 mb-40">



                    <div className="submit__card flex justify-center w-[100%] relative">
                        <div className="submit__card--one w-[58%] h-[442px] border-b-blue-900 p-5">
                            <h1 className={"mb-3"}>Send a message</h1>
                            <div className=" flex justify-between flex-wrap w-[4]523px] h-[160px]">
                            <input type="text" placeholder={"First Name"} className={"submit__card--one__input w-[230px] h-[30px] border-b-2 border-black  "}/>
                            <input type="text" placeholder={"Phone"} className={"submit__card--one__input w-[230px] h-[30px] border-b-2 border-black "}/>
                            <input type="text" placeholder={"Last Name"} className={"submit__card--one__input w-[230px] h-[30px] border-b-2 border-black "}/>
                            <input type="text" placeholder={"Email"} className={"submit__card--one__input w-[230px] h-[30px] border-b-2 border-black "}/>

                            </div>
                            <div className="flex flex-col justify-between h-[129px] mb-5">
                            <input type="text" placeholder={"Group or Company"} className={"submit__card--one__input w-[100%] h-[22px] border-b-2 border-black submit__card--one__input "}/>
                            <input type="text" placeholder={"how can we help?"} className={"w-[100%] h-[50px] border-b-2 border-black submit__card--one__input "}/>
                            </div>
                            <center><button type="button" className="text-white w-[165px] bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-8 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </center>
                        </div>
                        <div className="submit__card--two w-[40%] h-[442px] text-white pl-8">
                            <h3>contact info</h3>
                            <div className="flex  justify-start items-center w-auto m-3 ml-0 ">
                                < BsFillTelephoneInboundFill className={"submit__card--two__icon"}/><h3 className={"pl-4 pb-2  pt-0 "}>+996 500 34 84 39</h3>
                            </div>
                            <div className="flex  justify-start items-center ">
                                <HiOutlineMail className={"submit__card--two__icon"}/><h3 className={"pl-4 pb-2  pt-0"}>motionweb312@gmail.com</h3>
                            </div>
<div className="flex  justify-start items-center m-3 ml-0">
    <AiFillYoutube className={"footer__icon"}/>
    <BiLogoTelegram className={"footer__icon"}/>
    <AiFillInstagram className={"footer__icon"}/>
</div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.1125479454538!2d74.58626040714806!3d42.880815133933865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81915eaf75d%3A0x9bfedde3851dcd21!2sMaximum!5e0!3m2!1sru!2skg!4v1692028467592!5m2!1sru!2skg" className={"w-[330px] h-[230px] border-0 m-8"} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


                        </div>

                    </div>
                    <div className="submit__absalute w-[448px] h-[500px] absolute border-4 border-slate-500 -z-10 "></ div>


                </div>

            </div>
            
        </div>
    );
};

export default Submit;