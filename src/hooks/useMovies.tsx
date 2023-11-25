import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface'
import movieDB from '../api/moviedb'

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[]
}

const useMovies = () => {
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying:[],
        popular: [],
        topRated: [],
        upcoming:[]
    })
    const [isLoading, setIsLoading] = useState(true)

    const getMovies = async() =>{
        const nowPlaying = movieDB.get<MovieDBNowPlaying>('/now_playing')
        const popular =movieDB.get<MovieDBNowPlaying>('/popular')
        const topRated =movieDB.get<MovieDBNowPlaying>('/top_rated')
        const upcoming =movieDB.get<MovieDBNowPlaying>('/upcoming')

        const resp = await Promise.all([nowPlaying,popular,topRated,upcoming])

        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results
        })
        setIsLoading(false)
    }

    useEffect(() => {
        getMovies();
      }, [])

    return {
        ...moviesState,
        isLoading
    }
}

export default useMovies