import React from "react";
import { useModal } from "./hooks/useModal";

const modalDetails = {
  title: "4.5M IN DEGEN REWARDS",
  description:
    "Our Dungeons & Degens campaign is live! Earn your share of the prize pool by conquering quests to claim glory and rewards.",
  buttonText: "Enter Dungeon",
  link: "https://gov.game7.io/",
};
/**
 * This modal will be triggered when the user scrolls past certain amount of height.
 *
 */
const Modal = () => {
  const { isOpen, closeModal, videoRef, modalRef } = useModal();
  const handleButtonClick = (e) => {
    e.preventDefault();
    window.open(modalDetails.link, "_blank");
    closeModal();
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center
    items-center  transition-all ease-in-out duration-300 text-white ${
      isOpen ? "visible opacity-100" : "opacity-0 invisible"
    }`}
    >
      <div
        ref={modalRef}
        className="relative  
        bg-[#00000099] bg-blend-soft-light bg-[url('./bg.png')] bg-cover bg-center bg-no-repeat 
        rounded-lg border-[5px] border-[#00000040] overflow-auto
        px-2 pt-2 pb-7 md:px-6 md:pt-6 md:pb-[40px] lg:p-5 
        w-[327px] md:w-[600px] lg:w-[700px]"
      >
        <div
          className="absolute right-6 top-4 w-4 h-4 opacity-100 z-[9999] 
          before:absolute before:left-4 before:content-[''] before:h-4 before:w-[1px] before:bg-white before:rotate-45 
          after:absolute after:left-4 after:content-[''] after:h-4 after:w-[1px] after:bg-white after:-rotate-45 
          cursor-pointer"
          onClick={closeModal}
        />
        <div className="">
          <video
            loop
            autoPlay
            muted
            id="video-d&d"
            ref={videoRef}
            className="rounded-lg w-full h-1/2 aspect-video flex justify-center items-center"
          >
            <source src={require("./video.mp4")} type="video/mp4" />
          </video>

          <div className="text-center">
            <h1 className="text-2xl md:text-[40px] md:py-4 py-2 font-[Agharti] font-black leading-[48px] tracking-wide text-center">
              {modalDetails.title}
            </h1>
            <p className="pb-6 md:pb-10 text-base font-normal font-[Inter]">
              {modalDetails.description}
            </p>
            <button
              className="px-6 py-4 md:px-10 md:py-4 lg:px-12 lg:py-6 text-base rounded-lg bg-[#FE2C2E] font-[Inter] lg:text-xl font-normal leading-6 border-none text-left z-[999] cursor-pointer"
              onClick={handleButtonClick}
            >
              {modalDetails.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
