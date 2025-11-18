import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';
import iconLeft from '../assets/iconleft.png';
import iconRight from '../assets/iconright.png';

const Footer = () => {
    return (
        <>
            <section className='relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-[#E03609] after:to-[#F0B71F]'>
            </section>
            <footer className="container mx-auto pt-25 pb-10 px-30 text-white font-[Montserrat]">
                <div className='relative '>
                    <Image className='absolute -top-33 -left-37.5 z-20' src={iconLeft} alt="" />
                    <Image className='absolute -top-33 -right-37.5 z-20' src={iconRight} alt="" />
                </div>
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
