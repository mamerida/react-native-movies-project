import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface'
import movieDB from '../api/moviedb'

const useMovies = () => {

    const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getMovies = async() =>{
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        setMoviesInCinema(resp.data.results)
        setIsLoading(false)
    }

    useEffect(() => {
        getMovies();
      }, [])

    return {
        moviesInCinema,
        isLoading
    }
}

export default useMovies