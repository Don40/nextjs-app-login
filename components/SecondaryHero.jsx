

import React from 'react';

const SecondaryHero = ({bgImage, text}) => {

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})`, height: "40vh" }}   // height needs to be adjusted based on screen size.
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
     <div className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden">
        {/* Added overflow-hidden */}
        <h1 className="text-white text-4xl md:text-9xl lg:text-8xl sm:text-4xl font-bold text-center font-montserrat">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default SecondaryHero;
