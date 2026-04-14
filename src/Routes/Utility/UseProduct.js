import axios from "axios";
import { useEffect, useState } from "react";



const useProduct=()=>{

    const [Product,setProduct]=useState([]);
    const [Loading,setLoading]=useState(true);

    useEffect(()=>{
        axios('../../../public/Data/Data.json').then(data=>setProduct(data.data))
        .finally(()=>setLoading(false));
    },[])

    return {Product,Loading};
}

export default useProduct;