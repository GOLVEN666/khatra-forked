import React from 'react';
import { Link } from 'react-router-dom';
import './BgVid.css'; 
import { bgvid } from '../../../public/images';
import ShopNowButton from '../ShopNowButton/ShopNowButton';

const BgVid = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
        src={bgvid}
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 text-center text-white p-4 ">
        <h1 className="text-4xl md:text-8xl mb-6 font-playfair font-bold">Bienvenue chez Khatra</h1>
        <ShopNowButton text="Achetez maintenant" />
        <div className="mt-6">
          <p className="text-sm">En savoir plus</p>
          <svg
            className="w-6 h-6 mx-auto mt-2 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
       </div>
    </div>
  );
};

export default BgVid;
