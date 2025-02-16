import DailyWeather from "@/components/DailyWeather"
import { BaseURL } from "@/components/general/Baseurl"
import SingleCity from '@/components/SingleCity'
async function getData(name){
    const res = await fetch(`${BaseURL}/search/${name}`)
    return res.json()    
}

export async function generateMetadata({params}) {
    const name = (await params).name
    return{
        title:`Five days weather of ${name}`,
        description:`This is weather of ${name} in five days! This is simple weather app make by Flask and Next JS!`
    }
}

const Page = async({params}) => {
    const {name} = await params;
    const data = await getData(name);

    
    return(
        <div className='text-white md:w-[80%] md:ml-[10%] w-[95%] ml-[2.5%]'>
            <div className='flex justify-between'>
                <div className="md:text-xl text-lg font-semibold mb-2">{data.city}, {data.country}</div>
            </div>

            <DailyWeather weatherData={data["data"]["list"]} />
        </div>
    )
}

export default Page