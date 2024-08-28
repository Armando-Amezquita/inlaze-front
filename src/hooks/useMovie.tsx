"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  title: string;
  loading: boolean;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  vote_average?: number;
  genres?: Genre[];
}

interface Trailer {
  key: string;
}


export const useMovie = () => {

  const API_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'ddf17c3a5b653c45486fa621d3dc3b91';

  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState<Trailer | null>(null);
  const [movie, setMovie] = useState<Movie>({
    title: "Loading...",
    loading: true,
    poster_path: "",
    backdrop_path: "",
    overview: "",
    vote_average: 0,
    genres: [],
  });

  const params = useParams();

  const fetchMovie = async() =>{
    const { data } = await axios.get(`${API_URL}${params.postid}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGYxN2MzYTViNjUzYzQ1NDg2ZmE2MjFkM2RjM2I5MSIsIm5iZiI6MTcyNDY4OTk1OS44MzI4NDIsInN1YiI6IjYyY2RmMDg3YmRjMzRjMDA1NDMyMTY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CsAm22OwdgsWBR90Rw5hxR3CX4T4pD56b-8EXqYyKmE'
      },
      params: {
        api_key: API_KEY,
        append_to_response: 'videos'
      }
    })

    if(data.videos && data.videos.results){
        const trailer = data.videos.results.find(vid => vid.name === 'Official Trailer')
        setTrailer(trailer ? trailer : data.videos.results[0] )
    }
    setMovie(data)

  }

  const handlePlaytrailer = () => {
    setPlaying(!playing)
  }

  const calculatePercentage = (perce) => {
    if (typeof perce !== 'number') {
      return; 
    }
    return Number(perce.toFixed(1));
}

  useEffect(() => {
    fetchMovie()
  }, [])


  return {
    //Properties
    trailer,
    movie,
    playing,

    //Methods
    setPlaying,
    handlePlaytrailer,
    calculatePercentage
  }
}