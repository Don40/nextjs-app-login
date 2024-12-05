import React from 'react';

const SecondaryHero = ({ bgImage, text, paragraph }) => {
  return (
    <div
      className="relative w-full h-[85vh] bg-cover bg-center animate-move md:animate-moveDesktop"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "150%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark transparent background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark transparent background
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
        {/* Content container with rounded background */}
        <div
          className="rounded-lg p-6"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker transparent background
          }}
        >
          {/* Title */}
          <h1 className="text-white text-4xl font-bold text-center">
            {text}
          </h1>
          {/* Paragraph with line breaks */}
          <p
            className="text-white text-lg mt-4 text-center"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryHero;


// bg-opacity-70
// bg-black opacity-30