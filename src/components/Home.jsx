import React from 'react';
import Image from 'next/image';
import heroImg from '../assets/heroImg.png';
import iconLeft from '../assets/iconleft.png';
import iconRight from '../assets/iconright.png';

const Home = () => {
  return (
    <div className='container'>
      <h1 className='relative text-[197.6px] text-center font-[Orbitron] font-bold'>Cyber Punk</h1>
      <Image className='absolute top-70 left-[850px] z-1 w-215.5 mx-auto' src={heroImg} alt="Hero" />
      <Image className='absolute top-32.5 left-120.5' src={iconLeft} alt="" />
      <Image className='absolute top-32.5 right-120.5' src={iconRight} alt="" />
    </div>
  )
}

export default Home;
