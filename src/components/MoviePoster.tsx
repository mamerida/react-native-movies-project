import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/native'

interface Props {
    movie: Movie,
    height?:number,
    width?:number
}

const MoviePoster = ({movie, width = 300 ,height = 420}:Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
        onPress={()=>navigation.navigate('DetailScreen', movie)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal:8
        }}
    >
        <View style={style.imageContainer}>
            <Image
                source={{
                    uri
                }}
                style={style.image}
            />
        </View>
    </TouchableOpacity>
  )
}

export default MoviePoster

const style = StyleSheet.create({
    image:{
        flex : 1,
        borderRadius:18,
    },
    imageContainer:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,

        elevation: 10,
    }
})