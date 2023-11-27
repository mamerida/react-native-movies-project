import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface'
import Icon from "react-native-vector-icons/Ionicons"
import currencyFormatte from "currency-formatter"
import ActorCard from './ActorCard'

interface Props{
    movieFull: MovieFull,
    cast: Cast[],
}

const MovieDetail = ({ movieFull, cast}:Props) => {
  return (
    <React.Fragment>
        {/* Details */}
        <View style={styles.DetailsContainer}>
            <View style={styles.averageContainer}>
                <Icon name="star-outline"  color="grey" size={16}/>
                <Text> {movieFull.vote_average}</Text>
                <Text style={{color:"black"}}>
                    - { movieFull.genres.map(( g )=> g.name).join(", ")}
                </Text>
            </View>
        </View>
        {/* History */}
        <View style={styles.DetailsContainer}>
            <Text style={styles.title} >Historia</Text>
            <Text style={{color:"black", fontSize:16}}>{movieFull.overview}</Text>
        </View>
        {/* Budget */}
        <View style={styles.DetailsContainer}>
            <Text style={styles.title} >Presupuesto</Text>
            <Text style={{color:"black", fontSize:16}}>{currencyFormatte.format(movieFull.budget, {code: "USD"})}</Text>
        </View>
        {/* Casting */}
        <View style={[styles.DetailsContainer,styles.actorContainer]}>
            <Text style={styles.title} >Cast</Text>
            <FlatList 
                style={styles.actorFlatList} 
                data={cast}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={(item: {item: Cast}) => <ActorCard actor={item.item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            {/* // {cast.map((actor, key)=> <ActorCard key={key} actor={actor}/>)} */}
        </View>
    </React.Fragment>
  )
}

export default MovieDetail

const styles = StyleSheet.create({
    DetailsContainer:{
        marginHorizontal:20,
        marginTop:10
    },
    averageContainer:{
        flexDirection:"row"
    },
    title:{
        color:"black",
        fontSize:25,
        fontWeight: 'bold'
    },
    actorContainer:{
        marginBottom:70
    },
    actorFlatList:{
        marginTop:10,
        height: 70 
    }
})