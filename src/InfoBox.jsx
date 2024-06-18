import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

//weather box se info aa rha jo rerender ke time display ho jiyaga
export default function InfoBox({info}) {
//   let info = {
//     city:"delhi",
//     feels_like: 35,
//     humidity: 32,
//     temp: 32,
//     temp_max: 32,
//     temp_min: 32,
//     weather: "Haze",
//   };
    let HOT_URL =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpaWLvPLedOdrIhv_24L9XxJHD-xV9kCv__Q&usqp=CAU";
    let COLD_URL =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb07vToNONtsse-EKm1rXrHSYPTMif94ijHg&usqp=CAU";
    let RAINY_URL =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuhaUhaDawho4beBTI8W0htIhu1CucBwoGw&usqp=CAU";
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          //nested if else (ternery form) to assign proper image url based on the weather data
          image={info.humidity>80 ? RAINY_URL : info.temp>15? HOT_URL:COLD_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity>80 ?  <ThunderstormIcon/> : info.temp>15? <WbSunnyIcon/>:<AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>feels_like = {info.feels_like}&deg;C</p>
            <p>humidity = {info.humidity}</p>
            <p>temp = {info.temp}&deg;C</p>
            <p>temp_max = {info.temp_max}&deg;C</p>
            <p>temp_min = {info.temp_min}&deg;C</p>
            <p>weather = <i>{info.weather}</i></p> 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
