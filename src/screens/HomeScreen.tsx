import { View, Text } from 'react-native'
import {API_KEY} from "@env"
import React from 'react'

const HomeScreen = () => {
    console.log("hil",API_KEY)
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen