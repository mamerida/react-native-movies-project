import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootParamsNavigation } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetail } from '../hooks/useMovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import MovieDetail from '../components/MovieDetail';

interface Props extends StackScreenProps<RootParamsNavigation, 'DetailScreen'>{

}
const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({route, navigation}:Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const { isLoading, movieFull, cast } = useMovieDetail(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{uri}}
          style={styles.posterMovie}
        />
      </View>
      <View style={styles.marginContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.subTitle}>{movie.original_title}</Text>
      </View>
      {isLoading ?  <ActivityIndicator size={35} color="grey" /> : <MovieDetail movieFull={movieFull!} cast={cast}/>}
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton} 
        onPress={()=>navigation.pop()}
      >
        <Icon 
          color="black"
          name='arrow-back-outline'
          size={50}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  imageContainer: {
    // backgroundColor: 'red',
    // overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterMovie:{
    flex:1,
    height:'100%',
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
  },
  backButton:{
    position: "absolute",
    zIndex:999,
    elevation:9,
    top: 20,
    left: 10,
    borderRadius:100,
    backgroundColor:"white",
    opacity:0.7
  }
})