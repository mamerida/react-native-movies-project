import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

  const { moviesInCinema, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  
  return (
    <View
      style={{marginTop: top + 20}}
    >
     {isLoading ?
      <ActivityIndicator color="red" size={100}/>
      :
      <MoviePoster movie={moviesInCinema[0]}/>
    }
    </View>
  )
}

export default HomeScreen