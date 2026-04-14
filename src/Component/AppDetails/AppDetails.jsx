import React from 'react';
import { useParams } from 'react-router';
import useProduct from '../../Routes/Utility/UseProduct';
import AppPages from './AppPages/AppPages';

const AppDetails = () => {
    const {id}=useParams();
    //console.log(id);
    const convertId=parseInt(id);
    //console.log(convertId);
    const {Product}=useProduct();
    //console.log(Product);
    const convrtSpecificData=Product.filter(item=>item.id===convertId);
    //console.log(convrtSpecificData.title);
    return (
        <div>
            {
                convrtSpecificData.map(item=><AppPages key={item.id} item={item}></AppPages>)
            }
        </div>
    );
};

export default AppDetails;