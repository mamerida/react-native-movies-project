import { View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native'
import React from 'react'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../interfaces/movieInterface';

const {width : windowWidth} = Dimensions.get('screen');
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
      <ScrollView>
        <Carousel
          vertical={false}
          data={moviesInCinema}
          renderItem={(item: {item: Movie}) => <MoviePoster movie={item.item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
        {/* popular movies */}
        <View style={{marginTop:30 ,height:260}}>
          <Text
            style={{fontSize:30, fontWeight:'bold', color:'black'}}
          >
            Popular Movies
          </Text>
          <FlatList
            data={moviesInCinema}
            renderItem={(item: {item: Movie}) => <MoviePoster movie={item.item} width={140} height={200} />}
            keyExtractor={(item)=>item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

      </ScrollView
      >
    }
    </View>
  )
}

export default HomeScreen