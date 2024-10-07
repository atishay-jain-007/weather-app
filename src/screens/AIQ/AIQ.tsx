import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
const AIQ = () => {
  return (
    <View style={styles.main}>
      <CircularProgress
  value={60}
  radius={120}
  duration={2000}
  progressValueColor={'#ecf0f1'}
  maxValue={200}
  title={'KM/H'}
  titleColor={'white'}
  titleStyle={{fontWeight: 'bold'}}
/>
    </View>
  )
}

export default AIQ

const styles = StyleSheet.create({
    main:{
        
    }
})