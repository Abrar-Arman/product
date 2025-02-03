import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    async function fetchData(){
        try{
            const res =await axios.get(url);
            console.log(res)
            setData(res);
            setError(null);
        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false);
        }
           
    }
    useEffect(()=>{
        fetchData();
    },[])
 return  {data,error,loading}
}