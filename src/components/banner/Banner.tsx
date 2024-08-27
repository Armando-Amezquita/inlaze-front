import React from 'react'
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
    
    <section>
    {
      movie && ( 
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
          {/* {
            playing? (
              <>
                <YouTube 
                  videoId={trailer?.key}
                  className='reproductor container'
                  containerClassName={'youtube-container amru'}
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 1,
                      controls: 0,
                      cc_load_policy: 0,
                      fs: 0, 
                      iv_load_policy: 0,
                      modestbranding: 0,
                      rel: 0,
                      showinfo: 0
                    }
                  }}
                />
                <button onClick={() => setPlaying(false)} className='btn-style btn btn-dark'>
                  Cerrar
                </button>
              </>
            ) : (
              <div className=''>
                <div>
                  { 
                    trailer ? (
                      <button onClick={() => setPlaying(true)} className='btn-style btn btn-dark'> 
                        Play
                      </button>
                    ) : (
                      'No hay trailer disponible'
                    )
                  }
                </div>
              </div>
            )
          } */}
        </div>
      )
    }
  </section>
  )
}
