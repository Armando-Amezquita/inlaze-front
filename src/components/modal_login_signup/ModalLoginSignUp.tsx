"use client"
import "./ModalLoginSignUp.css"
import { IoIosArrowBack } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import sing from "../../components/icons/sign.png"
import loginImg from "../../components/icons/login2.png"
import { useSignLogin } from "@/hooks/useSignLogin";
import SignLogin from "./SignLogin";
import FormLogin from "./FormLogin";



interface Props {
    handleModal: () => void;
    showModal: boolean
}

const ModalLoginSignUp = ({ showModal, handleModal }: Props) => {

  const {
    //Properties
    showAvatar,
    view,

    //Methods
    handleView
  } = useSignLogin()
  

  if (!showModal) {
      return null; 
  }
    
  return (
    <div className="ModalLoginSignUp">
        <div onClick={handleModal} className="ModalLoginSignUp__overlay"></div>
        <div className="ModalLoginSignUp__content">
            <button onClick={handleModal} className="ModalLoginSignUp__back">
                <IoIosArrowBack className="ModalLoginSignUp__back--arrow"/>
            </button>
            <div className="ModalLoginSignUp__actions">
                <button onClick={() => handleView('sign')} className={`ModalLoginSignUp__actions--sing ${view === 'login' && 'ModalLoginSignUp__actions--singInactive'}`}>Sing Up</button>
                <button onClick={() => handleView('login')} className={`ModalLoginSignUp__actions--login ${view === 'sign' && 'ModalLoginSignUp__actions--loginInactive'}`}>Log in</button>
            </div>

            {!showAvatar && view === "sign" &&
                <SignLogin 
                  title='Welcome to Quickbet Movies!' 
                  description="🎬 Ready to unlock a universe of cinematic"
                  description2="delights? Sign up now and start your journey with us!"
                  image={view === 'sign' ? sing : loginImg }
                />
            }

            {
              view === 'sign' ? (
                <button className="ModalLoginSignUp__register">
                    <p className="ModalLoginSignUp__register--text"> Register with your Email</p>
                    <CiMail className="ModalLoginSignUp__register--icon"/>
                </button>
              ): 
              <FormLogin />
            }

            <p className="ModalLoginSignUp__help">For any questions, reach out to support@Quickbetdmovies.com</p>

        </div>

        {
          showAvatar &&
            <SignLogin 
              title='Welcome to Quickbet Movies!' 
              description="🎬 Ready to unlock a universe of cinematic"
              description2="delights? Sign up now and start your journey with us!"
              image={view === 'sign' ? sing : loginImg }
            />
        }
    </div>
  )
}

export default ModalLoginSignUp