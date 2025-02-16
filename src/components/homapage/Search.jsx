"use client"
import { useState } from "react";
import { BaseURL } from "../general/Baseurl";

const Search = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value.length > 2) {
            try {
                const res = await fetch(`${BaseURL}/search/${e.target.value}`);
                const data = await res.json();
                if (data.city) {
                    setSearchResults([{'city': data.city,'country':data.country}]);
                } else {
                    setSearchResults([]); 
                }
            } catch (error) {
                console.error("Error fetching search results:", error);
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div>
            <div className="font-bold md:text-lg text-white text-md text-center md:mb-4 mb-2">Search Your City Weather</div>
            <input 
                type="text" 
                className="border p-2 rounded md:w-[60%] md:ml-[20%] w-[90%] ml-[5%] mb-8" 
                placeholder="City Name ..." 
                value={query} 
                onChange={handleSearch} 
            />
            {searchResults.length > 0 && (
                <div className="shadow-md bg-white md:w-[60%] md:ml-[20%] w-[90%] ml-[5%] mb-8">
                    {searchResults.map((city, index) => (
                        <div key={index} className="p-2 border-b">
                            <a href={`/city/${city["city"]}`}>{city["city"]+ ', '+city["country"]}</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Search;
