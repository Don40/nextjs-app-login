import React, { useState, useEffect } from "react";

const Hero = ({ bgImage, text, paragraph }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative w-full bg-cover bg-center ${
        isMobile ? "animate-moveBgMobile" : "animate-moveBgDesktop"
      }`}
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "100vh", // Adjust height if necessary
        backgroundSize: "200%", // Allow enough space for animation
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden p-4 ">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center font-raleway">
          {text}
        </h1>
        <div className="max-w-6xl text-white text-base lg:text-lg md:text-2xl sm:text-xl xs:text-base text-center my-8 mx-1 md:mx-9 leading-9 tracking-wider font-extrabold font-montserrat overflow-auto max-h-40vh">
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />
        </div>
        <button
          type="button"
          className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
