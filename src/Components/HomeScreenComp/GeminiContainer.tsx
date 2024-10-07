import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ChatSession } from "@google/generative-ai";
import { chatSession } from '../../../Config/AI-Config';
import moment from 'moment';
import { HomeScreenContext } from '../../../context/HomeScreenContext';
import { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BACKGROUNDCOLOR } from '../../../constants/constants';
const GeminiContainer = () => {
  const context = useContext(HomeScreenContext);


    
  interface gem{
    summary:string
  }
    // console.log(currentTime)
    const { weatherData,setWeatherData } = context;
    const [gemRes, setGemRes] = useState<gem | null>(null);

  const date=moment().format(" Do MMM YYYY");
  const time=new Date().getHours();
  const gemini =async()=>{
    const result = await chatSession.sendMessage(prompt);
    setGemRes(JSON.parse(result.response.text()))
   console.log( gemRes)
    // console.log(result.response.text())
  }
    const prompt=`based on the weather condition in the paragraph below give me a overall paragraph look ahead based on this this weather condition in a summary way and make it shorter without mentioning the numbers and already provided info and date
    
    As of ${date} and ${time}hrs, the temperature at 2 meters above ground is ${weatherData?.current?.temperature_2m}°C, with a relative humidity of ${weatherData?.current?.relative_humidity_2m}%. The apparent temperature, or how it feels outside, is ${weatherData?.current?.apparent_temperature}°C . The precipitation or rain recorded (${weatherData?.current?.rain} mm), and wind speed at ${weatherData?.current?.wind_speed_10m} km/h . The cloud cover is at ${weatherData?.current?.cloud_cover}%, . The weather is classified by a weather code of ${weatherData?.current?.weather_code} according to the WMO scale.`
    useEffect(()=>{
      if (
        weatherData &&
        weatherData.current &&
        typeof weatherData.current.relative_humidity_2m !== 'undefined' &&
        typeof weatherData.current.temperature_2m !== 'undefined' &&
        typeof weatherData.current.apparent_temperature !== 'undefined' &&
        typeof weatherData.current.rain !== 'undefined' &&
        typeof weatherData.current.wind_speed_10m !== 'undefined' &&
        typeof weatherData.current.cloud_cover !== 'undefined' &&
        typeof weatherData.current.weather_code !== 'undefined'
    ) {
        gemini()
    }
    },[weatherData])
   
  return (
    <LinearGradient
    colors={['rgb(36, 45, 57)', 'rgb(16, 37, 60)', 'rgb(0, 0, 0)']}
    start={{ x: 0, y: 0.5 }} 
    end={{ x: 1, y: 0.2 }}    
    locations={[0.112, 0.512, 0.986]}  
      style={styles.main}
    >
      <Text style={styles.heading}>Gemini's Look Ahead for Today</Text>
      <View style={styles.seperatorTop}></View>
      <Text style={styles.summary}>{gemRes ? gemRes.summary : ""}</Text>

    </LinearGradient>
  )
}

export default GeminiContainer

const styles = StyleSheet.create({
  main:{
    flexDirection:"column",
    padding:10,
    height:"auto",
    width:"90%",
    backgroundColor:BACKGROUNDCOLOR,
    borderRadius:10,
      marginBottom:20
    // justifyContent:"center"
},
  heading:{
    fontSize:23,
    fontWeight:"bold",
    color:"white",
    textAlign:"center"
  },
  summary:{
    fontSize:17,
    // fontWeight:"bold",
    textAlign:"center",
    color:"white",
   
  },
  seperatorTop:{
    width:"100%",
    marginTop:5,
    marginBottom:10,
    borderColor:"white",
    borderWidth:0.5,
    opacity:0.7
  }
})