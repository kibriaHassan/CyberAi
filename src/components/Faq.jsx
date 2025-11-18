import React from 'react';
import Image from 'next/image';
import iconLeft from '../assets/iconleft.png';
import iconRight from '../assets/iconright.png';

const Faq = () => {
    return (
        <>
            <div className="container font-[Montserrat] mx-auto py-12.5">
                <div className='relative '>
                    <Image className='absolute -top-20.5 -left-7.5 z-20' src={iconLeft} alt="" />
                    <Image className='absolute -top-20.5 -right-7.5 z-20' src={iconRight} alt="" />
                </div>
                <div>
                    <h2 className="w-210.5 font-bold font-[Orbitron] text-[55px] text-center mx-auto">
                        Frequently Asked <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent"> Questions </span>
                    </h2>
                    <p className="w-234 font-medium text-lg leading-8 text-center mx-auto mt-9">
                        A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-28 my-30 font-[Montserrat]">
                    <div className="flex gap-9">
                        <div className="font-[Orbitron] font-medium text-[48px] bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">01.</div>
                        <div className='w-127.5 border-b border-b-amber-800 pb-8'>
                            <h3 className="font-semibold font-[Orbitron] text-2xl mb-4">How d I stay updated on new content and events?</h3>
                            <p className="text-lg font-medium">A realm where advanced technology meets dystopian reality. Our website is your gateway.....</p>
                        </div>
                    </div>
                    <div className="flex gap-9">
                        <div className="font-[Orbitron] font-medium text-[48px] bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">02.</div>
                        <div className='w-127.5 border-b border-b-amber-800 pb-8'>
                            <h3 className="font-semibold font-[Orbitron] text-2xl mb-4">How can I contact customer cyber punk support?</h3>
                            <p className="text-lg font-medium">A realm where advanced technology meets dystopian reality. Our website is your gateway....</p>
                        </div>
                    </div>
                    <div className="flex gap-9">
                        <div className="font-[Orbitron] font-medium text-[48px] bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">03.</div>
                        <div className='w-127.5 border-b border-b-amber-800 pb-8'>
                            <h3 className="font-semibold font-[Orbitron] text-2xl mb-4">Can I purchase cyberpunk-themed merchandise?</h3>
                            <p className="text-lg font-medium">A realm where advanced technology meets dystopian reality. Our website is your gateway.....</p>
                        </div>
                    </div>
                    <div className="flex gap-9">
                        <div className="font-[Orbitron] font-medium text-[48px] bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">04.</div>
                        <div className='w-127.5 border-b border-b-amber-800 pb-8'>
                            <h3 className="font-semibold font-[Orbitron] text-2xl mb-4">Are there any rules or guidelines for participating in the community?</h3>
                            <p className="text-lg font-medium">A realm where advanced technology meets dystopian reality. Our website is your gateway.....</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Faq;
