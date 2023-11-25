import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie,
    height?:number,
    width?:number
}

const MoviePoster = ({movie, width = 300 ,height = 420}:Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <View 
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
    </View>
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