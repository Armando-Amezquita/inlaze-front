"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

export const useHomePage = () => {

// import "react-multi-carousel/lib/styles.css";
// import './home.css';
// // const APIURL = "https://api.themoviedb.org/3/movie/changes?page=1"
// // const APIURL = "https://api.themoviedb.org/3"
// // const APIKEY = "ddf17c3a5b653c45486fa621d3dc3b91"
// // const IMAGEPATH = "https://image.tmdb.org/t/"
// // const URLIMAGE = "https://image.tmdb.org/t/"

  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'ddf17c3a5b653c45486fa621d3dc3b91';
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
  const GENRES = "https://api.themoviedb.org/3/genre/movie/list?language=es"
  const MOVIES_URL = API_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;


  const [movies, setMovies] = useState([])
  const [trailer, setTrailer] = useState()
  const [movie, setMovie] = useState({ title: 'Loading Movies'})
  const [playing, setPlaying] = useState(false)
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState(null)

  const fetchMovies = async(url: string) =>{
    const { data: { results }} = await axios.get(url, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGYxN2MzYTViNjUzYzQ1NDg2ZmE2MjFkM2RjM2I5MSIsIm5iZiI6MTcyNDY4OTk1OS44MzI4NDIsInN1YiI6IjYyY2RmMDg3YmRjMzRjMDA1NDMyMTY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CsAm22OwdgsWBR90Rw5hxR3CX4T4pD56b-8EXqYyKmE'
      }
    })
    setMovies(results)
    setMovie(results[0])
    if(results.length){
      await fetchMovie(results[0].id)
    }
  }

  const fetchGenres = async() => {
    const { data } = await axios.get(`${GENRES}`,  {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGYxN2MzYTViNjUzYzQ1NDg2ZmE2MjFkM2RjM2I5MSIsIm5iZiI6MTcyNDY4OTk1OS44MzI4NDIsInN1YiI6IjYyY2RmMDg3YmRjMzRjMDA1NDMyMTY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CsAm22OwdgsWBR90Rw5hxR3CX4T4pD56b-8EXqYyKmE'
      }
    })
    console.log('data', data)
    setGenres(data.genres)
  }

  const selectMovie = async(movie) => {
    console.log('movie', movie)
    fetchMovie(movie.id)
    setMovie(movie)
    window.scrollTo(0,0)
  }

//   const searchMovies = (e) => {
//     e.preventDefault();
//     fetchMovies(searchKey)
//   } 

  const fetchMovie = async(id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
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

  useEffect(() => {
    fetchMovies(MOVIES_URL)
    fetchGenres()
  }, [])

  const handleSelectGenre = (genre) => {
    setSelectedGenres(genre.id)
    fetchMovies(MOVIES_URL + '&with_genres=' + genre.id)
  }


  return {
    //Properties
    movies,
    trailer,
    movie,
    playing,
    genres,
    selectedGenres,

    //Methods
    handleSelectGenre,
    selectMovie
  }
}