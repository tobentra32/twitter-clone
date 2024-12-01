"use client"
import Header from "./components/Header";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "next-auth/react";

export default function Home() {
  
  return (
    <>
      <Toaster />
      <LoginModal />
      <RegisterModal />
      <Header showBackArrow label="Home"/>
    </>
   

    
    
  
  );
}
