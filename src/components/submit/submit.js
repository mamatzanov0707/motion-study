import React, { useState} from "react";
import './index_sub.scss'
import {BsInstagram, BsTelephoneInbound, BsWhatsapp} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {PiTelegramLogoDuotone} from "react-icons/pi";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {IoCopyOutline} from "react-icons/io5";
import emailjs from "@emailjs/browser";


const Message = () => {
    const [send, setSend] = useState(false)
    const [iconsValue, setIconsValue] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [isError, setIsError] = useState(false);
    const triggerEmail = async (data) => {
        await emailjs.send("service_eent9gh", 'template_67ii9if', data, '1xmzYNkvqvEhVAtWC').then((success) => {
            alert('Email Sent Successfully');
        }).catch((err) => {
            alert('Something Went Wrong')
            console.log(err)
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            FirstName: e.target[0].value,
            LastName: e.target[1].value,
            phone: e.target[2].value,
            email: e.target[3].value,
            GroupOrCompany: e.target[4].value,
            howCanWeHelp: e.target[5].value,
        }
        console.log(data)
        triggerEmail(data)
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value.length < 5 || value.length > 10) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    return (
        <div id="message">
            <div className="container">
                <div className="message">
                    <div className='message--block'>
                        <h4>Send a message</h4>
                        <form onSubmit={onFormSubmit} action='#'>
                            <div className='message--block__car'>
                                <div className='message--block__car--input'>
                                    <input value={inputValue} onChange={handleInputChange}
                                           className={isError ? 'error' : ''} type="text" placeholder='First Name'/>
                                </div>
                                <div className='message--block__car--input'>
                                    <input type="text" placeholder='Last Name'/>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-[129px] mb-5">

                                <input type="text" placeholder={"Group or Company"}
                                       className={"submit__card--one__input w-[100%] h-[22px] border-b-2 border-black submit__card--one__input "}/>
                                <input type="text" placeholder={"how can we help?"}
                                       className={"w-[100%] h-[50px] border-b-2 border-black submit__card--one__input "}/>

                                <input type="text" placeholder={"Group or Company"}
                                       className={"w-[100%] h-[22px] border-b-2 border-black "}/>
                                <input type="text" placeholder={"how can we help?"}
                                       className={"w-[100%] h-[50px] border-b-2 border-black "}/>
                                <div className='message--block__car'>
                                    <div className='message--block__car--input'>
                                        <input type="number" placeholder='phone'/>
                                    </div>
                                    <div className='message--block__car--input'>
                                        <input type="email" placeholder='email'/>
                                    </div>

                                </div>
                                <div className='message--block__tools'>
                                    <input type="text" placeholder='Group or Company'/>
                                </div>
                                <div className='message--block__tools'>
                                    <input type="text" placeholder='how can we help?'/>
                                </div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='message--help'>
                        <h3>contact Info</h3>
                        <div className='message--help__icons'>
                            <BsTelephoneInbound className='text-3xl' style={{color: 'white'}}/>
                            <a onClick={() => setIconsValue(true)} href="tel:+996 500 34 84 39">+996 500 34 84 39</a>
                            <CopyToClipboard text='+996 500 34 84 39'>
                                <IoCopyOutline className='text-2xl'
                                               style={{color: 'white', marginLeft: '20px', cursor: 'pointer'}}/>
                            </CopyToClipboard>
                        </div>
                        <div className='message--help__icons'>
                            <AiOutlineMail className='text-3xl' style={{color: 'white'}}/>
                            <h4 onClick={() => setIconsValue(true)}>motionweb312@gmail.com</h4>
                            <CopyToClipboard text='motionweb312@gmail.com'>
                                <IoCopyOutline className='text-2xl'
                                               style={{color: 'white', marginLeft: '20px', cursor: 'pointer'}}/>
                            </CopyToClipboard>
                        </div>
                        <div className='massage--help__view' style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'start',
                        }}>
                            <PiTelegramLogoDuotone className='text-3xl' style={{color: 'white'}}/>
                            <BsWhatsapp className='text-3xl' style={{color: 'white', margin: ' 42px'}}/>
                            <BsInstagram className='text-3xl' style={{color: 'white'}}/>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5848.508298798211!2d74.5708881!3d42.8674796!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1692165023738!5m2!1sru!2skg"
                            width="370" height="230" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className='message--help__cop'>
                            <div className='message--submit'>
                                <div onClick={() => setSend(!send)} style={{cursor: 'pointer'}}
                                     className='message--help__cop--com'>
                                    <svg className='message--carta' xmlns="http://www.w3.org/2000/svg" width="56"
                                         height="56" viewBox="0 0 56 56"
                                         fill="none">
                                        <rect width="56" height="56" rx="28" fill="#E5EA00"/>
                                        <path
                                            d="M28.5766 31.0701C28.7446 32.3354 28.3424 33.662 27.3701 34.6343L23.5814 38.423C21.9232 40.0811 19.2348 40.0811 17.5766 38.423C15.9185 36.7648 15.9185 34.0764 17.5766 32.4182L21.3653 28.6295C22.3376 27.6572 23.6642 27.255 24.9295 27.423M27.4227 24.9297C27.2548 23.6644 27.657 22.3379 28.6293 21.3656L32.418 17.5769C34.0761 15.9187 36.7645 15.9187 38.4227 17.5769C40.0809 19.235 40.0809 21.9235 38.4227 23.5816L34.634 27.3703C33.6617 28.3426 32.3352 28.7448 31.0698 28.5768M24.9295 31.0701L31.0698 24.9297"
                                            stroke="#212121" strokeWidth="1.3" strokeLinecap="square"/>
                                    </svg>
                                    <h4>Copy the link</h4>
                                </div>
                            </div>
                        </div>
                        <div style={{display: send ? 'block' : 'none'}} className='message--help__send'>
                            <h3>send</h3>
                            <p>SHARE THIS SITE WITH YOUR FRIENDS</p>
                            <div className='message--help__send--telegram'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                     fill="none">
                                    <rect width="48" height="48" rx="24" fill="#0DC143"/>
                                    <path
                                        d="M34.7504 13.2115C32.1775 10.5628 28.6207 9.125 24.9883 9.125C17.2694 9.125 11.064 15.4061 11.1396 23.0493C11.1396 25.4709 11.8207 27.8169 12.9558 29.9358L10.9883 37.125L18.3288 35.2331C20.3721 36.3682 22.6423 36.898 24.9126 36.898C32.5558 36.898 38.7613 30.6169 38.7613 22.9736C38.7613 19.2655 37.3234 15.7845 34.7504 13.2115ZM24.9883 34.552C22.945 34.552 20.9018 34.0223 19.1613 32.9628L18.7072 32.7358L14.318 33.8709L15.4531 29.5574L15.1504 29.1034C11.8207 23.7304 13.4099 16.6169 18.8586 13.2872C24.3072 9.95743 31.345 11.5466 34.6748 16.9953C38.0045 22.4439 36.4153 29.4818 30.9667 32.8115C29.2261 33.9466 27.1072 34.552 24.9883 34.552ZM31.6477 26.152L30.8153 25.7736C30.8153 25.7736 29.6045 25.2439 28.8477 24.8655C28.7721 24.8655 28.6964 24.7899 28.6207 24.7899C28.3937 24.7899 28.2423 24.8655 28.091 24.9412C28.091 24.9412 28.0153 25.0169 26.9558 26.2277C26.8802 26.3791 26.7288 26.4547 26.5775 26.4547H26.5018C26.4261 26.4547 26.2748 26.3791 26.1991 26.3034L25.8207 26.152C24.9883 25.7736 24.2315 25.3196 23.6261 24.7142C23.4748 24.5628 23.2477 24.4115 23.0964 24.2601C22.5667 23.7304 22.0369 23.125 21.6586 22.4439L21.5829 22.2926C21.5072 22.2169 21.5072 22.1412 21.4315 21.9899C21.4315 21.8385 21.4315 21.6872 21.5072 21.6115C21.5072 21.6115 21.8099 21.2331 22.0369 21.0061C22.1883 20.8547 22.264 20.6277 22.4153 20.4764C22.5667 20.2493 22.6423 19.9466 22.5667 19.7196C22.491 19.3412 21.5829 17.298 21.3558 16.8439C21.2045 16.6169 21.0531 16.5412 20.8261 16.4655H20.5991C20.4477 16.4655 20.2207 16.4655 19.9937 16.4655C19.8423 16.4655 19.691 16.5412 19.5396 16.5412L19.464 16.6169C19.3126 16.6926 19.1613 16.8439 19.0099 16.9196C18.8586 17.0709 18.7829 17.2223 18.6315 17.3736C18.1018 18.0547 17.7991 18.8872 17.7991 19.7196C17.7991 20.325 17.9504 20.9304 18.1775 21.4601L18.2531 21.6872C18.9342 23.125 19.8423 24.4115 21.0531 25.5466L21.3558 25.8493C21.5829 26.0764 21.8099 26.2277 21.9613 26.4547C23.5504 27.8169 25.3667 28.8007 27.4099 29.3304C27.6369 29.4061 27.9396 29.4061 28.1667 29.4818C28.3937 29.4818 28.6964 29.4818 28.9234 29.4818C29.3018 29.4818 29.7558 29.3304 30.0586 29.1791C30.2856 29.0277 30.4369 29.0277 30.5883 28.8764L30.7396 28.725C30.891 28.5736 31.0423 28.498 31.1937 28.3466C31.345 28.1953 31.4964 28.0439 31.5721 27.8926C31.7234 27.5899 31.7991 27.2115 31.8748 26.8331C31.8748 26.6818 31.8748 26.4547 31.8748 26.3034C31.8748 26.3034 31.7991 26.2277 31.6477 26.152Z"
                                        fill="white"/>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                     fill="none">
                                    <rect width="48" height="48" rx="24" fill="url(#paint0_radial_1036_1947)"/>
                                    <rect width="48" height="48" rx="24" fill="url(#paint1_radial_1036_1947)"/>
                                    <path
                                        d="M19.0013 24C19.0013 21.2387 21.2392 18.9996 24.0005 18.9996C26.7618 18.9996 29.0009 21.2387 29.0009 24C29.0009 26.7613 26.7618 29.0004 24.0005 29.0004C21.2392 29.0004 19.0013 26.7613 19.0013 24ZM16.2982 24C16.2982 28.254 19.7465 31.7023 24.0005 31.7023C28.2545 31.7023 31.7028 28.254 31.7028 24C31.7028 19.746 28.2545 16.2977 24.0005 16.2977C19.7465 16.2977 16.2982 19.746 16.2982 24ZM30.2077 15.9923C30.2076 16.3483 30.313 16.6963 30.5107 16.9924C30.7083 17.2885 30.9894 17.5193 31.3182 17.6557C31.6471 17.7921 32.009 17.8279 32.3582 17.7586C32.7074 17.6892 33.0282 17.5179 33.28 17.2663C33.5318 17.0147 33.7034 16.694 33.773 16.3449C33.8426 15.9957 33.8071 15.6338 33.671 15.3048C33.5349 14.9759 33.3043 14.6947 33.0084 14.4968C32.7124 14.2989 32.3645 14.1931 32.0084 14.193H32.0077C31.5305 14.1932 31.0729 14.3828 30.7354 14.7202C30.3979 15.0576 30.2081 15.5151 30.2077 15.9923ZM17.9405 36.2096C16.478 36.143 15.6832 35.8994 15.1549 35.6936C14.4546 35.421 13.9549 35.0963 13.4296 34.5716C12.9042 34.047 12.579 33.5478 12.3076 32.8475C12.1016 32.3195 11.858 31.5244 11.7916 30.0619C11.7188 28.4808 11.7043 28.0058 11.7043 24.0001C11.7043 19.9944 11.72 19.5208 11.7916 17.9383C11.8582 16.4759 12.1036 15.6823 12.3076 15.1528C12.5802 14.4524 12.9049 13.9528 13.4296 13.4274C13.9542 12.902 14.4534 12.5768 15.1549 12.3054C15.6829 12.0995 16.478 11.8559 17.9405 11.7894C19.5216 11.7167 19.9966 11.7022 24.0005 11.7022C28.0044 11.7022 28.4798 11.7179 30.0623 11.7894C31.5247 11.856 32.3183 12.1014 32.8478 12.3054C33.5482 12.5768 34.0478 12.9028 34.5732 13.4274C35.0986 13.952 35.4226 14.4524 35.6952 15.1528C35.9011 15.6808 36.1447 16.4759 36.2112 17.9383C36.2839 19.5208 36.2984 19.9944 36.2984 24.0001C36.2984 28.0058 36.2839 28.4795 36.2112 30.0619C36.1446 31.5244 35.8998 32.3192 35.6952 32.8475C35.4226 33.5478 35.0978 34.0475 34.5732 34.5716C34.0486 35.0958 33.5482 35.421 32.8478 35.6936C32.3198 35.8996 31.5247 36.1432 30.0623 36.2096C28.4812 36.2824 28.0062 36.2969 24.0005 36.2969C19.9948 36.2969 19.5211 36.2824 17.9405 36.2096ZM17.8163 9.09084C16.2194 9.16356 15.1283 9.41676 14.1754 9.78756C13.1885 10.1705 12.353 10.6842 11.5182 11.5177C10.6834 12.3512 10.171 13.188 9.78805 14.1749C9.41725 15.1284 9.16405 16.219 9.09133 17.8158C9.01741 19.4152 9.00049 19.9265 9.00049 24C9.00049 28.0735 9.01741 28.5848 9.09133 30.1842C9.16405 31.7812 9.41725 32.8716 9.78805 33.8251C10.171 34.8114 10.6835 35.6491 11.5182 36.4823C12.3529 37.3154 13.1885 37.8284 14.1754 38.2124C15.1301 38.5832 16.2194 38.8364 17.8163 38.9092C19.4165 38.9819 19.927 39 24.0005 39C28.074 39 28.5853 38.9831 30.1847 38.9092C31.7816 38.8364 32.8721 38.5832 33.8256 38.2124C34.8119 37.8284 35.6479 37.3158 36.4828 36.4823C37.3176 35.6488 37.8289 34.8114 38.2129 33.8251C38.5837 32.8716 38.8381 31.781 38.9096 30.1842C38.9824 28.5836 38.9993 28.0735 38.9993 24C38.9993 19.9265 38.9824 19.4152 38.9096 17.8158C38.8369 16.2188 38.5837 15.1278 38.2129 14.1749C37.8289 13.1886 37.3163 12.3526 36.4828 11.5177C35.6492 10.6829 34.8119 10.1705 33.8268 9.78756C32.8721 9.41676 31.7815 9.16236 30.1859 9.09084C28.5865 9.01812 28.0752 9 24.0017 9C19.9282 9 19.4165 9.01692 17.8163 9.09084Z"
                                        fill="white"/>
                                    <defs>
                                        <radialGradient id="paint0_radial_1036_1947" cx="0" cy="0" r="1"
                                                        gradientUnits="userSpaceOnUse"
                                                        gradientTransform="translate(12.7501 51.697) rotate(-90) scale(47.5715 44.2453)">
                                            <stop stop-color="#FFDD55"/>
                                            <stop offset="0.1" stop-color="#FFDD55"/>
                                            <stop offset="0.5" stop-color="#FF543E"/>
                                            <stop offset="1" stop-color="#C837AB"/>
                                        </radialGradient>
                                        <radialGradient id="paint1_radial_1036_1947" cx="0" cy="0" r="1"
                                                        gradientUnits="userSpaceOnUse"
                                                        gradientTransform="translate(-8.04025 3.45784) rotate(78.6806) scale(21.2647 87.6539)">
                                            <stop stop-color="#3771C8"/>
                                            <stop offset="0.128" stop-color="#3771C8"/>
                                            <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
                                        </radialGradient>
                                    </defs>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                     fill="none">
                                    <rect width="48" height="48" rx="24" fill="#4267B2"/>
                                    <path
                                        d="M25.6025 39.9998V25.4031H30.502L31.2355 19.7145H25.6025V16.0825C25.6025 14.4356 26.0599 13.3131 28.4218 13.3131L31.4341 13.3117V8.22391C30.9129 8.15484 29.1249 8 27.0446 8C22.7015 8 19.7281 10.6509 19.7281 15.5194V19.7147H14.8159V25.4033H19.728V40L25.6025 39.9998Z"
                                        fill="white"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                     fill="none">
                                    <rect width="48" height="48" rx="24" fill="#419FD9"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M29.3356 35.8843C31.0131 36.6182 31.6422 35.0805 31.6422 35.0805L36.0806 12.7836C36.0456 11.2808 34.0186 12.1895 34.0186 12.1895L9.17051 21.94C9.17051 21.94 7.98227 22.3594 8.08712 23.0933C8.19196 23.8272 9.13556 24.1767 9.13556 24.1767L15.3913 26.2736C15.3913 26.2736 17.2785 32.4594 17.6629 33.6476C18.0124 34.8009 18.3269 34.8359 18.3269 34.8359C18.6764 34.9757 18.9909 34.731 18.9909 34.731L23.0449 31.0615L29.3356 35.8843ZM30.419 16.7327C30.419 16.7327 31.2927 16.2085 31.2577 16.7327C31.2577 16.7327 31.3975 16.8026 30.9432 17.2919C30.5238 17.7112 20.6335 26.5881 19.3055 27.7763C19.2006 27.8462 19.1307 27.951 19.1307 28.0908L18.7463 31.376C18.6764 31.7254 18.2221 31.7604 18.1172 31.4459L16.4747 26.0638C16.4048 25.8542 16.4747 25.6095 16.6844 25.4697L30.419 16.7327Z"
                                          fill="white"/>
                                </svg>
                            </div>
                            <button>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                );
                };
 export default Message;