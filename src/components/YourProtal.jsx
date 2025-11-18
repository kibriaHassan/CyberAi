import React from "react";
import Image from "next/image";
import PortalImg from "../assets/portalimg.png";
import iconLeft from '../assets/iconleft.png';
import iconRight from '../assets/iconright.png';

const YourProtal = () => {
  return (
    <>
      <section className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-[#E03609] after:to-[#F0B71F]">
        <div className="container mx-auto">
          <div className='relative '>
            <Image className='absolute -top-8 -left-7.5 z-20' src={iconLeft} alt="" />
            <Image className='absolute -top-8 -right-7.5 z-20' src={iconRight} alt="" />
          </div>
          <div className="flex justify-center gap-25 px-22 pt-24 pb-32 ">
            <div className="w-[50%]">
              <Image
                src={PortalImg}
                className="w-153.5"
                alt="Explore Feature Image"
              />
            </div>

            <div className="w-[50%] pt-10 font-[Montserrat]">
              <h2 className="w-150.25 font-bold font-[Orbitron] text-[55px]">
                Your <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent"> Portal to a </span> <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent"> Gritty, </span> Tech-Driven Future.
              </h2>
              <p className="font-medium text-lg leading-8 mt-10">
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements.
              </p>

              <div className="flex gap-11 mt-12">
                <button className="px-6 py-3 text-white font-semibold rounded-md bg-linear-to-r from-yellow-500 via-orange-500 to-red-600 cursor-pointer">
                  Read More
                </button>
                <button className="px-6 py-3 font-semibold rounded-md bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent cursor-pointer border-2 border-amber-600">
                  learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default YourProtal;
