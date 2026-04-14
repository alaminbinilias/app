import React from 'react';
import { NavLink } from 'react-router';

const NotFoundApp = () => {
    return (
        <div>
            <div className='grid h-100 mt-10 justify-center items-center'>
                <p className='font-bold text-5xl text-gray-400'>App Not Found &#128546;</p>
            </div>
            <NavLink to='/'><button className='btn -mt-60 text-white bg-gradient-to-r from-[#9F62F2] to-[#632EE3]'>Go Back Home</button></NavLink>
        </div>
    );
};

export default NotFoundApp;