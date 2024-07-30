"use client";
import Image from 'next/image';
import image1 from '@/components/carousel/img/img1.webp';
import image2 from '@/components/carousel/img/img2.webp';
import image3 from '@/components/carousel/img/img3.jpg';
import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="relative">
        <div className="overflow-hidden relative h-[450px]">
          <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl z-10"></span>
            <Image
              src={image1}
              className="block w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent z-10"></div>
          </div>
          <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={image2}
              className="block w-full h-full object-cover"
              alt="Slide 2"
            />
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent z-10"></div>
          </div>
          <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={image3}
              className="block w-full h-full object-cover"
              alt="Slide 3"
            />
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent z-10"></div>
          </div>
        </div>
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center h-full w-14 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex justify-center items-center w-full h-full">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span className="hidden">Anterior</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center h-full w-14 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex justify-center items-center w-full h-full">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="hidden">Siguiente</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
