import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BACKGROUNDCOLOR, TEMPTEXT } from '../../../constants/constants'
import { LinearGradient } from 'expo-linear-gradient'
import { useContext } from 'react'
import { HomeScreenContext } from '../../../context/HomeScreenContext'
const DailyStatsCard = () => {
    const context = useContext(HomeScreenContext);


    

    // console.log(currentTime)
    const { weatherData,setWeatherData } = context;
    console.log(weatherData?.current)
  return (
    <LinearGradient
      colors={['rgb(50, 50, 50)', 'rgb(0, 0, 0)']}
      start={{ x: 0.241, y: 0.688 }}  
      end={{ x: 1, y: 1 }}           
      locations={[0, 0.994]}          
      style={styles.main}
    >
      <Text style={styles.text}>Current Conditions</Text>
      <View style={styles.seperatorTop}></View>
      <View style={styles.tabular}>
        <View style={{flexDirection:"column",width:"100%",gap:10}}>
        <>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>

        <Text style={styles.entries}>
            Temperature
        </Text>
        <Text style={styles.entries}>
            {weatherData?.current?.temperature_2m}℃
        </Text>
        </View>
        <View style={styles.seperator}></View>
        </>
        <>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>

        <Text style={styles.entries}>
            Real Feel
        </Text>
        <Text style={styles.entries}>
            {weatherData?.current?.apparent_temperature}℃
        </Text>
        </View>
        <View style={styles.seperator}></View>
        </>
        <>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>

        <Text style={styles.entries}>
            Rain
        </Text>
        <Text style={styles.entries}>
            {weatherData?.current?.rain} mm
        </Text>
        </View>
        <View style={styles.seperator}></View>
        </>
        <>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>

        <Text style={styles.entries}>
            Wind
        </Text>
        <Text style={styles.entries}>
            {weatherData?.current?.wind_speed_10m} km/h
        </Text>
        </View>
        <View style={styles.seperator}></View>
        </>
        <>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>

        <Text style={styles.entries}>
            Humidity
        </Text>
        <Text style={styles.entries}>
            {weatherData?.current?.relative_humidity_2m} %
        </Text>
        </View>
        <View style={styles.seperator}></View>
        </>
        <>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>

        <Text style={styles.entries}>
            Cloud Cover
        </Text>
        <Text style={styles.entries}>
            {weatherData?.current?.cloud_cover} %
        </Text>
        </View>
        <View style={styles.seperator}></View>
        </>
       
        
        </View>
        
      </View>
    </LinearGradient>
  )
}

export default DailyStatsCard

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
    text:{
        color:"white",
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"
    },
    tabular:{
        marginTop:10,width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    seperator:{
        width:"100%",
        marginTop:-8,
        borderColor:"white",
        borderWidth:0.5,
        opacity:0.4,
        marginBottom:10
    },
    entries:{
fontWeight:"bold",color:"white",
fontSize:18
    },
    seperatorTop:{
      width:"100%",
      marginTop:5,
      marginBottom:20,
      borderColor:"white",
      borderWidth:0.5,
      opacity:0.7
    }
    
})