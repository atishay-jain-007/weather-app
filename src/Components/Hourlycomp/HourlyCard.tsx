import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { TEMPTEXT, weatherCodes } from '../../../constants/constants';
interface HourlyCardProps {
    time: number;
    temp: number;
    weatherImage: string|undefined; 
    realFeel: number|undefined;
    rain:number|undefined
}
const HourlyCard: React.FC<HourlyCardProps> =  ({ time, temp, weatherImage, realFeel ,rain}) => {
    const prefix = (time >= 12) ? "PM" : "AM";
    // console.log(weatherCodes)
    return (
        <LinearGradient
            colors={['rgb(18, 35, 60)', 'rgb(187, 187, 187)']}
            start={{ x: 0.402, y: 0.198 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0, 0.9]}
            style={styles.gradient}
        >
            <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={{ flexDirection: "column", justifyContent: "space-between", gap: 20 }}>
                    <Text style={styles.text}>
                        {time > 12 ? time - 12 : (time===0?12:time)} {prefix}
                    </Text>
                    {/* <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%"}}> */}

                    <Text style={styles.subText}>
                        Real Feel {realFeel}℃
                    </Text>
                   
                    {/* </View> */}
                </View>

                {weatherImage ? (
                    <Image
                        source={{ uri: weatherImage }}
                        style={styles.image}
                    />
                ) : (
                   <Text>No image found</Text>
                )}
                <Text style={styles.text}>{temp}℃</Text>
                 <View style={styles.iconContainer}> 
                    <View style={{flexDirection:"column",alignItems:"center"}}>

                 <SimpleLineIcons name="drop" size={24} color="white" />
                 <Text style={styles.text}>{rain}mm</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

export default HourlyCard;

const styles = StyleSheet.create({
    gradient: {
        padding: 10,
        width: '90%',
        height: "auto",
        borderRadius: 10,
        gap: 20
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50,
    },
    subText:{
        color: "#9bafc1",
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconContainer: {
        position: 'absolute', // Use absolute positioning for the icon
        bottom: 0,          // Distance from the bottom
        right: 10,           // Distance from the right
    },
});
