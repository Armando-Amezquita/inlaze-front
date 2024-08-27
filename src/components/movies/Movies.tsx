import React from 'react'
import Movie from './Movie';
import './Movies.css'

interface Props {
    movies: any[];
    selectMovie: (mov) => void
}

export default function Movies( { movies, selectMovie }: Props) {
  return (
    <section>
      <div className='movies'>
        {
            movies?.map((movie) => (
                <Movie movie={movie} selectMovie={selectMovie} />
            ))    
        }
      </div>
    </section>
  )
}
