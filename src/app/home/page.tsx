"use client"
import { useHomePage } from '@/hooks/useHomePage';
import Navbar from '@/components/navbar/Navbar';
import Banner from '@/components/banner/Banner';
import Movies from '@/components/movies/Movies';

export default function HomePage() {

  const { 
    //Properties
    movies,
    movie,
    genres,
    page,
    searchKey,

    //Methods
    handleSelectGenre,
    selectMovie,
    handlePage,
    searchMovies } = useHomePage();  

  return (
    <>
    <Navbar genres={genres} handleSelectGenre={handleSelectGenre} searchMovies={searchMovies} searchKey={searchKey}/>
    <Banner movie={movie} />
    <Movies movies={movies} selectMovie={selectMovie} handlePage={handlePage} page={page}/>
    </>
  );
}

