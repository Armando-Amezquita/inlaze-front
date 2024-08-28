import React from 'react'
import { BiShow } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";

const FormLogin = () => {
  return (
    <div className='ModalLoginSignUp__form'>
        <span className='ModalLoginSignUp__msg'>We love having you back</span>
        <label className='ModalLoginSignUp__label'>
            <input className='ModalLoginSignUp__input' type="password" placeholder="Email" />
            <BiShow className='ModalLoginSignUp__input--icon' />
        </label>
        <label className='ModalLoginSignUp__label'>
            <input className='ModalLoginSignUp__input' type="password" placeholder="Password" />
            <BiShow className='ModalLoginSignUp__input--icon' />
        </label>
        <button className='ModalLoginSignUp__submit'>
            <span className="ModalLoginSignUp__submit--text"> Continue </span>
            <HiOutlineTicket className='ModalLoginSignUp__submit--icon'/>
        </button>
    </div>
  )
}

export default FormLogin;