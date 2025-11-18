import React from 'react';
import Image from 'next/image';
import heroImg from '../assets/heroImg.png';
import iconLeft from '../assets/iconleft.png';
import iconRight from '../assets/iconright.png';
import heroImg2 from '../assets/heroimg2.png';


const Banner = () => {
  return (
    <>
      <section>
        <div className='bg-linear-to-r from-orange-800 to-orange-300 h-px absolute top-40 left-0 w-full'>
        </div>
        <div className='container mx-auto'>
          <div className='relative '>
            <Image className='absolute -top-8 -left-7.5' src={iconLeft} alt="" />
            <Image className='absolute -top-8 -right-7.5' src={iconRight} alt="" />
          </div>

          <h1 className='text-[197.6px] text-center font-[Orbitron] font-bold -z-10'>Cyber Punk</h1>

          <div className="flex justify-center px-20 -mt-45 font-[Montserrat]">
            <div className="mt-90 w-67.5">
              <ul>
                <h2 className="font-semibold text-[24.86px] list-disc">
                  Stories & Lore
                </h2>
              </ul>
              <p className="font-medium mt-4.5 w-66 leading-8">
                Dive into compelling narratives set in a dystopian future.
              </p>
            </div>
            <div>
              <Image
                src={heroImg}
                className="w-215.5 pl-20" alt="Hero Img"
              />
            </div>
            <div className="mt-85 w-86 text-end">
              <h2 className="uppercase text-4xl">
                Events and <br /> <span className="font-semibold">Updates</span>
              </h2>
              <p className="font-medium leading-8 mt-5 mb-7">
                Explore the high-tech, low-life world <br /> where the lines
                between humanity <br /> and machinery blur.
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-md bg-linear-to-r from-yellow-500 via-orange-500 to-red-600 cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          <div className="flex justify-center items-end gap-25 -mt-20 mb-25 font-[Montserrat]">

            <div className='bg-[#ffffff0b] flex gap-11 border-2 border-amber-800 top-96 left-20 w-[655px] p-11 rounded-2xl z-10'>
              <Image className='w-50' src={heroImg2} alt="" />
              <div className='w-96 font-[Montserrat]'>
                <h2 className='text-[57.95px] bg-linear-to-r from-orange-800 to-orange-300 bg-clip-text text-transparent font-semibold'>76,285K+</h2>
                <h2 className='text-[28px] font-medium py-5.5'>Experience the Future</h2>
                <p className='text-[18px] font-medium leading-8'>Explore the high-tech, low-life world where the lines between</p>
              </div>
            </div>

            <div className="w-66 h-57">
              <h2 className="text-[36px]"> Art and <span className="font-semibold"> Design </span></h2>
              <p className="font-medium text-lg leading-8 mt-5">
                Feast your eyes on stunning visuals and concept art that bring the
                cyberpunk
              </p>
            </div>

            <div className="bg-[#ffffff10] w-64.5 h-63 border-2 border-amber-800 rounded-[19px] py-7 px-8.5">
              <h1 className="text-[58px] font-semibold bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                17+
              </h1>
              <h4 className="font-medium text-[28px]">Years of Experiences</h4>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Banner;
