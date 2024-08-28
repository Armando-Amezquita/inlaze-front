"use client"
import { useRouter } from "next/navigation";
import { useMovie } from "@/hooks/useMovie";
import Navbar from "@/components/navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import "./post.css"
import YouTube from "react-youtube";

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
const MoviePage = () => {
    const {
        movie,
        playing,
        trailer,

        //Methods
        handlePlaytrailer,
        calculatePercentage
    } = useMovie()

    const router = useRouter();

    const goBack = () => {
        router.push('/home')
    }

  return (
    <>
    <Navbar view="details" />
    {
      !movie.loading ? ( 
          <div className='viewtrailerDetails' 
            style={{backgroundImage: `url("${IMAGE_PATH}${movie?.poster_path}")`}}
          >
            <div className='viewtrailerDetails__shadow'>
                <button onClick={goBack} className="viewtrailerDetails__goBack">
                    <IoIosArrowBack className="viewtrailerDetails__back" />
                </button>
                <p className='viewtrailerDetails__title'>{movie.title}</p>
                <div className='viewtrailerDetailsVideo'  style={{backgroundImage: `url("${IMAGE_PATH}${movie?.backdrop_path}")`}}>
                    {
                    playing? (
                        <>
                        <YouTube 
                            videoId={trailer?.key}
                            className='viewtrailerDetailsVideo'
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
                        <button onClick={handlePlaytrailer} className='viewtrailerDetails__play'>
                            Close
                        </button>
                        </>
                    ) : (
                        <>
                            { 
                            trailer ? (
                                <button onClick={handlePlaytrailer} className='viewtrailerDetails__play'> 
                                    <span className="viewtrailerDetails__playText">Official Trailer</span>
                                    <FaCirclePlay className='viewtrailerDetails__playIcon' />
                                </button>
                            ) : (
                                <span> Trailer not found </span>
                            )
                        }
                        </>
                    )
                    }
                </div>

                <div className="viewtrailerDetails__overviewContent">
                    <p className="viewtrailerDetails__overviewTitle">Overview: </p>
                    <p className="viewtrailerDetails__overview">{movie.overview}</p>
                    <div className='viewtrailerDetails__percent'>
                        <span className="viewtrailerDetails__percentSpan"> {calculatePercentage(movie?.vote_average)} </span>
                        <span className="viewtrailerDetails__percentSpan">Users Score</span>
                    </div>
                </div>
                <div className="viewtrailerDetails__genreContent">
                    {
                        movie.genres.map((item: any) => (
                            <p className="viewtrailerDetails__genre" key={item.id}>
                                {item.name}
                            </p>
                        ))
                    }
                </div>
            </div>
          </div>
      ): 
      (
        <div>
          <p className='movie__loading'>{movie.title}</p>
        </div>
      )
    }
    </>
  );
};

export default MoviePage;
