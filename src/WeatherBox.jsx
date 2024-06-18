import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherBox(){
    //state variable for storing weather info
    let [weather, setWeather] = useState({
      city: "delhi",
      feels_like: 35,
      humidity: 32,
      temp: 32,
      temp_max: 32,
      temp_min: 32,
      weather: "Haze",
    });

    //updating weather info
    let updateWeather=(info)=>{
        setWeather(info);
    }

    return(
        <div>
            <SearchBox updateWeather={updateWeather}></SearchBox>
            <InfoBox info={weather}></InfoBox>
        </div>
    )
}