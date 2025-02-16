"use client"

import { ArrowDownCircle, ArrowUpCircle, MoveDownIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SingleCity = ({ item }) => {

    const [showDetail,setShowDetail] = useState(false)

    return (
        <div className="bg-slate-600 text-white rounded-lg shadow-md mb-1">        
            <div>
                <div className="flex justify-around">
                <div className="p-2 mt-3 font-semibold md:text-lg text-md">{item["dt_txt"]}</div>
                <div className="p-2"><Image alt="weather icon" width='50' height='50' src={`https://openweathermap.org/img/wn/${item["weather"][0]["icon"]}@2x.png`} /></div>
                <button className="animate-pulse hover:text-red-400" onClick={()=>setShowDetail(!showDetail)}>{showDetail == false ? <ArrowDownCircle /> : <ArrowUpCircle />}</button>
            </div>
            {showDetail == true && <div>
            <div className="md:p-4 p-2 font-semibold text-justify">The weather is {item["weather"][0]["description"]}. The Minimum temperature is {item["main"]["temp_min"]}&deg;C, 
                the Maximum temperature {item["main"]["temp_max"]}&deg;C. The humidity level is {item["main"]["humidity"]}/100.
            </div>
            </div>}
            </div>
        </div>
    );
};

export default SingleCity