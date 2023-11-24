import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import useMovies from '../hooks/useMovies'

const HomeScreen = () => {

  const { moviesInCinema, isLoading } = useMovies();
  
  return (
    <View>
     {isLoading ?
      <ActivityIndicator color="red" size={100}/>
      :
      <Text>Hola</Text> 
    }
    </View>
  )
}

export default HomeScreen