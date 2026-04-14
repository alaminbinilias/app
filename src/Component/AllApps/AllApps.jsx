import React, { useState } from 'react';
import useProduct from '../../Routes/Utility/UseProduct';
import AppCard from '../AppCard/AppCard';
import NotFoundApp from '../NotFoundApp/NotFoundApp';
import { CirclesWithBar } from 'react-loader-spinner';

const AllApps = () => {
    const { Product, Loading } = useProduct();
    //console.log(Product);
    const [ProductName, setProductName] = useState('');
    //console.log(ProductName);

    const HandleChange = (e) => {
        //console.log(e.target.value);
        //setProductName(e.target.value);
        //setProductName(Product);
        const vlue = e.target.value;
        //console.log(vlue);
        setProductName(vlue);
    }
    //console.log(ProductName);

    let convrtvlue = ProductName.trim().toLowerCase().split(" ").join("");
    //console.log(convrtvlue);

    const filterData = Product.filter(item => item.title.toLowerCase().trim().split(" ").join("").includes(convrtvlue));
    //console.log(filterData);
    //setProductName(filterData);

    return (
        <div>
            <div className='text-center mt-12 mx-3 lg:mx-0'>
                <p className='font-bold text-3xl font-mono'>Our All Applications</p>
                <p className='mt-3 font-mono text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>

                <div className='flex items-center justify-between w-full lg:w-445 mx-auto mt-10 mb-10 lg:mb-0'>
                    <p className='font-semibold text-xl lg:text-2xl'>({filterData.length}) Apps Found</p>

                    <label defaultValue={Product} onChange={HandleChange} className="input w-50 lg:w-75">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>

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
                    </div> : <div>
                        {
                            filterData.length === 0 ? <NotFoundApp></NotFoundApp> : <div className='w-full lg:w-445 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5'>{filterData.map((item, index) => <AppCard key={index} item={item}></AppCard>)}</div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default AllApps;