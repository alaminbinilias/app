import React from 'react';
import playstore from "../../Images/play.png"
import appstore from "../../Images/app-store.png"
import header from "../../Images/Header.png"
const HeroSection = () => {
    return (
        <div>
            <div>
                <h3 className='pt-20 text-center font-bold text-5xl'>We Build<br></br><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h3>
                <p className='mt-5 text-center w-full px-4 lg:w-200 lg:mx-auto text-gray-500 text-md'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center items-center mt-6 '>
                    <button className="btn  mr-2"><span><img className='w-5 flex items-center justify-center' src={playstore} alt='Play Store Not Found'></img> </span>Google Play</button>
                    <button className="btn px-6"><span><img className='w-5 flex items-center justify-center' src={appstore} alt='App Store Not Found'></img> </span>App Store</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;