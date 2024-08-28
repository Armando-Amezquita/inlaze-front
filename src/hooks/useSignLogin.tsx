"use client"
import { useEffect, useState } from 'react';

export const useSignLogin = () => {

    const [showAvatar, setShowAvatar] = useState<boolean>(false);
    const [view, setView] = useState('sign');

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 768) { 
            setShowAvatar(true);
        } else {
            setShowAvatar(false);
        }
    };

    const handleView = (value: string) => {
        setView(value)
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
  
  return {
    //Properties
    showAvatar,
    view,
    

    //Methods
    handleView
  }
}