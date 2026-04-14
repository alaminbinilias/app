import React from 'react';
import error from "../../Images/errorImages.png"
import { NavLink } from 'react-router';
const ErrorPages = () => {
    return (
        <div>
            <div>
                <div>
                    <img className='mx-auto mt-50 lg:mt-25' src={error}></img>
                </div>
                <div className='mx-auto text-center -mt-4 lg:-mt-15'>
                    <p className='font-semibold text-4xl'>Oops, page not found!</p>
                    <p className='mt-2 text-[1.4rem] lg:text-2xl text-gray-400'>The page you are looking for is not available.</p>
                    <NavLink to='/'><button className='btn mt-3 px-7 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Home</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPages;