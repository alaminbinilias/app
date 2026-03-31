import React from 'react';
import playstore from "../../Images/play.png"
import appstore from "../../Images/app-store.png"
import header from "../../Images/HD1.png"
const HeroSection = () => {
    return (
        <div>
            <div>
                <h3 className='pt-20 text-center font-bold text-3xl lg:text-5xl'>We Build<br></br><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h3>
                <p className='mt-5 text-center w-full px-4 lg:w-200 lg:mx-auto text-gray-500  text-sm lg:text-md'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center items-center mt-6 '>
                    <button className="btn  mr-2"><span><img className='w-5 flex items-center justify-center' src={playstore} alt='Play Store Not Found'></img> </span>Google Play</button>
                    <button className="btn px-6"><span><img className='w-5 flex items-center justify-center' src={appstore} alt='App Store Not Found'></img> </span>App Store</button>
                </div>

                <div className='pb-20'>
                    <img className="z-10 flex items-center justify-center mx-auto lg:w-300" src={header}></img>
                </div>
                <div className=' -mt-45 lg:-mt-92 py-5 lg:pb-30 relative z-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                    <p className='text-center text-white mb-10 mt-3 text-4xl'>Trusted by Millions, Built for You</p>
                    <div className=' flex justify-evenly'>
                        <div>
                            <p>Total Downloads</p>
                            <p>29.6M</p>
                            <p>21% more than last month</p>
                        </div>
                        <div>
                            <p>Total Reviews</p>
                            <p>906K</p>
                            <p>46% more than last month</p>
                        </div>
                        <div>
                            <p>Active Apps</p>
                            <p>132+</p>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;