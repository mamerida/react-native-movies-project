import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
    actor: Cast
}

const ActorCard = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={styles.actorCardContainer}>
            {actor.profile_path && <Image source={{uri}} style={styles.actorPhoto} />}
            <View style={styles.actorInfo}>
                <Text style={styles.actorName}>{actor.name}</Text>
                <Text style={{fontSize:16}}>{actor.character}</Text>
            </View>
        </View>
    )
}

export default ActorCard

const styles = StyleSheet.create({
    actorCardContainer:{
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:10,
        height:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,

        elevation: 10,
        marginRight: 10,
        paddingRight: 10,
    },
    actorInfo:{
        marginLeft: 10,
        marginTop: 5
    },
    actorName:{
        fontSize:18,
        fontWeight:'bold',
        color:"black"
    },
    actorPhoto:{
        width:50,
        height:50,
        borderRadius:10
    }
})