import React, { useState } from 'react';

const Banner = ({ message, bgColor, textColor, icon }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to close the banner
  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Do not render if not visible

  return (
    <div
      className={`w-full py-4 text-center ${bgColor} ${textColor} flex justify-between items-center`}
      style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
    >
      <div className="flex items-center justify-center w-full">
        {icon && <span className="mr-2">{icon}</span>}
        <span dangerouslySetInnerHTML={{ __html: message }} />
      </div>
      <button
        onClick={closeBanner}
        className="bg-transparent border-none text-white text-xl"
      >
        &times; {/* Close icon */}
      </button>
    </div>
  );
};

export default Banner;
