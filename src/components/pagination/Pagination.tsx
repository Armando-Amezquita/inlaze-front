'use client'
import './pagination.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


interface Props {
    handlePage: (page) => void
    page: any;
}

const Pagination = ({ handlePage, page }: Props) => {
 
  return (
    <div className='pagination'>
        <button onClick={() => handlePage(page - 1)} className='pagination__action' >
            <IoIosArrowBack />
        </button>
        <p className='pagination__page'>{page}</p>
        <button onClick={() => handlePage(page + 1)} className='pagination__action'>
            <IoIosArrowForward />
        </button>
    </div>
  )
}

export default Pagination