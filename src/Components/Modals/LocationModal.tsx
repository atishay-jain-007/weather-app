import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { BACKGROUNDCOLOR } from '../../../constants/constants';
import { HomeScreenContext } from '../../../context/HomeScreenContext';
import axios from "axios";
import { ToastAndroid } from 'react-native';
type LocationModalProps = {
  setLocationVisis: (value: boolean) => void;
 
};

const LocationModal:React.FC<LocationModalProps>  = ({ setLocationVisis }) => {
  const {location,setLocation}=useContext(HomeScreenContext)
  const {locationlocal,setLocationlocal}=useContext(HomeScreenContext)
  const [locHere,setLocHere]=useState(locationlocal?locationlocal.city:"")
  // type cAndCo={
  //   city:string,
  //   state:string
  // }
  // const [locationlocal, setLocationlocal] = useState<cAndCo>({city:"Raipur",state:"Chhattisgarh"});
  const handlePress = async () => {
    // const locationlocal = lo; 
  
    // console.log(locationlocal)
    const GetGeoLocation = async () => {
      try {
        const response = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${locHere}&count=10&language=en&format=json`
        );
        // console.log(response.data.length())
        return response.data; 
      } catch (error) {
        console.error('Error fetching geo-location:', error);
        return null;
      }
    };
  
  
    const data = await GetGeoLocation();
  
    if(data.results==undefined){
      ToastAndroid.show("Enter a Valid Place",ToastAndroid.TOP)
    }
    else{
      setLocation!({
        latitude:data.results[0].latitude,
        longitude:data.results[0].longitude
      })
      setLocationlocal!({city:data.results[0].name,state:data.results[0].admin1})
    }
    console.log(data.results[0]);
  
   
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Location</Text>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={locHere}
          onChangeText={(text) => setLocHere(text)}

        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Set Location to {locHere}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationModal;

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    padding: 20,
    justifyContent: 'center',
    backgroundColor: BACKGROUNDCOLOR,
    gap:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color:"white"
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
