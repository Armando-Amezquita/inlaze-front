"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

export const useHomePage = () => {

  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'ddf17c3a5b653c45486fa621d3dc3b91';
  const GENRES = "https://api.themoviedb.org/3/genre/movie/list?language=en"
  const MOVIES_URL = API_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
  const [movies, setMovies] = useState([])
  const [trailer, setTrailer] = useState()
  const [movie, setMovie] = useState({ title: 'Loading...', loading: true})
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState(null)
  const [page, setPage] = useState<number>(1)
  const [lastUrl, setLastUrl] = useState('')
  const [searchKey, setSearchKey] = useState('');
  const [showModal, setShowModal] = useState<boolean>(false)

  const fetchMovies = async(url: string, query = '') =>{
    setLastUrl(url)
    const { data } = await axios.get(url, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGYxN2MzYTViNjUzYzQ1NDg2ZmE2MjFkM2RjM2I5MSIsIm5iZiI6MTcyNDY4OTk1OS44MzI4NDIsInN1YiI6IjYyY2RmMDg3YmRjMzRjMDA1NDMyMTY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CsAm22OwdgsWBR90Rw5hxR3CX4T4pD56b-8EXqYyKmE',
      },
      params: {
        api_key: API_KEY,
        query
      }
    })

    const { results } = data;

    setMovies(results)
    setPage(data.page)
    if(results.length){
      setMovie(results[0])
      await fetchMovie(results[0].id)
    }else{
      setMovie({title: 'Movies not found', loading: true})
    }
  }

  const fetchGenres = async() => {
    const { data } = await axios.get(`${GENRES}`,  {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGYxN2MzYTViNjUzYzQ1NDg2ZmE2MjFkM2RjM2I5MSIsIm5iZiI6MTcyNDY4OTk1OS44MzI4NDIsInN1YiI6IjYyY2RmMDg3YmRjMzRjMDA1NDMyMTY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CsAm22OwdgsWBR90Rw5hxR3CX4T4pD56b-8EXqYyKmE'
      }
    })
    setGenres(data.genres)
  }

  const selectMovie = async(movie) => {
    fetchMovie(movie.id)
    setMovie(movie)
    window.scrollTo(0,0)
  }

  const searchMovies = async (value) => {
    setSearchKey(value)
    value.length > 0 ? fetchMovies(`${API_URL}/search/movie`, value) : fetchMovies(MOVIES_URL)
  } 

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
  
  const handleSelectGenre = (genre) => {
    setSelectedGenres(genre.id)
    fetchMovies(MOVIES_URL + '&with_genres=' + genre.id)
  }

  const handlePage = (pag) => {
    if(pag <= 0 ) return 
    searchKey.length > 0 ? fetchMovies(`${API_URL}/search/movie?${searchKey}&page=${pag}`, searchKey) : fetchMovies(`${lastUrl}&page=${pag}`);
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    fetchMovies(MOVIES_URL)
    fetchGenres()
  }, [])



  return {
    //Properties
    movies,
    trailer,
    movie,
    genres,
    selectedGenres,
    page,
    searchKey,
    showModal,

    //Methods
    handleSelectGenre,
    selectMovie,
    handlePage,
    searchMovies,
    handleModal
  }
}