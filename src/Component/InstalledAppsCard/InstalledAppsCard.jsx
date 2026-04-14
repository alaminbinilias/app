import React from 'react';
import downloads from "../../Images/downloads.png"
import ratings from "../../Images/ratings.png"
import Delete from "../../Images/bin.png"
import { UpdateDataLs } from '../Utility/Utility';

const InstalledAppsCard = ({ App,setinstalledApps }) => {

    //console.log(App);
    const HandleDelete=()=>{
        //console.log("clicked");
        setinstalledApps(UpdateDataLs(App.id));
    }
    return (
        <div>
            <div className=' flex items-center justify-between mb-2 border-gray-300 bg-white rounded-lg hover:scale-103 transition ease-in-out'>

                <div className='flex gap-2 items-center'>
                    <div className='p-2'>
                        <img className='w-30 h-20 rounded-sm' src={App.image}></img>
                    </div>
                    <div className='flex-row'>
                        <p className='font-semibold text-2xl'>{App.title}</p>
                        <div className='flex items-center justify-center gap-3'>
                            <img className=' mt-2 w-5' src={downloads}></img>
                            <p className='mt-1 text-[1.2rem] font-semibold text-[#00D390]'>{App.download}</p>
                            <img className=' mt-2 w-5' src={ratings}></img>
                            <p className='mt-2 text-[1.2rem] font-semibold text-[#FF8811]'>{App.ratingAvg}</p>

                            <p className='font-medium text-gray-400 mt-2'>{App.size} MB</p>
                        </div>
                    </div>
                </div>
                <div onClick={HandleDelete} className='px-10 hidden lg:block'>
                    <p className='btn '>Uninstall<span><img className='w-4' src={Delete} alt="Not Found Apps" /></span></p>
                </div>
                <div className='px-4 cursor-pointer block lg:hidden'>
                    <span onClick={HandleDelete}><img className='w-5' src={Delete} alt="Not Found Apps" /></span>
                </div>

            </div>
        </div>
    );
};

export default InstalledAppsCard;