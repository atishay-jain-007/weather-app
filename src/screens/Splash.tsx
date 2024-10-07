import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={[styles.main]} >

    <View style={styles.main}>
      <Text style={styles.heading}>Temperature the weather app</Text>
    </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    main:{
        flex:1,
        // backgroundColor:"#a5a5a5",
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        
    },heading:{
        fontSize:23,
        color:"white"
    }
})