import React, { useState } from 'react';
import Link from 'next/link'; // Importing the Next.js Link component

const JoinLink = ({ message, bgColor, textColor, icon, linkUrl }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to close the banner
  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Do not render if not visible

  return (
    <div
      className={`w-full py-4 text-center ${bgColor} ${textColor} flex justify-between items-center`}
      style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
    >
      <div className="flex items-center justify-center w-full">
        {icon && <span className="mr-2">{icon}</span>}
        <span dangerouslySetInnerHTML={{ __html: message }} />
      </div>

      <div className="flex items-center justify-center h-full">
  {/* Join Link Button */}
  <Link href={linkUrl}>
    <button
      className="bg-red text-blue text-xl px-3 py-3 rounded cursor-pointer hover:bg-green-800 hover:text-yellow-500 transition duration-300 animate-blink"
      onClick={closeBanner} // Close banner when button is clicked
    >
      JOIN NOW
    </button>
    
  </Link>
</div>

    </div>
  );
};

export default JoinLink;
