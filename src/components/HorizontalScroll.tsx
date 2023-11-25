import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import MoviePoster from './MoviePoster'

interface Props {
    title?:string,
    movies: Movie[],
    height?:number,
    width?:number
}

export default function HorizontalScroll({title,movies, width = 140, height = 200}:Props) {
  return (
    <View style={{marginTop:30 ,height:260}}>
        {title && <Text style={{fontSize:30, fontWeight:'bold', color:'black'}} > {title}</Text>}
        <FlatList
        data={movies}
        renderItem={(item: {item: Movie}) => <MoviePoster movie={item.item} width={width} height={height} />}
        keyExtractor={(item)=>item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}