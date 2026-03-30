import React from 'react';
import git from '../../Images/github.png'
import logo from '../../Images/Logo.png'
import home from '../../Images/home.png'
import app from '../../Images/app-store.png'
import install from '../../Images/download.png'
const NavSection = () => {
    return (
        <div>

            {/* Navsection Start */}


            <div className="navbar px-2 lg:px-8 bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className='font-semibold text-[1.1rem]'> <span className='-mr-1'> <img src={home} alt="" /></span>Home</a></li>
                            <li><a className='font-semibold text-[1.1rem]'> <span className='w-4 -mr-1'> <img src={app} alt="" /></span>Apps</a></li>
                            <li><a className='font-semibold text-[1.1rem]'> <span className=' -mr-1 w-4'> <img src={install} alt="" /></span>Installation</a></li>
                        </ul>
                    </div>
                    <a className=" font-semibold flex items-center justify-center cursor-pointer text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"><span className='px-0 lg:px-2'><img src={logo} alt="" /></span>HERO.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='font-semibold text-[1.1rem]'> <span className='-mr-1'> <img src={home} alt="" /></span>Home</a></li>
                        <li><a className='font-semibold text-[1.1rem]'> <span className='w-4 -mr-1'> <img src={app} alt="" /></span>Apps</a></li>
                        <li><a className='font-semibold text-[1.1rem]'> <span className=' -mr-1 w-4'> <img src={install} alt="" /></span>Installation</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>

                        <a className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><span><img src={git} alt="" /></span> Contribute</a>
                        <a></a>
                    </div>
                </div>
            </div>

            {/* NavSection End */}

        </div>
    );
};

export default NavSection;