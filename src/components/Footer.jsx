import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='bg-linear-to-r from-orange-800 to-orange-300 h-px absolute top-40 left-0 w-full z-0'>
            </div>
            <footer className="container mx-auto pt-50 pb-10 px-30 text-white font-[Montserrat] border border-r border-l-amber-800 border-r-amber-300 border-t-amber-700 border-b-transparent lline-left">
                <div className='flex gap-37.25'>
                    <div>
                        <h2 className="text-[22px] font-semibold font-[Orbitron] pb-7.25">Cyber.AI - Cyber Punk Website</h2>
                        <p className='text-lg font-medium w-119.5'>Explore the high-tech, low-life world where the lines between humanity </p>
                    </div>
                    <div>
                        <h2 className='text-lg font-medium pb-2.25'>Information</h2>
                        <ul className='text-[15.5px] text-[#CBCBCB]'>
                            <li>Press Centre</li>
                            <li>Our Blog</li>
                            <li>Term and Condition</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-lg font-medium pb-2.25'>Menu</h2>
                        <ul className='text-[15.5px] text-[#CBCBCB]'>
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-lg font-medium pb-2.25'>Contact</h2>
                        <ul className='text-[15.5px] text-[#CBCBCB]'>
                            <li>Phone : +123 456 789</li>
                            <li>Email   : @example.com</li>
                            <li>Address Line 01</li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-between mt-26'>
                    <h2 className='text-lg font-medium'>© 2024 Cyber.AI. All rights reserved.</h2>
                    <ul className='flex gap-[51.56px]'>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                    </ul>

                    <div className="flex gap-7.25 text-lg">
                        <div className='flex justify-center items-center border w-10 h-10 rounded-full cursor-pointer hover:bg-amber-500 duration-400 transition'>
                            <FaLinkedinIn />
                        </div>
                        <div className='flex justify-center items-center border w-10 h-10 rounded-full cursor-pointer hover:bg-amber-500 duration-400 transition'>
                            <FaFacebookF />
                        </div>
                        <div className='flex justify-center items-center border w-10 h-10 rounded-full cursor-pointer hover:bg-amber-500 duration-400 transition'>
                            <FaTwitter />
                        </div>


                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;
