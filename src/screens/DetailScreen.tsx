import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootParamsNavigation } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootParamsNavigation, 'DetailScreen'>{

}
const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({route}:Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{uri}}
        style={styles.posterMovie}
      />
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
      </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  imageContainer:{
    width:'100%',
    height: screenHeight * 0.7
  },
  posterMovie:{
    flex:1
  },
  marginContainer:{
    marginHorizontal:20,
    marginTop: 20
  },
  subTitle:{
    fontSize:18,
    color:'black'
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  }
})