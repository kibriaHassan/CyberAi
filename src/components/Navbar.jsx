import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="container flex items-center justify-between px-15 py-14.75 mx-auto">
                <h2 className="text-[24px] font-bold bg-linear-to-r from-orange-300 to-orange-800 bg-clip-text text-transparent">
                    Cyber.AI
                </h2>

                <ul className="flex text-white font-medium items-center gap-10">
                    <li><a className="hover:text-white/70 transition" href="#">Home</a></li>
                    <li><a className="hover:text-white/70 transition" href="#">Pages</a></li>
                    <li><a className="hover:text-white/70 transition" href="#">Support</a></li>
                    <li><a className="hover:text-white/70 transition" href="#">Contact</a></li>
                </ul>
                <button className="bg-linear-to-r from-orange-300 to-orange-800 text-white text-sm font-semibold py-3 px-5.25 rounded-lg cursor-pointer">
                    Get started free
                </button>
            </nav>
        </>
    )
}

export default Navbar;
