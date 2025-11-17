import React from 'react';
import Image from "next/image";
import NeonImg1 from '../assets/neon1.png';
import NeonImg2 from '../assets/neon2.png';
import NeonImg3 from '../assets/neon3.png';


const NeonDreams = () => {
    return (
        <section className='container border border-r border-t-amber-800 border-b-amber-300 border-l-transparent border-r-transparent lline-left mx-auto'>
            <div>
                <div className="w-[1439.17px] container mx-auto flex justify-center gap-9 font-[Montserrat] pt-19.5">
                    <div className="w-[50%] px-10 pt-14">
                        <h2 className="w-171.25 font-bold text-[56.81px] font-[Orbitron]">
                            Where <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent"> Neon Dreams </span> <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent"> & Digital </span> Nightmares Converge.
                        </h2>
                        <p className="w-167 font-medium text-lg leading-8 my-8">
                            A realm where advanced technology meets dystopian reality. Our
                            website is your gateway to a universe of neon lights, gritty
                            streets, and cybernetic enhancements. Explore the high-tech,
                            low-life world where the lines between humanity and machinery blur.
                        </p>
                        <div className="flex gap-17.5">
                            <div>
                                <h3 className="font-semibold text-[47px] bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                                    89,2K+
                                </h3>
                                <p className="font-medium text-[17px]">Discover the Future</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[47px] bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                                    7001+
                                </h3>
                                <p className="font-medium text-[17px]">Stories and Lore</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[47px] bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                                    3,124+
                                </h3>
                                <p className="font-medium text-[17px]">Art and Design</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[50%]">
                        <Image
                            src={NeonImg1}
                            className='w-164'
                            alt="Night Mares Image 1"
                        />
                    </div>
                </div>

                <div className="container mx-auto flex justify-center gap-9 px-10 pt-10.5 pb-28">
                    <div className="w-[50%]">
                        <Image
                            src={NeonImg2}
                            className='w-164'
                            alt="Night Mares Image 1"
                        />
                    </div>
                    <div className="w-[50%] pt-33.75 font-[Montserrat]">
                        <h2 className="w-147.25 font-bold text-[56px] font-[Orbitron] leading-16">
                            Unveil <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent"> the Secrets </span> <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent"> of the </span> Cybernetic Underworld
                        </h2>
                        <p className="w-146.75 font-medium text-lg leading-8 my-8">
                            A realm where advanced technology meets dystopian reality. Our
                            website is your gateway to a universe of neon lights, gritty
                            streets, and cybernetic enhancements.
                        </p>
                        <div className="flex gap-12 items-center py-8 px-10 border border-[#F0B71F] rounded-[20px]">
                            <div className="w-[40%]">
                                <Image
                                    src={NeonImg3}
                                    className='w-50'
                                    alt="Night Mares Image 1"
                                />
                            </div>
                            <div className="w-[60%]">
                                <h4 className="font-medium text-[28px]">Join the Revolution</h4>
                                <p className="font-medium text-lg leading-8">
                                    Explore the high-tech, low-life world where the lines between humanity and machinery blur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NeonDreams;
