import { useState, useEffect, useRef } from "react";

const height = 600;

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastTrigger, setScrolledPastTrigger] = useState(false);

  // this useEffect will trigger the modal when the user scrolls past 600px (only once)
  useEffect(() => {
    const handleScroll = () => {
      if (
        window !== undefined &&
        window.scrollY >= height &&
        !scrolledPastTrigger
      ) {
        setIsOpen(true);
        // setting this to true, avoids the modal to be triggered again
        setScrolledPastTrigger(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledPastTrigger]);

  // this useEffect will play the video when the modal is open
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // handle click outside the modal or press escape to close the modal
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };
  const closeOnEscapePressed = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", closeOnEscapePressed);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", closeOnEscapePressed);
    };
  });

  return {
    modalRef,
    isOpen,
    closeModal,
    videoRef,
  };
};
