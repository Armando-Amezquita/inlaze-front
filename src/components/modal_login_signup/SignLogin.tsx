'use client'
import Image from "next/image";

interface Props{
    title: string;
    description: string;
    description2: string;
    image: any;
}

const SignLogin = ({ title = '', description = '', description2 = '', image }) => {
  return (
    <div className="ModalLoginSignUp__avatar">
        <p className="ModalLoginSignUp__avatar-title">{title}</p>
        <p className="ModalLoginSignUp__avatar--description">
            {description} <br/> {description2}</p>
        <Image className="ModalLoginSignUp__avatar--logo" src={image} alt={image} />
    </div>
  )
}

export default SignLogin;