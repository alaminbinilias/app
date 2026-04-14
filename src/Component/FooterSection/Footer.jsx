import React from 'react';

import logo from '../../Images/Logo.png'

const Footer = () => {
    return (
        <div className=''>

            {/* FooterSection Start */}

            <footer className="footer sm:footer-horizontal bg-gray-700 text-base-content px-3 pb-10 pt-10 mt-10 lg:mt-0">
                <aside>
                        <img className='w-14 lg:mx-auto' src={logo} alt="" />
                    <p className='text-white'>
                        <a className='font-bold text-sky-600 text-[1.3rem]' href="#">Programming.IO Ltd.</a>
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav className='text-white'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='text-white'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='text-white'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            {/* FooterSection End */}



        </div>
    );
};

export default Footer;