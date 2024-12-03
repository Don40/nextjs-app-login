

import React from 'react';

const SecondaryHero = ({ bgImage, text, paragraph }) => {
  return (
    <div
      className="relative w-full h-[85vh] bg-cover bg-center animate-move md:animate-moveDesktop"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "150%", // Enough space for animation
        backgroundRepeat: "no-repeat", // Ensure no background repetition
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
        <h1 className="text-white text-4xl font-bold text-center">{text}</h1>
        <p className="text-white text-lg mt-4 text-center">{paragraph}</p>
      </div>
    </div>
  );
};

export default SecondaryHero;

