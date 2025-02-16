import { BaseURL } from "@/components/general/Baseurl"
import useFetch from "../useFetch"
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Loading from "../Loading";
const City = ({ name , imageUrl }) => {

    const {data, error, loading} = useFetch(`${BaseURL}/city/${name}`)

    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;


    return(
        <div className="bg-slate-600 text-white rounded-lg shadow-md hover:-translate-y-1.5 duration-200">
            <div className="text-center p-2 md:text-lg text-md font-['myfont']">{data.city}</div>
            <Image src={imageUrl} alt={name} width={300} height={200} className="md:max-h-36 shadow-md max-h-24"/>
            <div className="font-semibold px-2 py-1">Current Weather: {data.weather}</div>
            <div className="font-semibold px-2 py-1">Temprature Average: {data.temp_avg}</div>
            {data.weather_id == 800 ?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/8c587657-36af-442a-927f-90b7af4893ab/J4ZjvqbM6Z.json" loop autoplay/>
            : data.weather_id == 801?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/69d9a231-befa-465d-a038-9b1e9b4701b2/dQPNDUmXD3.json" loop autoplay/>
            : data.weather_id == 802 || data.weather_id == 803 || data.weather_id == 804 ?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/30adcdc4-4707-4ebb-b23e-d4828a5dcab8/9B6wgMiYHk.json" loop autoplay/>
            : data.weather_id == 600 || data.weather_id == 601 || data.weather_id == 602 || data.weather_id == 611 || data.weather_id == 612 || data.weather_id == 613?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/57838521-571f-45ef-aaf9-63c8adedbb41/OUsfK4oECF.json" loop autoplay/>
            : data.weather_id == 500?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/a349a4ce-7e0a-4032-8582-9627795574d3/v6AZXGDJ23.json" loop autoplay/>
            : data.weather_id == 501 || data.weather_id == 502 || data.weather_id == 503 || data.weather_id == 504 || data.weather_id == 511 || data.weather_id == 520 || data.weather_id == 521 || data.weather_id == 522 || data.weather_id == 531?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/57838521-571f-45ef-aaf9-63c8adedbb41/OUsfK4oECF.json" loop autoplay/>
            : data.weather_id == 701 || data.weather_id == 721 ?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/dd93cab7-532a-487f-b7d0-d87028c4b72d/v1mB8sU9Bm.json" loop autoplay/>
            : data.weather_id == 741 ?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/240102dd-2488-416e-8ed2-e2c100aa264e/qGxc1l9iAy.json" loop autoplay/>
            : data.weather_id == 200 || data.weather_id == 201 || data.weather_id == 202 || data.weather_id == 230 || data.weather_id == 231 || data.weather_id == 232?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/c131c7c0-e1a7-46cd-bd30-924b191bf6e7/p7hggBjBaX.json" loop autoplay/>
            : data.weather_id == 210 || data.weather_id == 211 || data.weather_id == 212 || data.weather_id == 221?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/1a942a2f-3577-4380-b349-2986cb35d8d1/UbAsFs6fwa.json" loop autoplay/>
            : data.weather_id == 300 || data.weather_id == 301 || data.weather_id == 302 || data.weather_id == 310 || data.weather_id == 311 || data.weather_id == 312 || data.weather_id == 313 || data.weather_id == 314 || data.weather_id == 321?
            <DotLottieReact className="justify-center w-[60%] ml-[20%]" src="https://lottie.host/9c9b9d2a-30f1-4d40-849e-2f93effc7087/uoLWCTucJg.json" loop autoplay/>
            : null
        }
        </div>
    )
}

export default City