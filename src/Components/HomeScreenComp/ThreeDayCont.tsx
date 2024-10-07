import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { TEMPTEXT, weatherCodes } from '../../../constants/constants'
import { HomeScreenContext } from '../../../context/HomeScreenContext'
const ThreeDayCont = () => {
    const context = useContext(HomeScreenContext);


    const currentTime: 'day' | 'night' = new Date().getHours() < 18 ? 'day' : 'night';

    // console.log(currentTime)
    const { weatherData,setWeatherData } = context;
    let temp:Array<number|undefined>=[];
    let weather_code:Array<string|undefined>=[];
    let weatherCondition:Array<string|undefined>=[];
    let hours:Array<number>=[]
    let images:Array<string|undefined>=[];
    for(let i=3;i<=9;i+=3){
        hours.push((new Date().getHours()+i)%24)
        temp.push(weatherData?.hourly?.temperature_2m[new Date().getHours()+i])
        weather_code.push(weatherData?.hourly?.weather_code[new Date().getHours()+i]?.toString())
        const condition = weatherCodes[weather_code.length-1] ? weatherCodes[weather_code.length-1][new Date().getHours()+i < 18 ? 'day' : 'night'].description : "Unknown Condition";
                weatherCondition.push(condition);
        const image=weatherCodes[weather_code.length-1] ? weatherCodes[weather_code.length-1][new Date().getHours()+i < 18 ? 'day' : 'night'].image : "Unknown Condition"
        images.push(image);
    }
   
    console.log(weather_code)
    // const weather_code = weatherData?.current?.weather_code
    // const currentTime: 'day' | 'night' = new Date().getHours() > 18 ? 'night' : 'day';
    // const weatherCondition:string = weather_code && weatherCodes[weather_code] ? weatherCodes[weather_code][currentTime].description : "Unknown Condition";
    // let incre=3;
    // const weatherImage = weather_code && weatherCodes[weather_code] ? weatherCodes[weather_code].day.image : undefined;
  return (
    <View style={styles.main}>

{weatherCondition.map((condition, index) => (
                <View style={styles.internal} key={index}>
                    <Image style={styles.image} source={{uri:images[index]}}></Image>
                    <Text style={styles.temp}>{condition}</Text>
                    <Text style={styles.temp}>{temp[index]}℃</Text>
                    <Text style={styles.time}>{hours[index]>12?(hours[index]-12)+" PM":hours[index]+" AM"}</Text>
                </View>
            ))}
    </View>
  )
}

export default ThreeDayCont

const styles = StyleSheet.create({
    main:{
        flex:1,
        flexDirection:"row",
        gap:20
    },
    internal:{
        marginTop:30,
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        gap:5
    },
    time:{
        color:TEMPTEXT,
        fontSize:18
    },temp:{
        fontSize:18,
        color:"white",
        fontWeight:"bold"
    },
    image:{
     
        height:100,
        width:100
    
    }
})