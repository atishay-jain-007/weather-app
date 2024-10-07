import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BACKGROUNDCOLOR, weatherCodes } from '../../../constants/constants'
import HourlyCard from '../../Components/Hourlycomp/HourlyCard'
import { useContext } from 'react'
import { HomeScreenContext } from '../../../context/HomeScreenContext'

const HourlyMain = () => {
  const context = useContext(HomeScreenContext);
  const { weatherData } = context;

  const currentTime = new Date().getHours(); 
  const hourlyDataLength = weatherData?.hourly?.temperature_2m?.length;

  const weekDays=["Sunday","Monday","Tuesday","Wedday","Thrusday","Friday","Satday",]
  const hourlyData = weatherData?.hourly?.temperature_2m?.slice(currentTime, hourlyDataLength) || [];
  const baseDate:string|Date = weatherData?weatherData?.hourly?.time?.[currentTime]?.split('T')[0]:new Date();
  return (
    <ScrollView style={styles.main}>
      <View style={{ marginTop: 60,width:"100%",alignItems:"center" }}>
        <Text style={styles.heading}>Hourly Forecast</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.dcont}>
          
      <Text style={styles.Dates}>{weekDays[new Date().getDay()]} - { new Date().toLocaleDateString()}</Text>
        </View>
        {hourlyData.map((temp, index) => {
          const hour = (currentTime + index) % 24; 
          const weatherCode = weatherData?.hourly?.weather_code?.[hour]?.toString();;
          const dorn=hour>18||hour<6?'night':'day'
          const weatherImage = weatherCode ? weatherCodes?.[weatherCode]?.[dorn]?.image:undefined;
          const realFeel = weatherData?.hourly?.apparent_temperature?.[hour];
          const rain=weatherCode ? weatherData?.hourly?.rain?.[hour]:undefined
          // const date=weatherData?.hourly?.time[hour]
          const currentHourDate=new Date(baseDate);
          currentHourDate.setHours(currentHourDate.getHours() + index);
          console.log()
          return (
            <>
            <HourlyCard
              key={hour} 
              time={hour}
              temp={temp} 
              weatherImage={weatherImage} 
              realFeel={realFeel} 
              rain={rain}
              />
            {hour === 0 ? (
                <View style={styles.dcont}>

                            <Text style={styles.Dates}>{weekDays[currentHourDate.getDay()]} - { currentHourDate.toLocaleDateString()}</Text>
                </View>
                        ) : null}
              </>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default HourlyMain;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: BACKGROUNDCOLOR,
  },
  heading: {
    fontSize: 45,
    color: "white",
  },
  card: {
    alignItems: "center",
    height: "auto",
    gap:20
  },
  Dates:{
    textAlign:"left",
    fontSize: 20,
    color: "white",
  },
  dcont:{
    width:"100%",
    alignItems:"flex-start",
    padding:10,
    paddingLeft:22
  }
});
