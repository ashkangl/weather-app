const { default: City } = require("./City")

const AllCities = () => {

    const Cities  = [
        {name:'London', imageUrl:'https://wallpapers.com/images/hd/dawn-at-london-bridge-1tr6j3wchgjnqw1t.webp'},
        {name:'New York',imageUrl:'https://wallpapers.com/images/high/brooklyn-bridge-in-new-york-city-a0ydl4ai6llbnbx7.webp'},
        {name:'Singapore',imageUrl:'https://wallpapers.com/images/high/singapore-s-marina-bay-sands-oui0f1ww5nmqlyb8.webp'},
        {name:'Tokyo',imageUrl:'https://wallpapers.com/images/featured/tokyo-dxva6ho3h8x6m3xb.jpg'},
        {name:'Istanbul',imageUrl:'https://wallpapers.com/images/high/istanbul-and-its-ethereal-beauty-rs1t859mkh35p93o.webp'},
        {name:'Los Angeles',imageUrl:'https://wallpapers.com/images/hd/los-angeles-city-downtown-sunset-tijds4lt4zvzuqlk.webp'},
        {name:'Paris',imageUrl:'https://wallpapers.com/images/hd/clouds-parade-in-paris-zy4x2ow5p7j5qi4a.webp'},
        {name:'Dubai', imageUrl: 'https://wallpapers.com/images/high/dubai-city-s-heart-51qjw1mjxzte69jg.webp'}
    ]
    return(
        <div className="grid md:grid-cols-4 grid-cols-2 md:w-[90%] md:ml-[5%] w-[95%] ml-[2.5%] gap-2 justify-center">
        {Cities.map((city)=>(
            <City key={city.name} name={city.name} imageUrl={city.imageUrl} />
        ))}
        </div>
    )
}

export default AllCities