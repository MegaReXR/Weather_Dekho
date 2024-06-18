import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './SearchBox'
import WeatherBox from './WeatherBox'

//importing react components
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";

function App() {

  return (
    <>
      {/* <SearchBox></SearchBox> */}
      <WeatherBox></WeatherBox>
    </>
  );
}

export default App
