"use client";
import "./Navbar.css";
import Image from 'next/image';
import { HiUserCircle } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import Logo from "../../components/icons/Logo.png"
import './Navbar.css'

interface Props {
  genres: any[];
  movie?: any;
  handleSelectGenre: (item: any) => void;
}

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

export default function Navbar({ genres, movie, handleSelectGenre } : Props){

  const calculatePercentage = (perce) => {
    if (typeof perce !== 'number') {
      return ""; 
    }
    let firstDecimal = Number(perce.toFixed(1));
    return firstDecimal;
  }

  return (
    <header className='header'>
      <nav className='nav' >
        <div className='nav__content'>
          <Image src={Logo} alt='' className='nav__content--logo' />
          <HiUserCircle className='nav__content--profile'/>
        </div>

        <label className='search'>
          <RiSearchLine />
          <input type="text" placeholder='Buscar' className='search__text'/>
        </label>

        <div className='tags'>
          {
            genres && genres.map((item: any) => (
                <button onClick={() => handleSelectGenre(item)} className='tags__tag'>{item.name}</button>
              )
            )
          }
        </div>
      </nav>
      {/* <div>
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
             
            </div>
          )
        }
      </div> */}
  </header>
  )
}
