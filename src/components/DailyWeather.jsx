"use client"
import { useEffect, useState } from "react";
import SingleCity from "./SingleCity";
import { ArrowDown, ArrowUp } from "lucide-react";

const DailyWeather = ({ weatherData }) => {
    const [groupedData, setGroupedData] = useState({});
    const [showMoreState, setShowMoreState] = useState({});

    useEffect(() => {
        const groupedByDate = groupByDate(weatherData);
        setGroupedData(groupedByDate);
    }, [weatherData]);

    const groupByDate = (data) => {
        const grouped = {};
        data.forEach(item => {
            const date = item["dt_txt"].split(' ')[0];
            if (!grouped[date]) {
                grouped[date] = [];
            }
            grouped[date].push(item);
        });
        return grouped;
    };

    const toggleShowMore = (date) => {
        setShowMoreState(prevState => ({
            ...prevState,
            [date]: !prevState[date]
        }));
    };
    return (
        <div className="md:grid md:grid-cols-2 md:gap-1">
            {Object.keys(groupedData).map(date => (
                <div key={date}>
                    {groupedData[date].slice(0, 1).map((item, index) => (
                        <SingleCity key={index} item={item} />
                    ))}
                    {showMoreState[date] && groupedData[date].slice(1).map((item, index) => (
                        <SingleCity key={index} item={item} />
                    ))}
                    {groupedData[date].length > 1 && (
                        <div className="flex justify-center mt-2">
                            <button
                                className="bg-red-500 hover:bg-yellow-300 text-white font-bold py-1 px-2 rounded"
                                onClick={() => toggleShowMore(date)}
                            >
                                {showMoreState[date] ? <ArrowUp /> : <div className="flex"><ArrowDown />{date}</div>}
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DailyWeather;
