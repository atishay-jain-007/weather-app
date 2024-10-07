import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { HomeScreenContext } from '../../../context/HomeScreenContext';
import { useContext } from 'react';
import { weatherCodes } from '../../../constants/constants';
const CenterWeather = () => {
    const context = useContext(HomeScreenContext);



    const { weatherData,setWeatherData } = context;
    const {location}=useContext(HomeScreenContext)
    console.log(location)
    const temp=weatherData?.current?.temperature_2m||0
    const weather_code = weatherData?.current?.weather_code?.toString();
    const currentTime: 'day' | 'night' = new Date().getHours() < 18 ? 'day' : 'night';
    const weatherCondition:string = weather_code && weatherCodes[weather_code] ? weatherCodes[weather_code][currentTime].description : "Unknown Condition";
    const weatherImage = weather_code && weatherCodes[weather_code] ? weatherCodes[weather_code][currentTime].image : undefined;
    // console.log(weatherCodes[weather_code][currentTime].description)
  return (
    <View style={styles.main}>
    <Image source={{ uri: weatherImage }} style={styles.img} />

        <Text style={styles.heading}>{weatherCondition}</Text>
        <Text style={styles.temp}>{temp}℃</Text>
    </View>
  )
}

export default CenterWeather

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
        gap:10
    },
    img:{
        height:300,
        width:300
    },
    heading:{
        fontSize:25,
        color:"white"
    },
    temp:{
        fontSize:55,
        color:"white"
    }
})