import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css"
import { useState } from "react";

// prop hissab se weather box ka weather change wala function pass ho rha isse modify keke weatherBox component ko re render kr sakte hai
export default function SearchBox({updateWeather}){
    //needed state vars
    let [city,setCity]= useState("");
    let [found, setFound]= useState(false);

    //data required for using weather api
    let API_URL = "http://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "8b2c95a95de9c11c12a665989f7acb3d";

    //getting weather from the inbuilt geocoding api of open-weather and changin the weather formet to jason and return to the update weather function
    let getWeather= async ()=>{
      // try catch is used to handle the city which is not found by open weather api
      try{ 
        let res= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let resJson= await res.json();
      let weatherData = {
        city:city,
        feels_like:resJson.main.feels_like,
        humidity:resJson.main.humidity,
        temp:resJson.main.temp,
        temp_max:resJson.main.temp_max,
        temp_min:resJson.main.temp_min,
        weather:resJson.weather[0].main
      };
      console.log(weatherData);
      return weatherData;
      }
      catch(e){
        throw e;
      }
    }

    //traking city name
    let inputEvt=(evt)=>{
        setCity(evt.target.value);
    }

    //updating weather based on searched city
    let submitEvt= async (evt)=>{
        evt.preventDefault();
        console.log(city);
        try{
          let info= await getWeather();
          updateWeather(info);
          setFound(false);
        }
        catch(e){
          setFound(true);
        }
        setCity("");
    }   
    return (
      <div className="searchBox">
        <h3>Search your city</h3>
        {/* onSubmit event form pe lagta hai submit button pe nhi */}
        <form onSubmit={submitEvt}> 
          <TextField
            id="city"
            value={city}
            onChange={inputEvt}
            label="CITY NAME"
            variant="outlined"
          />
          <br />
          <br />
          <Button
            variant="outlined"
            color="success"
            size="large"
            type="submit"
            endIcon={<SendIcon />}
          >
            search
          </Button>
        </form>
        {/* warning for the cities not found */}
        {found && <p>This city doesn,t exist</p>}
      </div>
    );
}