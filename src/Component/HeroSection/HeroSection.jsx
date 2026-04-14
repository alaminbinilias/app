import React from 'react';
import playstore from "../../Images/play.png"
import appstore from "../../Images/app-store.png"
import header from "../../Images/HD1.png"
import phone from "../../Images/Iphone.png"
import { NavLink } from 'react-router';
const HeroSection = () => {
    return (
        <div>
            <div>
                <h3 className='pt-20 text-center font-bold text-3xl lg:text-5xl'>We Build<br></br><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h3>
                <p className='mt-5 text-center w-full px-4 lg:w-200 lg:mx-auto text-gray-500  text-sm lg:text-md'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center items-center mt-6 '>
                    <NavLink to='https://play.google.com/store/games?hl=en' target='blank'><button className="btn  mr-2"><span><img className='w-5 flex items-center justify-center' src={playstore} alt='Play Store Not Found'></img> </span>Google Play</button></NavLink>
                    <NavLink to='https://www.apple.com/app-store/' target='blank'><button className="btn px-6"><span><img className='w-5 flex items-center justify-center' src={appstore} alt='App Store Not Found'></img> </span>App Store</button></NavLink>
                </div>

                <div className='pb-20'>
                    <img className="z-10 hidden lg:block flex items-center justify-center mx-auto lg:w-300" src={header}></img>
                    <img className="z-10 block w-59 mt-10 lg:hidden flex items-center justify-center mx-auto lg:w-300" src={phone}></img>
                </div>
                <div className='-mt-20 lg:-mt-92 py-5 mb-40 lg:mb-0 lg:pb-15 relative z-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                    <p className='text-center w-full text-white mb-4 lg:mb-10 mt-3 text-2xl lg:text-4xl'>Trusted by Millions, Built for You</p>
                    <div className=' flex justify-evenly'>
                        <div>
                            <p className='text-0.1 text-white mb-3 text-center'>Total Downloads</p>
                            <p className='text-3xl mb-2 lg:text-6xl font-bold text-white text-center lg:mb-4'>29.6M</p>
                            <p className='text-white text-[0.7rem] lg:text-sm'>21% more than last month</p>
                        </div>
                        <div>
                            <p className='text-0.1 text-white mb-3 text-center'>Total Reviews</p>
                            <p className='text-3xl mb-2 lg:text-6xl font-bold text-white text-center lg:mb-4'>906K</p>
                            <p className='text-white text-[0.7rem] lg:text-sm'>46% more than last month</p>
                        </div>
                        <div>
                            <p className='text-0.1 text-white mb-3 text-center'>Active Apps</p>
                            <p className='text-3xl mb-2 lg:text-6xl font-bold text-white text-center lg:mb-4'>132+</p>
                            <p className='text-white text-[0.7rem] lg:text-sm'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;