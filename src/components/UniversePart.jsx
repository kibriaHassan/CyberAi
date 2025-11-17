import React from "react";
import Image from "next/image";
import Discover from "../assets/Discover.png";
import Explore from "../assets/Explore.png";
import Connected from "../assets/Connected.png";


const UniversePart = () => {
    return (
        <div className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-[#E03609] after:to-[#F0B71F]">
            <div className="container mx-auto font-[Montserrat] pt-37.5 pb-32 px-10">
                <h1 className="w-210.5 font-bold text-[55px] font-[Orbitron] text-center mx-auto">
                    Dive into the Cybernetic {" "}
                    <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                        Universe
                    </span>
                </h1>
                <p className="w-234 mx-auto text-lg font-medium leading-8 text-center mt-9">
                    A realm where advanced technology meets dystopian reality. Our website
                    is your gateway to a universe of neon lights, gritty streets,
                    and cybernetic enhancements.
                </p>
                <div className="mt-25 flex justify-center gap-5">
                    <div className="w-[419px] flex gap-9.5">
                        <div>
                            <Image
                                src={Discover}
                                className="w-20.25"
                                alt="Discover The Future Image"
                            />
                        </div>
                        <div className="font-medium ">
                            <h2 className="text-[28px] leading-7">
                                Discover the Future
                            </h2>
                            <p className="text-lg leading-8 mt-6.5">
                                Explore the high-tech, low-life <br /> world where the lines between <br /> humanity
                            </p>
                        </div>
                    </div>
                    <div className="w-[419px] flex gap-9.5">
                        <div>
                            <Image
                                src={Explore}
                                className="w-20.25"
                                alt="Explore Feature Image"
                            />
                        </div>
                        <div className="font-medium ">
                            <h2 className="text-[28px] leading-7">
                                Explore Features
                            </h2>
                            <p className="text-lg leading-8 mt-6.5">
                                Explore the high-tech, low-life <br /> world where the lines between <br /> humanity
                            </p>
                        </div>
                    </div>
                    <div className="w-[419px] flex gap-9.5">
                        <div>
                            <Image
                                src={Connected}
                                className="w-20.25"
                                alt="Stay Connected Image"
                            />
                        </div>
                        <div className="font-medium ">
                            <h2 className="text-[28px] leading-7">
                                Stay Connected
                            </h2>
                            <p className="text-lg leading-8 mt-6.5">
                                Explore the high-tech, low-life <br /> world where the lines between <br /> humanity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default UniversePart;
