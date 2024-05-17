import { useEffect, useState } from "react"
import _ from "lodash";
const UsePaginatedFetch = (url,pageSize)=>{
    const [loading , setLoading] = useState(true);
    const [data,setData] = useState([]);



    const getData = async ()=>{
        const response = await fetch (url);
        const data = await response.json();
        const pagientedData = _.chunk(data , pageSize)

        console.log(pagientedData)
        setData(pagientedData)
        setLoading(false)
    }

useEffect(() => {
getData()

}, [])
return [loading , data];
};
export default UsePaginatedFetch