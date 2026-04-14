import React from 'react';
import download from "../../Images/Group.png"
import rating from "../../Images/rating.png"
import { NavLink } from 'react-router';
const AppCard = ({item}) => {
    return (
        <div>

            {/* CardSection Start */}

            <NavLink to={`/appDeatails/${item.id}`}><div className=" card bg-base-100 mx-4 lg:mx-0 border border-gray-300 h-90 shadow-sm hover: cursor-pointer hover:scale-104 transition ease-in-out">
                <figure className='h-55 overflow-hidden'>
                    <img className='w-full object-cover' src={item.image} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title px-0 text-2xl">
                        {item.title}
                    </h2>
                    <div className="card-actions justify-between mt-6 ">
                        <div className="badge text-[1.2rem] font-semibold bg-[#f1f5e9] py-4 text-center px-2 text-[#00d491]"><span><img  className='w-4' src={download} alt="download logo" /></span>{item.download}</div>
                        <div className="badge text-[1.2rem] font-semibold bg-[#fff0e0] py-4 text-center px-2 text-[#ff8812]"><span><img  className='w-4' src={rating} alt="download logo" /></span>{item.ratingAvg}</div>
                    </div>
                </div>
            </div></NavLink>

            {/* CardSection End */}

        </div>
    );
};

export default AppCard;