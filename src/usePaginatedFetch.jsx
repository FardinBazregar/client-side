import { useState } from "react"

const UsePaginatedFetch = (url,pageSize)=>{
    const [loading , setLoading] = useState(true);
    const [data,setData] = useState([]);



    const getData = async ()=>{
        const response = await fetch (url);
        const data = await response.json();
    }


    
return (
    <div></div>
)
}
export default UsePaginatedFetch