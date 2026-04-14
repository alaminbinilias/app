export const getDataLs = () => {
    const GetLocalStorage = localStorage.getItem("InstalledApps");
    if (GetLocalStorage) {
        return JSON.parse(GetLocalStorage);
    }
    else {
        return [];
    }
}


const SetDataLs = (itm) => {
    //console.log(itm);
    const GetLsData = getDataLs();
    //console.log(GetLsData);
    const existsData = GetLsData.find(item => item.id === itm.id);
    //console.log(existsData);
    if (existsData) {
        return -1;
    }
    else {
        GetLsData.push(itm);
        localStorage.setItem('InstalledApps', JSON.stringify(GetLsData));
    }
}

export const UpdateDataLs = (id) => {
    const LsData = getDataLs();
    //console.log(LsData);
    if (LsData) {
        const filterData = LsData.filter(item => item.id !== id);
        localStorage.setItem('InstalledApps', JSON.stringify(filterData));
        return filterData;
    }
    else{
        return [];
    }
}

export default SetDataLs;