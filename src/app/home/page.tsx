"use client"
import { useHomePage } from '@/hooks/useHomePage';
import Navbar from '@/components/navbar/Navbar';
import Banner from '@/components/banner/Banner';
import Movies from '@/components/movies/Movies';


export default function HomePage() {

  const { 
    //Properties
    movies,
    trailer,
    movie,
    playing,
    genres,
    selectedGenres,

    //Methods
    handleSelectGenre,
    selectMovie } = useHomePage();  

  return (
    <>
    <Navbar genres={genres} handleSelectGenre={handleSelectGenre} />
    <Banner movie={movie} />
    <Movies movies={movies} selectMovie={selectMovie} />
    </>
  );
}

