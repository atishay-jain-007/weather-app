import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import LocationContainer from '../../Components/HomeScreenComp/LocationContainer';
import { ImageBackground } from 'react-native';
import CenterWeather from '../../Components/HomeScreenComp/CenterWeather';
import { HomeScreenContext } from '../../../context/HomeScreenContext';
import ThreeDayCont from '../../Components/HomeScreenComp/ThreeDayCont';
import DailyStatsCard from '../../Components/HomeScreenComp/DailyStatsCard';
import GeminiContainer from '../../Components/HomeScreenComp/GeminiContainer';

const HomeScreen = () => {
 
  // console.log(weatherData)
  return (
    <ImageBackground 
      source={require('../../../assets/peakpx.jpg')} 
      style={styles.main}
      resizeMode="cover"
      blurRadius={10}
    >
      <ScrollView style={styles.locationCont}>
        <LocationContainer />
        <CenterWeather></CenterWeather>
        <ThreeDayCont></ThreeDayCont>
        <View style={{alignItems:"center",marginTop:20}}>
        <GeminiContainer></GeminiContainer>

        <DailyStatsCard></DailyStatsCard>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    height: '100%',
    width: '100%',
  },
  locationCont: {
    marginTop: 40,
  },
});
