import Image from "next/image";
import Header from "./components/Header";
import Modal,{ ModalProps } from "./components/Modal"



export default function Home() {

  const modalProps: ModalProps = {
    isOpen: true,
    title: "My Modal",
    actionLabel: "Submit",
    onClose: () => console.log("Modal closed"),
    onSubmit: () => console.log("Form submitted"),
};

  
  return (
   <>
    
    <Header showBackArrow label="Home"/>

    <Modal {...modalProps} />
    
   </>
  );
}
