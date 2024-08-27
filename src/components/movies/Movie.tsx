import React from 'react'
import { LiaHeartSolid } from "react-icons/lia";
// import './Movies.css'

interface Props {
    movie: any;
    selectMovie: (mov) => void; 
}

const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

export default function Movie( { movie, selectMovie } : Props) {

    const calculatePercentage = (perce) => {
        if (typeof perce !== 'number') {
          return; 
        }
        return Number(perce.toFixed(1));
    }

  return (
    <div 
        key={movie.id} 
        className="card-movies" 
        onClick={() => selectMovie(movie)}
    >
        <img src={`${URL_IMAGE + movie.poster_path}`} 
            alt='Img' 
            className='card__image'
        />
        <p className='title-image'>{movie.title}</p>
        <p className='year-image'>{movie.release_date}</p>
        <div className='card__content--actions'>
            <span className='card__content--rating'> Rating <br /> 
            { calculatePercentage(movie?.vote_average) }
            </span>
            <span className='card__content--favorites'> Favorites <br /> <LiaHeartSolid /> </span>
        </div>
    </div> 
  )
}
