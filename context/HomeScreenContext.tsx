import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
// import { GetHomeData } from "../apis/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AxiosResponse } from "axios";
import axios from "axios";
export type WeatherDataObj = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    weather_code: number;
    rain: number;
    precipitation: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    cloud_cover: number;
    //   "time": "2024-10-04T12:45",
    //   "interval": 900,
    //   "temperature_2m": 29.7,
    //   "precipitation": 0.00,
    //   "rain": 0.00,
    //   "weather_code": 2,
    //   "wind_speed_10m": 4.3
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    rain: string;
    apparent_temperature: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    rain: number[];
    weather_code: number[];
    apparent_temperature: number[];
  };
};
type Location = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id?: number;
  admin3_id?: number;
  admin4_id?: number;
  timezone: string;
  population: number;
  country_id: number;
  country: string;
  admin1: string;
  admin2?: string;
  admin3?: string;
  admin4?: string;
};

export type LocationResponse = {
  results?: Location[];
  generationtime_ms: number;
};
export type SelectedLocation = {
  location: string;
};
export type latAndLong = {
  latitude: number;
  longitude: number;
};
export type cityandState={
  city:string;
  state:string;
}
export interface HomeScreenContextInterface {
  weatherData?: WeatherDataObj;
  setWeatherData: Dispatch<SetStateAction<WeatherDataObj | undefined>>;
  location: latAndLong; 
  setLocation: Dispatch<SetStateAction<latAndLong>>; 
  locationlocal:cityandState
   setLocationlocal:Dispatch<SetStateAction<cityandState>>
}
// export interface LocationContextInterface {
//     location:string,
//     setLocation:Dispatch<SetStateAction<string| undefined>>
// }
export const HomeScreenContext = createContext<
  Partial<HomeScreenContextInterface>
>({});

type HomeProviderProps = {
  children: ReactNode;
};

export default function HomeScreenContextProvider({
  children,
}: HomeProviderProps) {
  const [weatherData, setWeatherData] = useState<WeatherDataObj | undefined>(
    undefined
  );
  const [location, setLocation] = useState<latAndLong>({
    latitude: 21.23333,
    longitude: 81.63333,
  });
  const [locationlocal,setLocationlocal]=useState<cityandState>({
    city:"Raipur",
    state:"Chhattisgarh"
  })
  // useEffect(() => {
  //   const loadFromStorage = async () => {
  //     try {
  //       const storedLatitude = await AsyncStorage.getItem('latitude');
  //       const storedLongitude = await AsyncStorage.getItem('longitude');
  //       const storedCity = await AsyncStorage.getItem('city');
  //       const storedState = await AsyncStorage.getItem('state');
  //         console.log(storedLatitude)
  //       if (storedLatitude && storedLongitude) {
  //         setLocation({
  //           latitude: parseFloat(storedLatitude),
  //           longitude: parseFloat(storedLongitude),
  //         });
  //       }

  //       if (storedCity && storedState) {
  //         setLocationlocal({
  //           city: storedCity,
  //           state: storedState,
  //         });
  //       }
  //     } catch (e) {
  //       console.error('Failed to load data from AsyncStorage:', e);
  //     }
  //   };

  //   loadFromStorage();
  // }, []);
  const GetHomeData = async () => {
    return await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,precipitation,rain,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature,cloud_cover&hourly=temperature_2m,rain,weather_code,apparent_temperature&timezone=auto`
    );
  };
  useEffect(() => {
    async function fetcher() {
      const response: AxiosResponse<WeatherDataObj> = await GetHomeData();
      const data: WeatherDataObj = response.data;
      setWeatherData(data);
    }
    console.log(location)
    AsyncStorage.setItem('latitude',`${location.latitude}` );
    AsyncStorage.setItem('longitude',`${location.longitude}` );
    AsyncStorage.setItem('city',`${locationlocal.city}` );
    AsyncStorage.setItem('state',`${locationlocal.state}` );
    fetcher();
  }, [location]);
  return (
    <HomeScreenContext.Provider
      value={{ weatherData, setWeatherData, location, setLocation ,locationlocal,setLocationlocal}}
    >
      {children}
    </HomeScreenContext.Provider>
  );
}
