import React from 'react'
import Movie from './Movie';
import './Movies.css'
import Pagination from '../pagination/Pagination';

interface Props {
    movies: any[];
    selectMovie: (mov) => void
    handlePage: (page) => void
    page: any;
}

export default function Movies( { movies, selectMovie, handlePage, page }: Props) {
  return (
    <>
    <section>
      <div className='movies'>
        {
          movies?.map((movie) => (
            <Movie key={movie.id} movie={movie} selectMovie={selectMovie} />
          ))    
        }
      </div>
    </section>
    <Pagination handlePage={handlePage} page={page}/>
    </>
  )
}
