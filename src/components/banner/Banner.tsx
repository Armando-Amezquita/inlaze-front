import React from 'react'
import Link from 'next/link';
import { BsArrowRightShort } from "react-icons/bs"
import './Banner.css'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

interface Props {
    movie: any;
}

export default function Banner ({movie}: Props) {

    const calculatePercentage = (perce) => {
        if (typeof perce !== 'number') {
          return; 
        }
        return Number(perce.toFixed(1));
    }

  return (
    <>
    {
      !movie.loading ? ( 
        <Link href={`/post/${movie.id}`}>
          <div className='viewtrailer' 
            style={{backgroundImage: `url("${IMAGE_PATH}${movie?.backdrop_path}")`}}
          >
            <div className='viewtrailer__shadow'>
              <p className='viewtrailer__title'>{movie.title}</p>
              <span className='viewtrailer__percent'>{calculatePercentage(movie?.vote_average)}</span>
              <button className='viewtrailer__go'>
                <BsArrowRightShort />
              </button>
            </div>
          </div>
        </Link>
      ): 
      (
        <div>
          <p className='movie__loading'>{movie.title}</p>
        </div>
      )
    }
    </>
  )
}
