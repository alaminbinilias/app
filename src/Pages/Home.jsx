import React from 'react';
import useProduct from '../Routes/Utility/UseProduct';
import AppCard from '../Component/AppCard/AppCard';
import trand from "../Images/trend.png"
import { NavLink } from 'react-router';
import HeroSection from '../Component/HeroSection/HeroSection';
import { CirclesWithBar } from 'react-loader-spinner';

const Home = () => {
    const { Product, Loading } = useProduct();
    //console.log(Product);
    //Product.forEach(item=>console.log(item));
    // let HomeData=[];
    // for(let i=0;i<8;++i){
    //     HomeData.push(Product[i]);
    // }
    // console.log(HomeData);

    const HomeData = Product.slice(0, 8);
    //console.log(HomeData)
    return (
        <div>

            <div className='bg-[#f5f5f5] h-auto'>
                <HeroSection></HeroSection>
            </div>

            <div className='text-center mt-14 mb-4 lg:mb-0 px-5 lg:px-0'>
                <div className='flex justify-center items-center gap-3'>
                    <p className='font-bold text-3xl font-mono'>Trending Apps</p>
                    <img className='w-8' src={trand} alt="" />
                </div>
                <p className='mt-3 text-gray-500 font-mono'>Explore All Trending Apps on the Market developed by us</p>
            </div>



            {
                Loading === true ? <div className='mx-auto flex justify-center'>
                    <CirclesWithBar
                        height="100"
                        width="100"
                        color="#4fa94d"
                        outerCircleColor="#4fa94d"
                        innerCircleColor="#4fa94d"
                        barColor="#4fa94d"
                        ariaLabel="circles-with-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div> : <div className='grid grid-cols-1 gap-4 w-full lg:mt-10 lg:w-450 mx-auto lg:grid-cols-4 '>
                    {
                        HomeData.map((item, index) => <AppCard key={index} item={item}></AppCard>)
                    }
                </div>
            }
            <NavLink to='/apps'><button className=' mt-10 mb-7 lg:mb-0 px-7 py-2 mx-auto flex items-center btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</button></NavLink>
        </div>
    );
};

export default Home;