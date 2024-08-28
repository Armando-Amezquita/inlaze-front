"use client"
import { useHomePage } from '@/hooks/useHomePage';
import Navbar from '@/components/navbar/Navbar';
import Banner from '@/components/banner/Banner';
import Movies from '@/components/movies/Movies';
import ModalLoginSignUp from '@/components/modal_login_signup/ModalLoginSignUp';

export default function HomePage() {

  const { 
    //Properties
    movies,
    movie,
    genres,
    page,
    searchKey,
    showModal,

    //Methods
    handleSelectGenre,
    selectMovie,
    handlePage,
    searchMovies,
    handleModal } = useHomePage();  

  return (
    <>
    <Navbar genres={genres} handleSelectGenre={handleSelectGenre} searchMovies={searchMovies} searchKey={searchKey} handleModal={handleModal}/>
    <Banner movie={movie} />
    <Movies movies={movies} selectMovie={selectMovie} handlePage={handlePage} page={page}/>
    <ModalLoginSignUp showModal={showModal} handleModal={handleModal} />
    </>
  );
}

