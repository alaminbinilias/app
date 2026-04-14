import React, { useState } from 'react';
import { getDataLs } from '../Utility/Utility';
import InstalledAppsCard from '../InstalledAppsCard/InstalledAppsCard';
import InstalledAppsNotFound from '../InstalledAppsNotFound/InstalledAppsNotFound';
import useProduct from '../../Routes/Utility/UseProduct';
import { CirclesWithBar } from 'react-loader-spinner';


const InstalledApps = () => {
    const { Product, Loading } = useProduct();
    const [installedApps, setinstalledApps] = useState(getDataLs());
    const [sortData, setsortData] = useState('');

    //Handle Install Btn
    const HandleSortBtn = (vlue) => {
        //console.log(vlue);
        if (vlue === 'low') {
            //console.log("Low Sort");
            const lowData = [...installedApps.sort((a, b) => a.downloads - b.downloads)];
            //console.log(lowData);
            return setinstalledApps(lowData);
        }
        else if (vlue === 'high') {
            const highData = [...installedApps.sort((a, b) => b.downloads - a.downloads)];
            return setinstalledApps(highData);
        }
        else {
            setinstalledApps([...getDataLs()])
        }
    }
    //console.log(installedApps);
    return (
        <div className=' w-full lg:w-450 px-3 lg:mx-auto '>
            <div className='text-center mt-10 lg:mt-15'>
                <p className='font-bold font-mono text-2xl lg:text-4xl'>Your Installed Apps</p>
                <p className='mt-3 font-mono text-md lg:text-[1.5rem] text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='mt-12 flex justify-between'>
                <div>
                    <p className='font-semibold text-xl lg:text-2xl'>{installedApps.length} Apps Found</p>
                </div>
                {/* Sort Function Start */}
                <div>
                    <select value={sortData} onChange={e => { setsortData(e.target.value); HandleSortBtn(e.target.value) }} className='px-5 lg:px-7 border-gray-300 py-2 bg-gray-200 font-medium'>
                        <option value='none' className='font-medium'>Sort By Size</option>
                        <option value='low' onClick={() => HandleSortBtn(sortData)} className='font-medium'>Low -&gt; High</option>
                        <option value='high' className='font-medium'>High -&gt; Low</option>
                    </select>
                </div>
                {/* Sort Function End */}


            </div>

            {/* Installed Apps start */}
            {

            }

            {
                installedApps.length === 0 ? <InstalledAppsNotFound></InstalledAppsNotFound> :

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
                    </div> : <div className=' mt-6 lg:mt-10'>
                        {
                            installedApps.map(App => <InstalledAppsCard setinstalledApps={setinstalledApps} key={App.id} App={App}></InstalledAppsCard>)
                        }
                    </div>
            }

            {/* Installed Apps End */}
        </div>
    );
};

export default InstalledApps;