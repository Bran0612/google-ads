import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleAdCard from "./GoogleAdCard";
import './GoogleAdCardList.css';

const GoogleAdCardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((card) => (
        <div className="cards-container">
        <GoogleAdCard
          key={card.advertiser_id}
          image={card.ad_url}
          name={card.advertiser_name}
          impressions={card.impressions}
          startDate={card.date_range_start}
          endDate={card.date_range_end}
          days={card.num_of_days}
          spendStart={card.spend_range_min_usd}
          spendEnd={card.spend_range_max_usd}
        />
        </div>
      ))}
        {data.map(item =>{
          return <div>{item.advertiser_name}</div>
        })}

    </div>
  );
};

export default GoogleAdCardList;
