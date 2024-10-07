import axios from "axios";
import { useContext } from "react";
import { HomeScreenContext } from "../context/HomeScreenContext";

const {location,setLocation}=useContext(HomeScreenContext)
export const GetHomeData = async () => {
    return await axios.get("https://api.open-meteo.com/v1/forecast?latitude=21.23333&longitude=81.63333&current=temperature_2m,precipitation,rain,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature,cloud_cover&hourly=temperature_2m,rain,weather_code,apparent_temperature&timezone=auto")
  }
