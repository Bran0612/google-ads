import React,{useEffect,useState} from 'react'
import axios from 'axios'
import GoogleAdCard  from './GoogleAdCard'

const GoogleAdCardList =()=>{
    const [data,setData]=useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/data.json');
            setData(response.data);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div>
                {data.map(card=>(
                    <GoogleAdCard />
                ))}
        </div>
    )
}

export default GoogleAdCardList