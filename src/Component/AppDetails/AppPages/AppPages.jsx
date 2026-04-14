import downloads from "../../../Images/downloads.png"
import rating from "../../../Images/ratings.png"
import like from "../../../Images/likes.png"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import SetDataLs, { getDataLs } from "../../Utility/Utility";
import Swal from "sweetalert2";
import { Slide, toast, ToastContainer } from "react-toastify";
const AppPages = ({ item }) => {

    let istrue = false;
    (() => {
        const LsData = getDataLs();
        istrue = LsData.some(itm => itm.id === item.id);
        //console.log(istrue);
    })();

    const HandleInstallBtn = () => {

        const LsData = getDataLs();
        const trueValue = LsData.some(itm => itm.id === item.id);
        //console.log(trueValue);

        //AlrtSection

        trueValue === false && Swal.fire({
            title: "Installed",
            text: `${item.title} App is now installed`,
            icon: "success"
        });
        //AlrtSection
        const alrt = SetDataLs(item);
        document.getElementById('installBtn').innerText = "Installed";

        //alrt

        {
            alrt === -1 && toast.info('Your Apps Already Installed', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
        }

    }


    const ratingData = item.ratings;
    //console.log(ratingData);

    let cnvrtData = [];
    for (let i = ratingData.length - 1; i >= 0; --i) {
        cnvrtData.push(ratingData[i]);
    }
    //console.log(cnvrtData);

    return (
        <div>

            <div className='w-[calc(100%-10px)] mx-auto lg:mx-auto lg:w-450  mt-10'>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition={Slide}
                />
                <div className='h-65 flex gap-2 lg:gap-7'>
                    <div className='overflow-hidden object-cover'>
                        <img className=' w-90 h-63 rounded-[0.7rem]' src={item.image}></img>
                    </div>
                    <div className='w-full'>
                        <p className='font-bold text-3xl mb-1 mt-2'>{item.title}</p>
                        <p><span className='text-gray-400'>Devoloped by</span> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold cursor-pointer'>{item.companyName}</span></p>
                        <p className='border-b border-gray-300 pt-2'></p>
                        <div className='flex gap-3 lg:gap-10 mt-2'>
                            <div className='mt-4 w-30'>
                                <img className='flex w-7 ml-1' src={downloads}></img>
                                <p className='font-light text-gray-500 mt-1'>Downloads</p>
                                <p className='font-bold text-[1.5rem] -mt-1'>{item.download}</p>
                            </div>
                            <div className='mt-4 w-30'>
                                <img className='flex w-7 ml-1' src={rating}></img>
                                <p className='font-light text-gray-500 mt-1'>Average Ratings</p>
                                <p className='font-bold text-[1.5rem] -mt-1'>{item.ratingAvg}</p>
                            </div>
                            <div className='hidden lg:block mt-4 w-30'>
                                <img className='flex w-7 ml-1' src={like}></img>
                                <p className='font-light text-gray-500 mt-1'>Total Reviews</p>
                                <p className='font-bold text-[1.5rem] -mt-1'>{item.download}</p>
                            </div>
                        </div>
                        <button id="installBtn" onClick={HandleInstallBtn} className=' mt-4 text-[1rem] py-5 text-white btn bg-[#00d491]'>{istrue === false ? <p>Install Now ({item.size} MB)</p> : <p>Installed</p>}</button>
                    </div>
                </div>
                <p className='border-b border-gray-300 pt-2'></p>

                {/* CharSection Start */}

                <p className='mt-10 font-bold font-mono text-2xl ml-5 lg:ml-0'>Ratings</p>

                <div className='h-100 w-full mt-10 -mb-10 px-3'>
                    <ResponsiveContainer width='100%' height={300}>
                        <BarChart layout='vertical' data={cnvrtData}>
                            <XAxis type=''></XAxis>
                            <YAxis dataKey="name"
                                type="category"
                                tick={{ fontSize: 15, fontWeight: "bold" }} />
                            <Tooltip wrapperStyle={{ width: '10rem', backgroundColor: '#ccc' }} />
                            <Bar dataKey="count" fill="#8CC7C4" barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* CharSection End */}

                {/* Description Start */}

                <div className='mx-2 lg:mx-0'>
                    <p className='font-semibold font-mono mb-2 text-2xl'>Description</p>
                    <p className='text-wrap text-justify text-[1.2rem] text-gray-500 leading-8 '>{item.description}</p>
                </div>

                {/* Description End */}
            </div>
        </div>
    );
};

export default AppPages;