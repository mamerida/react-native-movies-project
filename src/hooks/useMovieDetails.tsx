import React, { useEffect, useState } from "react";
import movieDB from "../api/moviedb";
import { MovieFull } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetail = ( movieId : number ) =>{

    const [detailState, setDetailState] = useState<MovieDetails>({
        isLoading:true,
        movieFull: undefined,
        cast:[]
    })

    const getMovieDetails = async() =>{
        const [movieDetailsResponse , castDetailsResponse] = await Promise.all([await movieDB.get<MovieFull>(`${movieId}`), await movieDB.get<CreditsResponse>(`${movieId}/credits`)]);
        setDetailState({
            isLoading:false,
            movieFull:movieDetailsResponse.data,
            cast:castDetailsResponse.data.cast
        })
    }

    useEffect(() => {
      getMovieDetails();
    }, [])
    
    
    return{
        isLoading : detailState.isLoading,
        movieFull  : detailState.movieFull,
        cast : detailState.cast
    }
}