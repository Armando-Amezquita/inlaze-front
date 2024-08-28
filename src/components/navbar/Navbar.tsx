"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { HiUserCircle } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import Logo from "../../components/icons/Logo.png"
import './Navbar.css'

interface Props {
  genres?: any[];
  view?: string;
  handleSelectGenre?: (item: any) => void;
  searchMovies?: (value: string) => void;
  handleModal?: () => void;
  searchKey?: string;
}

export default function Navbar({ genres, view, handleSelectGenre, searchMovies, searchKey="", handleModal } : Props){

  const router = useRouter();
  const goHome = () => {
    router.push('/home')
}

  return (
    <header className='header'>
      <nav className='nav' >
        <div className='nav__content'>
          <button onClick={goHome}>
            <Image src={Logo} alt='' className='nav__content--logo' />
          </button>

          <button onClick={handleModal} className="nav__content--action">
            <HiUserCircle className='nav__content--profile'/>
          </button>
        </div>

        {
          view !== "details" && (
          <>
            <label className='search'>
              <RiSearchLine />
              <input type="text" value={searchKey} placeholder='Buscar' className='search__text' onChange={(e) => searchMovies(e.target.value)}/>
            </label>

            <div className='tags'>
              {
                genres && genres.map((item: any) => (
                  <button onClick={() => handleSelectGenre(item)} key={item.name} className='tags__tag'>{item.name}</button>
                )
              )
            }
            </div>
          </>
          )
        }
      </nav>
  </header>
  )
}
