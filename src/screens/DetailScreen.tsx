import { View, Text } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootParamsNavigation } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootParamsNavigation, 'DetailScreen'>{

}

const DetailScreen = ({route}:Props) => {
  const movie = route.params;
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen