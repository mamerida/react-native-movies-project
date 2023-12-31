import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../interfaces/movieInterface';
import HorizontalScroll from '../components/HorizontalScroll';

const {width : windowWidth} = Dimensions.get('screen');
const HomeScreen = () => {

  const { nowPlaying,popular,topRated, upcoming, isLoading } = useMovies();
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
          data={nowPlaying}
          renderItem={(item: {item: Movie}) => <MoviePoster movie={item.item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
        {/* popular movies */}
        <HorizontalScroll
          movies={popular}
          title='Popular Movies'
        />
        {/* popular movies */}
        <HorizontalScroll
          movies={topRated}
          title='Top Rated'
        />
        {/* popular movies */}
        <HorizontalScroll
          movies={upcoming}
          title='Up Coming'
        />
      </ScrollView>
    }
    </View>
  )
}

export default HomeScreen