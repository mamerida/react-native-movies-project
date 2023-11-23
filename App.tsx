import 'react-native-gesture-handler';
import {Text} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Nagivation from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Nagivation/>
    </NavigationContainer>
  )
}

export default App