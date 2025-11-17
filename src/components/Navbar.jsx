import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <section className='container border border-r border-l-amber-800 border-r-amber-300 border-t-transparent border-b-transparent lline-left mx-auto'>
                <nav className="container flex items-center justify-between px-15 py-14.75 mx-auto">
                    <h2 className="text-[24px] font-bold bg-linear-to-r from-orange-300 to-orange-800 bg-clip-text text-transparent">
                        Cyber.AI
                    </h2>

                    <ul className="flex text-white font-medium items-center gap-10">
                        <li className="hover:text-amber-500 transition" >
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-amber-500 transition">
                            <Link href="/pages">Pages</Link>
                        </li>
                        <li className="hover:text-amber-500 transition">
                            <Link href="/support">Support</Link>
                        </li>
                        <li className="hover:text-amber-500 transition">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <button className="bg-linear-to-r from-orange-300 to-orange-800 text-white text-sm font-semibold py-3 px-5.25 rounded-lg cursor-pointer">
                        Get started free
                    </button>
                </nav>
            </section>
        </>
    )
}

export default Navbar;
